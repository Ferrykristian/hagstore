/* DESIGN: Mangekyou Sharingan — Crow silhouettes flying across screen */
import { useEffect, useRef } from "react";

interface Crow {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  wingPhase: number;
  wingSpeed: number;
  delay: number;
  active: boolean;
  timer: number;
}

export default function CrowAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const crows: Crow[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnCrow = (): Crow => ({
      x: -100,
      y: Math.random() * canvas.height * 0.7 + 50,
      speed: Math.random() * 1.5 + 0.8,
      size: Math.random() * 20 + 12,
      opacity: Math.random() * 0.4 + 0.15,
      wingPhase: Math.random() * Math.PI * 2,
      wingSpeed: Math.random() * 0.08 + 0.04,
      delay: 0,
      active: true,
      timer: 0,
    });

    // Spawn initial crows with staggered positions
    for (let i = 0; i < 3; i++) {
      const crow = spawnCrow();
      crow.x = Math.random() * canvas.width;
      crows.push(crow);
    }

    let spawnTimer = 0;

    const drawCrow = (crow: Crow) => {
      const { x, y, size, opacity, wingPhase } = crow;
      const wingAngle = Math.sin(wingPhase) * 0.6;

      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#1a0505";

      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.6, size * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();

      // Head
      ctx.beginPath();
      ctx.ellipse(size * 0.5, -size * 0.1, size * 0.2, size * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();

      // Beak
      ctx.beginPath();
      ctx.moveTo(size * 0.65, -size * 0.08);
      ctx.lineTo(size * 0.85, -size * 0.02);
      ctx.lineTo(size * 0.65, size * 0.02);
      ctx.fill();

      // Left wing
      ctx.save();
      ctx.rotate(-wingAngle);
      ctx.beginPath();
      ctx.moveTo(-size * 0.1, 0);
      ctx.quadraticCurveTo(-size * 0.6, -size * 0.8, -size * 1.1, -size * 0.3);
      ctx.quadraticCurveTo(-size * 0.5, -size * 0.1, -size * 0.1, 0);
      ctx.fill();
      ctx.restore();

      // Right wing
      ctx.save();
      ctx.rotate(wingAngle);
      ctx.beginPath();
      ctx.moveTo(-size * 0.1, 0);
      ctx.quadraticCurveTo(-size * 0.6, size * 0.8, -size * 1.1, size * 0.3);
      ctx.quadraticCurveTo(-size * 0.5, size * 0.1, -size * 0.1, 0);
      ctx.fill();
      ctx.restore();

      // Tail
      ctx.beginPath();
      ctx.moveTo(-size * 0.5, 0);
      ctx.lineTo(-size * 0.9, -size * 0.15);
      ctx.lineTo(-size * 0.85, size * 0.15);
      ctx.fill();

      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spawnTimer++;
      if (spawnTimer > 180 && crows.length < 6) {
        crows.push(spawnCrow());
        spawnTimer = 0;
      }

      for (let i = crows.length - 1; i >= 0; i--) {
        const crow = crows[i];
        crow.x += crow.speed;
        crow.y += Math.sin(crow.timer * 0.02) * 0.3;
        crow.wingPhase += crow.wingSpeed;
        crow.timer++;

        drawCrow(crow);

        if (crow.x > canvas.width + 150) {
          crows.splice(i, 1);
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
        zIndex: 2,
        opacity: 0.7,
      }}
    />
  );
}
