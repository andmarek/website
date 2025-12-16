"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#FF6B6B", // coral red
  "#4ECDC4", // teal
  "#FFE66D", // yellow
  "#95E1D3", // mint
  "#F38181", // salmon
  "#AA96DA", // lavender
  "#FCBAD3", // pink
  "#A8D8EA", // sky blue
  "#FF9F43", // orange
  "#6C5CE7", // purple
];

const PIXEL_SIZE = 16;
const HIGHLIGHT_DURATION = 900;
const SPAWN_INTERVAL = 50;

interface Pixel {
  x: number;
  y: number;
  color: string;
  opacity: number;
  startTime: number;
}

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = canvas.parentElement;
    if (!container) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      const cols = Math.ceil(canvas.width / PIXEL_SIZE);
      const rows = Math.ceil(canvas.height / PIXEL_SIZE);

      if (time - lastSpawnRef.current > SPAWN_INTERVAL) {
        const x = Math.floor(Math.random() * cols) * PIXEL_SIZE;
        const y = Math.floor(Math.random() * rows) * PIXEL_SIZE;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        pixelsRef.current.push({ x, y, color, opacity: 1, startTime: time });
        lastSpawnRef.current = time;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pixelsRef.current = pixelsRef.current.filter((pixel) => {
        const elapsed = time - pixel.startTime;
        if (elapsed > HIGHLIGHT_DURATION) return false;

        const progress = elapsed / HIGHLIGHT_DURATION;
        pixel.opacity = 1 - progress;

        ctx.globalAlpha = pixel.opacity * 0.7;
        ctx.fillStyle = pixel.color;
        ctx.fillRect(pixel.x, pixel.y, PIXEL_SIZE - 2, PIXEL_SIZE - 2);

        return true;
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
