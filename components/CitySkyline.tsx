import { useCallback, useEffect, useRef } from "react";

interface Building {
  x: number;
  width: number;
  height: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

interface CitySkylineProps {
  className?: string;
}

const WINDOW_SIZE = 4;
const WINDOW_GAP = 3;
const BUILDING_GAP = 2;
const FLICKER_CHANCE = 0.035;
const MAX_OPACITY = 0.9;
const MIN_OPACITY = 0.05;

const CitySkyline = ({ className }: CitySkylineProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buildingsRef = useRef<Building[]>([]);
  const windowsRef = useRef<Map<string, number>>(new Map());
  const shootingStarRef = useRef<ShootingStar>({
    x: 0, y: 0, length: 0, speed: 0, angle: 0, opacity: 0, active: false,
  });
  const sunAngleRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const lastFlickerRef = useRef(0);

  const isDark = useCallback(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  }, []);

  const getColor = useCallback(() => {
    return isDark() ? "rgb(210, 215, 223)" : "rgb(9, 83, 188)";
  }, [isDark]);

  const generateBuildings = useCallback((width: number, height: number) => {
    const buildings: Building[] = [];
    let x = 0;
    const minW = 12;
    const maxW = 30;
    const minH = height * 0.15;
    const maxH = height * 0.6;

    while (x < width) {
      const w = Math.floor(Math.random() * (maxW - minW) + minW);
      const h = Math.floor(Math.random() * (maxH - minH) + minH);
      buildings.push({ x, width: Math.min(w, width - x), height: h });
      x += w + BUILDING_GAP;
    }
    return buildings;
  }, []);

  const initWindows = useCallback((buildings: Building[]) => {
    const windows = new Map<string, number>();
    for (let bi = 0; bi < buildings.length; bi++) {
      const b = buildings[bi];
      const cols = Math.floor((b.width - 2) / (WINDOW_SIZE + WINDOW_GAP));
      const rows = Math.floor((b.height - 2) / (WINDOW_SIZE + WINDOW_GAP));
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const lit = Math.random() > 0.35;
          windows.set(
            `${bi}-${r}-${c}`,
            lit ? Math.random() * (MAX_OPACITY - 0.2) + 0.2 : MIN_OPACITY
          );
        }
      }
    }
    return windows;
  }, []);

  const spawnShootingStar = useCallback((width: number) => {
    const star = shootingStarRef.current;
    star.x = Math.random() * width * 0.6;
    star.y = Math.random() * 15 + 2;
    star.length = Math.random() * 30 + 20;
    star.speed = Math.random() * 3 + 2;
    star.angle = Math.random() * 0.3 + 0.15;
    star.opacity = 1;
    star.active = true;
  }, []);

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const { width, height } = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const buildings = generateBuildings(width, height);
    buildingsRef.current = buildings;
    windowsRef.current = initWindows(buildings);
  }, [generateBuildings, initWindows]);

  const drawSun = useCallback(
    (ctx: CanvasRenderingContext2D, width: number) => {
      const sunX = width * 0.82;
      const sunY = 22;
      const radius = 10;
      const color = "rgb(9, 83, 188)";

      // Glow
      const glow = ctx.createRadialGradient(sunX, sunY, radius * 0.5, sunX, sunY, radius * 2.5);
      glow.addColorStop(0, "rgba(9, 83, 188, 0.12)");
      glow.addColorStop(1, "rgba(9, 83, 188, 0)");
      ctx.fillStyle = glow;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(sunX, sunY, radius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Sun body
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(sunX, sunY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Rays
      sunAngleRef.current += 0.008;
      const rayCount = 8;
      for (let i = 0; i < rayCount; i++) {
        const angle = sunAngleRef.current + (i * Math.PI * 2) / rayCount;
        const innerR = radius + 3;
        const outerR = radius + 7;
        const x1 = sunX + Math.cos(angle) * innerR;
        const y1 = sunY + Math.sin(angle) * innerR;
        const x2 = sunX + Math.cos(angle) * outerR;
        const y2 = sunY + Math.sin(angle) * outerR;

        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.15;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    },
    []
  );

  const drawShootingStar = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const star = shootingStarRef.current;
      if (!star.active) return;

      const tailX = star.x - Math.cos(star.angle) * star.length;
      const tailY = star.y - Math.sin(star.angle) * star.length;

      const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
      gradient.addColorStop(0, "rgba(210, 215, 223, 0)");
      gradient.addColorStop(0.7, `rgba(210, 215, 223, ${star.opacity * 0.4})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(star.x, star.y);
      ctx.stroke();

      // Head glow
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    },
    []
  );

  const updateShootingStar = useCallback(
    (width: number) => {
      const star = shootingStarRef.current;
      if (star.active) {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.012;
        if (star.opacity <= 0 || star.x > width) {
          star.active = false;
        }
      } else if (Math.random() < 0.005) {
        spawnShootingStar(width);
      }
    },
    [spawnShootingStar]
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);

    const dark = isDark();

    // Sky elements
    if (dark) {
      updateShootingStar(width);
      drawShootingStar(ctx);
    } else {
      drawSun(ctx, width);
    }

    // Buildings
    const color = getColor();
    const buildings = buildingsRef.current;
    const windows = windowsRef.current;

    for (let bi = 0; bi < buildings.length; bi++) {
      const b = buildings[bi];
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.06;
      ctx.fillRect(b.x, height - b.height, b.width, b.height);

      ctx.globalAlpha = 0.15;
      ctx.fillRect(b.x, height - b.height, b.width, 1);

      const cols = Math.floor((b.width - 2) / (WINDOW_SIZE + WINDOW_GAP));
      const rows = Math.floor((b.height - 2) / (WINDOW_SIZE + WINDOW_GAP));
      const offsetX =
        b.x +
        Math.floor(
          (b.width - cols * (WINDOW_SIZE + WINDOW_GAP) + WINDOW_GAP) / 2
        );

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const wx = offsetX + c * (WINDOW_SIZE + WINDOW_GAP);
          const wy = height - b.height + 4 + r * (WINDOW_SIZE + WINDOW_GAP);
          const opacity = windows.get(`${bi}-${r}-${c}`) || MIN_OPACITY;

          ctx.globalAlpha = opacity;
          ctx.fillStyle = color;
          ctx.fillRect(wx, wy, WINDOW_SIZE, WINDOW_SIZE);
        }
      }
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
  }, [getColor, isDark, drawSun, drawShootingStar, updateShootingStar]);

  const flicker = useCallback(() => {
    const windows = windowsRef.current;
    windows.forEach((opacity, key) => {
      if (Math.random() < FLICKER_CHANCE) {
        const isLit = opacity > 0.15;
        if (isLit && Math.random() < 0.3) {
          windows.set(key, MIN_OPACITY);
        } else if (!isLit && Math.random() < 0.2) {
          windows.set(key, Math.random() * (MAX_OPACITY - 0.3) + 0.3);
        } else if (isLit) {
          windows.set(
            key,
            Math.max(
              MIN_OPACITY,
              Math.min(MAX_OPACITY, opacity + (Math.random() - 0.5) * 0.3)
            )
          );
        }
      }
    });
  }, []);

  useEffect(() => {
    setup();

    const animate = (time: number) => {
      if (time - lastFlickerRef.current > 500) {
        flicker();
        lastFlickerRef.current = time;
      }
      draw();
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => draw());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [setup, draw, flicker]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-32 overflow-hidden ${className || ""}`}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default CitySkyline;
