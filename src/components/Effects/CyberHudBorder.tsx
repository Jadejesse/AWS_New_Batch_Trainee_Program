import React, { useEffect, useRef } from 'react';
import './CyberHudBorder.css';

interface CyberHudBorderProps {
    children: React.ReactNode;
    className?: string;
    active?: boolean;
}

const CyberHudBorder: React.FC<CyberHudBorderProps> = ({ children, className = '', active = false }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Array<{
            progress: number;
            speed: number;
            size: number;
            color: string;
        }> = [];

        const updateCanvasSize = () => {
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < 20; i++) {
                particles.push({
                    progress: Math.random(),
                    speed: 0.001 + Math.random() * 0.002,
                    size: 1 + Math.random() * 2,
                    color: Math.random() > 0.5 ? '#00f0ff' : '#ff00ff'
                });
            }
        };

        const getPathPos = (progress: number, width: number, height: number) => {
            const p = progress % 1;
            const perimeter = 2 * (width + height);
            const dist = p * perimeter;

            if (dist < width) return { x: dist, y: 0 };
            if (dist < width + height) return { x: width, y: dist - width };
            if (dist < 2 * width + height) return { x: width - (dist - (width + height)), y: height };
            return { x: 0, y: height - (dist - (2 * width + height)) };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { width, height } = canvas;

            particles.forEach(p => {
                p.progress += p.speed;
                const pos = getPathPos(p.progress, width, height);

                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            requestAnimationFrame(animate);
        };

        updateCanvasSize();
        createParticles();
        animate();

        const resizeObserver = new ResizeObserver(updateCanvasSize);
        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, [active]);

    return (
        <div ref={containerRef} className={`cyber-hud-container ${active ? 'active' : ''} ${className}`}>
            <canvas ref={canvasRef} className="cyber-hud-canvas" />
            <div className="cyber-hud-content">
                {children}
            </div>
            <div className="corner-decor top-left"></div>
            <div className="corner-decor top-right"></div>
            <div className="corner-decor bottom-left"></div>
            <div className="corner-decor bottom-right"></div>
        </div>
    );
};

export default CyberHudBorder;
