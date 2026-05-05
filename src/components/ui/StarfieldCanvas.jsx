import { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrameId;
    let mouse = { x: -1000, y: -1000 };
    const DOT_GAP = 12;
    const MOUSE_RADIUS = 80;
    const PUSH_STRENGTH = 12;

    // Grid state
    let dots = [];
    let stars = [];
    let shootingStars = [];
    let breathPhase = 0;
    let width, height;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      initGrid();
    }

    function initGrid() {
      dots = [];
      stars = [];
      const cols = Math.ceil(width / DOT_GAP) + 1;
      const rows = Math.ceil(height / DOT_GAP) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * DOT_GAP;
          const y = r * DOT_GAP;
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });

          // Random chance to become a star
          const rand = Math.random();
          if (rand < 0.008) {
            stars.push({
              x, y,
              ox: x, oy: y,
              type: 'bright',
              phase: Math.random() * Math.PI * 2,
              speed: 0.5 + Math.random() * 1.5,
              baseSize: 1.8 + Math.random() * 1.2,
              flareTimer: 0,
              flareDuration: 0,
              vx: 0, vy: 0,
            });
          } else if (rand < 0.025) {
            stars.push({
              x, y,
              ox: x, oy: y,
              type: 'medium',
              phase: Math.random() * Math.PI * 2,
              speed: 0.8 + Math.random() * 1,
              baseSize: 1 + Math.random() * 0.8,
              flareTimer: 0,
              flareDuration: 0,
              vx: 0, vy: 0,
            });
          } else if (rand < 0.06) {
            stars.push({
              x, y,
              ox: x, oy: y,
              type: 'small',
              phase: Math.random() * Math.PI * 2,
              speed: 1 + Math.random() * 1.5,
              baseSize: 0.5 + Math.random() * 0.5,
              flareTimer: 0,
              flareDuration: 0,
              vx: 0, vy: 0,
            });
          }
        }
      }
    }

    function spawnShootingStar() {
      if (shootingStars.length >= 2) return;
      const startX = Math.random() * width * 0.6;
      const startY = Math.random() * height * 0.3;
      shootingStars.push({
        x: startX,
        y: startY,
        vx: 2 + Math.random() * 3,
        vy: 1 + Math.random() * 2,
        life: 1,
        decay: 0.008 + Math.random() * 0.008,
        trail: [],
      });
    }

    function drawDot(x, y, alpha) {
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fillRect(x - 0.4, y - 0.4, 0.8, 0.8);
    }

    function drawStar4(x, y, size, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      // 4-point star
      const s = size;
      ctx.moveTo(x, y - s);
      ctx.lineTo(x + s * 0.25, y - s * 0.25);
      ctx.lineTo(x + s, y);
      ctx.lineTo(x + s * 0.25, y + s * 0.25);
      ctx.lineTo(x, y + s);
      ctx.lineTo(x - s * 0.25, y + s * 0.25);
      ctx.lineTo(x - s, y);
      ctx.lineTo(x - s * 0.25, y - s * 0.25);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function drawGlow(x, y, radius, alpha) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0, `rgba(255,255,255,${alpha * 0.6})`);
      grad.addColorStop(1, `rgba(255,255,255,0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate(time) {
      const t = time * 0.001;
      ctx.clearRect(0, 0, width, height);
      breathPhase += 0.003;

      // Spawn shooting stars occasionally
      if (Math.random() < 0.003) spawnShootingStar();

      // Draw dots
      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * PUSH_STRENGTH;
          const angle = Math.atan2(dy, dx);
          dot.vx += Math.cos(angle) * force * 0.15;
          dot.vy += Math.sin(angle) * force * 0.15;
        }

        // Spring back
        dot.vx += (dot.ox - dot.x) * 0.08;
        dot.vy += (dot.oy - dot.y) * 0.08;
        dot.vx *= 0.85;
        dot.vy *= 0.85;
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Breathing wave
        const bwave = Math.sin(breathPhase + dot.ox * 0.005 + dot.oy * 0.003) * 0.5 + 0.5;
        const alpha = 0.08 + bwave * 0.06;
        drawDot(dot.x, dot.y, alpha);
      }

      // Draw stars
      for (const star of stars) {
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * PUSH_STRENGTH;
          const angle = Math.atan2(dy, dx);
          star.vx += Math.cos(angle) * force * 0.12;
          star.vy += Math.sin(angle) * force * 0.12;
        }

        star.vx += (star.ox - star.x) * 0.06;
        star.vy += (star.oy - star.y) * 0.06;
        star.vx *= 0.88;
        star.vy *= 0.88;
        star.x += star.vx;
        star.y += star.vy;

        const twinkle = Math.sin(t * star.speed + star.phase);

        // Occasional flare
        if (star.flareTimer <= 0 && Math.random() < 0.0004) {
          star.flareTimer = 1;
          star.flareDuration = 30 + Math.random() * 40;
        }

        let flareBoost = 0;
        if (star.flareTimer > 0) {
          flareBoost = Math.sin(star.flareTimer * Math.PI) * 0.6;
          star.flareTimer -= 1 / star.flareDuration;
        }

        if (star.type === 'bright') {
          const alpha = 0.5 + twinkle * 0.35 + flareBoost;
          const size = star.baseSize + twinkle * 0.5 + flareBoost * 2;
          drawStar4(star.x, star.y, size, Math.min(alpha, 1));
          drawGlow(star.x, star.y, size * 3, alpha * 0.3);
        } else if (star.type === 'medium') {
          const alpha = 0.35 + twinkle * 0.3 + flareBoost;
          const size = star.baseSize + twinkle * 0.3;
          drawStar4(star.x, star.y, size, Math.min(alpha, 1));
        } else {
          const alpha = 0.2 + twinkle * 0.25;
          drawDot(star.x, star.y, Math.min(alpha + 0.2, 0.7));
        }
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life -= ss.decay;
        ss.trail.push({ x: ss.x, y: ss.y, alpha: ss.life });
        if (ss.trail.length > 20) ss.trail.shift();

        for (let j = 0; j < ss.trail.length; j++) {
          const t2 = ss.trail[j];
          const trailAlpha = t2.alpha * (j / ss.trail.length) * 0.6;
          ctx.fillStyle = `rgba(255,255,255,${Math.max(0, trailAlpha)})`;
          const sz = (j / ss.trail.length) * 1.5;
          ctx.fillRect(t2.x, t2.y, sz, sz);
        }

        // Head glow
        drawGlow(ss.x, ss.y, 4, ss.life * 0.5);

        if (ss.life <= 0 || ss.x > width || ss.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      animFrameId = requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    resize();
    animFrameId = requestAnimationFrame(animate);

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animFrameId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
      }}
    />
  );
}
