import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Magnetic = ({ children, strength = 0.25, range = 120 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') {return undefined;}

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    if (window.matchMedia('(hover: none)').matches) {
      return undefined;
    }

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    const onMove = e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < range) {
        targetX = dx * strength;
        targetY = dy * strength;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
      el.style.transform = '';
    };
  }, [strength, range]);

  return (
    <span ref={ref} style={{ display: 'inline-block', willChange: 'transform' }}>
      {children}
    </span>
  );
};

Magnetic.propTypes = {
  children: PropTypes.node.isRequired,
  strength: PropTypes.number,
  range: PropTypes.number,
};

export default Magnetic;
