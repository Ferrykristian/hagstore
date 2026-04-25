/* DESIGN: Mangekyou Sharingan — red particles floating upward like chakra energy */
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  type: "dot" | "feather";
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 1.2 + 0.4),
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      life: 0,
      maxLife: Math.random() * 200 + 150,
      type: Math.random() > 0.85 ? "feather" : "dot",
    });

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      const p = spawnParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new particles
      if (particles.length < 80 && Math.random() < 0.3) {
        particles.push(spawnParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const lifeRatio = p.life / p.maxLife;
        const alpha = lifeRatio < 0.1
          ? lifeRatio * 10 * p.opacity
          : lifeRatio > 0.8
          ? (1 - lifeRatio) * 5 * p.opacity
          : p.opacity;

        if (p.type === "dot") {
          // Glowing red dot
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          gradient.addColorStop(0, `rgba(255, 50, 50, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(204, 26, 26, ${alpha * 0.6})`);
          gradient.addColorStop(1, `rgba(139, 0, 0, 0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 200, 200, ${alpha})`;
          ctx.fill();
        } else {
          // Feather-like stroke
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.vx * 5);
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 4);
          ctx.quadraticCurveTo(p.size * 1.5, 0, 0, p.size * 4);
          ctx.quadraticCurveTo(-p.size * 1.5, 0, 0, -p.size * 4);
          ctx.fillStyle = `rgba(180, 20, 20, ${alpha * 0.6})`;
          ctx.fill();
          ctx.restore();
        }

        if (p.life >= p.maxLife || p.y < -20) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.6,
      }}
    />
  );
}
