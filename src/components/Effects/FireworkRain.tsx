import React, { useEffect, useRef } from 'react';

const FireworkRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            alpha: number;
            color: string;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 3 + 1;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.alpha = 1;
                this.color = color;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.05; // Gravity
                this.alpha -= 0.01;
            }

            draw(context: CanvasRenderingContext2D) {
                context.globalAlpha = this.alpha;
                context.fillStyle = this.color;
                context.beginPath();
                context.arc(this.x, this.y, 2, 0, Math.PI * 2);
                context.fill();
            }
        }

        let particles: Particle[] = [];
        const colors = ['#ff00ff', '#00f0ff', '#f0ff00', '#ff0000', '#00ff00'];

        const createFirework = (x: number, y: number) => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(x, y, color));
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.05) {
                createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.5);
            }

            particles = particles.filter(p => p.alpha > 0);
            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'screen'
            }}
        />
    );
};

export default FireworkRain;
