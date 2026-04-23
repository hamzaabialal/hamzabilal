import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledGlow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  transform: translate3d(-50%, -50%, 0);
  background: radial-gradient(
    circle,
    rgba(100, 255, 218, 0.12) 0%,
    rgba(124, 92, 255, 0.06) 40%,
    transparent 70%
  );
  mix-blend-mode: screen;
  opacity: 0;
  transition: opacity 600ms ease;

  @media (max-width: 900px), (hover: none) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {return undefined;}

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId;

    const tick = () => {
      // smooth lerp
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    const onMove = e => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = '1';
    };
    const onLeave = () => {
      el.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <StyledGlow ref={ref} aria-hidden="true" />;
};

export default CursorGlow;
