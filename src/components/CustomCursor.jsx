import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animRef = useRef(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Move dot instantly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Smooth ring follow using lerp
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${ringPos.current.x}px`;
        cursorRingRef.current.style.top = `${ringPos.current.y}px`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    // Detect hoverable elements
    const handleMouseEnter = (e) => {
      const el = e.target;
      if (
        el.matches('a, button, [role="button"], input, textarea, select, label, [data-hover]')
        || el.closest('a, button, [role="button"]')
      ) {
        setIsHovering(true);
      }
    };
    const handleMouseLeave = () => setIsHovering(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    animRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot — snaps instantly to cursor */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          width: isClicking ? '6px' : '8px',
          height: isClicking ? '6px' : '8px',
          background: isHovering ? '#8b5cf6' : '#06b6d4',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s ease, height 0.15s ease, background 0.3s ease',
          boxShadow: isHovering
            ? '0 0 12px #8b5cf6, 0 0 24px rgba(139,92,246,0.4)'
            : '0 0 10px #06b6d4, 0 0 20px rgba(6,182,212,0.3)',
        }}
      />

      {/* Outer ring — follows with lag (lerp) */}
      <div
        ref={cursorRingRef}
        style={{
          position: 'fixed',
          width: isHovering ? '50px' : isClicking ? '28px' : '38px',
          height: isHovering ? '50px' : isClicking ? '28px' : '38px',
          border: `2px solid ${isHovering ? 'rgba(139,92,246,0.6)' : 'rgba(6,182,212,0.5)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.3s ease, opacity 0.3s ease',
          opacity: isClicking ? 0.4 : 0.8,
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
          background: isHovering ? 'rgba(139,92,246,0.05)' : 'transparent',
        }}
      />
    </>
  );
}
