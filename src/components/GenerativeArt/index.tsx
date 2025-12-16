"use client";

import { useEffect, useRef } from "react";

// Gruvbox color palette
const COLORS = [
  "#fb4934", // red
  "#b8bb26", // green
  "#fabd2f", // yellow
  "#83a598", // blue
  "#d3869b", // purple
  "#8ec07c", // aqua
  "#fe8019", // orange
];

const BG_COLOR = "#282828";
const PIXEL_SIZE = 20;
const GAP = 4;
const HIGHLIGHT_DURATION = 1200;
const SPAWN_RATE = 120; // ms between new highlights

interface HighlightedPixel {
  gridX: number;
  gridY: number;
  color: string;
  startTime: number;
}

export default function GenerativeArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const highlightsRef = useRef<HighlightedPixel[]>([]);
  const lastSpawnRef = useRef<number>(0);
  const gridRef = useRef<{ cols: number; rows: number }>({ cols: 0, rows: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cellSize = PIXEL_SIZE + GAP;
      gridRef.current = {
        cols: Math.ceil(canvas.width / cellSize),
        rows: Math.ceil(canvas.height / cellSize),
      };
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      const cellSize = PIXEL_SIZE + GAP;
      const { cols, rows } = gridRef.current;

      // Spawn new highlight
      if (time - lastSpawnRef.current > SPAWN_RATE) {
        const gridX = Math.floor(Math.random() * cols);
        const gridY = Math.floor(Math.random() * rows);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        highlightsRef.current.push({ gridX, gridY, color, startTime: time });
        lastSpawnRef.current = time;
      }

      // Draw matte background
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update highlights
      highlightsRef.current = highlightsRef.current.filter((pixel) => {
        const elapsed = time - pixel.startTime;
        if (elapsed > HIGHLIGHT_DURATION) return false;

        const progress = elapsed / HIGHLIGHT_DURATION;
        // Fade in then out
        const alpha = progress < 0.3 
          ? progress / 0.3 
          : 1 - ((progress - 0.3) / 0.7);

        const x = pixel.gridX * cellSize;
        const y = pixel.gridY * cellSize;

        ctx.globalAlpha = alpha * 0.6;
        ctx.fillStyle = pixel.color;
        ctx.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);

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
      className="fixed inset-0"
      style={{ zIndex: 0 }}
    />
  );
}
