'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef(null);

  useEffect(() => {
    const r = ringRef.current;
    const d = dotRef.current;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      d.style.left = `${e.clientX}px`;
      d.style.top  = `${e.clientY}px`;
    };
    const lerp   = (a, b, n) => a + (b - a) * n;
    const tick   = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.11);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.11);
      r.style.left = `${ring.current.x}px`;
      r.style.top  = `${ring.current.y}px`;
      raf.current = requestAnimationFrame(tick);
    };
    const onEnter = () => r.classList.add('hovered');
    const onLeave = () => r.classList.remove('hovered');
    const onDown  = () => r.classList.add('clicking');
    const onUp    = () => r.classList.remove('clicking');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef}  className="cursor-dot"  />
    </>
  );
}