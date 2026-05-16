'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>
      <div 
        className="cursor-dot" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>
    </>
  );
}
