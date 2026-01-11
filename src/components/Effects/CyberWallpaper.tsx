import React, { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    vUv.y = 1.0 - vUv.y;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uParallax;

  void main() {
    vec2 res = uResolution.xy;
    vec2 uv = vUv;
    
    // 3D Parallax offset
    vec2 mouseOffset = (uMouse - 0.5) * uParallax;
    uv += mouseOffset * 0.02;

    // Water Ripple Logic
    vec2 distVec = vUv - uMouse;
    float dist = length(distVec);
    
    // Multiple wave layers
    float ripple = sin(dist * 40.0 - uTime * 4.0) * 0.005;
    ripple += sin(dist * 20.0 - uTime * 2.0) * 0.003;
    
    // Attenuate ripple based on distance to mouse
    float mask = smoothstep(0.4, 0.0, dist);
    uv += (distVec / max(dist, 0.01)) * ripple * mask;

    // Chromatic Aberration
    float r = texture2D(uTexture, uv + vec2(0.002, 0.0) * mask).r;
    float g = texture2D(uTexture, uv).g;
    float b = texture2D(uTexture, uv - vec2(0.002, 0.0) * mask).b;
    
    vec4 color = vec4(r, g, b, 1.0);
    
    // Bloom/Glow overlay
    float brightness = (r + g + b) / 3.0;
    if (brightness > 0.8) {
        color.rgb += vec3(0.1, 0.05, 0.2) * mask;
    }

    gl_FragColor = color;
  }
`;

interface CyberWallpaperProps {
    imageUrl: string;
}

const CyberWallpaper: React.FC<CyberWallpaperProps> = ({ imageUrl }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) return;

        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type)!;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        };

        const program = gl.createProgram()!;
        gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER));
        gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
        gl.linkProgram(program);
        gl.useProgram(program);

        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLoc = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

        const texture = gl.createTexture();
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = imageUrl;
        image.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        };

        const uResLoc = gl.getUniformLocation(program, 'uResolution');
        const uMouseLoc = gl.getUniformLocation(program, 'uMouse');
        const uTimeLoc = gl.getUniformLocation(program, 'uTime');
        const uParallaxLoc = gl.getUniformLocation(program, 'uParallax');

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        const render = (time: number) => {
            timeRef.current = time * 0.001;
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.uniform2f(uResLoc, canvas.width, canvas.height);
            gl.uniform2f(uMouseLoc, mouseRef.current.x, mouseRef.current.y);
            gl.uniform1f(uTimeLoc, timeRef.current);
            gl.uniform1f(uParallaxLoc, 1.0);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [imageUrl]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default CyberWallpaper;
