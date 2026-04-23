import React from 'react';
import styled, { keyframes } from 'styled-components';

const drift1 = keyframes`
  0%   { transform: translate3d(-10%, -10%, 0) scale(1);   }
  33%  { transform: translate3d(15%, 5%, 0)   scale(1.1); }
  66%  { transform: translate3d(-5%, 20%, 0)  scale(0.95); }
  100% { transform: translate3d(-10%, -10%, 0) scale(1);   }
`;

const drift2 = keyframes`
  0%   { transform: translate3d(20%, 30%, 0) scale(1);    }
  40%  { transform: translate3d(-15%, 10%, 0) scale(1.15); }
  80%  { transform: translate3d(10%, -20%, 0) scale(0.9);  }
  100% { transform: translate3d(20%, 30%, 0) scale(1);    }
`;

const drift3 = keyframes`
  0%   { transform: translate3d(10%, -20%, 0) scale(0.95); }
  50%  { transform: translate3d(-25%, 25%, 0) scale(1.1);  }
  100% { transform: translate3d(10%, -20%, 0) scale(0.95); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.15; }
  50%      { opacity: 0.6;  }
`;

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(at 20% 10%, rgba(100, 255, 218, 0.08), transparent 55%),
    radial-gradient(at 85% 15%, rgba(124, 92, 255, 0.1), transparent 55%),
    radial-gradient(at 50% 95%, rgba(255, 78, 205, 0.06), transparent 55%), var(--dark-navy);

  .aurora {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    will-change: transform;

    @media (prefers-reduced-motion: reduce) {
      animation: none !important;
    }
  }

  .aurora-1 {
    width: 60vw;
    height: 60vw;
    top: -15vw;
    left: -10vw;
    background: radial-gradient(circle, #64ffda 0%, transparent 60%);
    opacity: 0.22;
    animation: ${drift1} 28s ease-in-out infinite;
  }
  .aurora-2 {
    width: 55vw;
    height: 55vw;
    top: 20vh;
    right: -15vw;
    background: radial-gradient(circle, #7c5cff 0%, transparent 60%);
    opacity: 0.25;
    animation: ${drift2} 34s ease-in-out infinite;
  }
  .aurora-3 {
    width: 50vw;
    height: 50vw;
    bottom: -20vw;
    left: 20vw;
    background: radial-gradient(circle, #ff4ecd 0%, transparent 60%);
    opacity: 0.18;
    animation: ${drift3} 40s ease-in-out infinite;
  }
  .aurora-4 {
    width: 42vw;
    height: 42vw;
    top: 55vh;
    left: -8vw;
    background: radial-gradient(circle, #00e5ff 0%, transparent 60%);
    opacity: 0.16;
    animation: ${drift2} 44s ease-in-out infinite reverse;
  }

  /* Conic sweep overlay */
  .sweep {
    position: absolute;
    inset: -10%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent 0%,
      rgba(100, 255, 218, 0.04) 25%,
      transparent 50%,
      rgba(124, 92, 255, 0.04) 75%,
      transparent 100%
    );
    animation: spin 60s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Star constellation */
  .stars {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        1.5px 1.5px at 20% 30%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 100%
      ),
      radial-gradient(1px 1px at 40% 70%, rgba(100, 255, 218, 0.9) 50%, transparent 100%),
      radial-gradient(1.5px 1.5px at 65% 40%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
      radial-gradient(1px 1px at 80% 80%, rgba(124, 92, 255, 0.9) 50%, transparent 100%),
      radial-gradient(1.5px 1.5px at 10% 85%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
      radial-gradient(1px 1px at 55% 15%, rgba(0, 229, 255, 0.9) 50%, transparent 100%),
      radial-gradient(1.5px 1.5px at 90% 50%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
      radial-gradient(1px 1px at 30% 50%, rgba(255, 78, 205, 0.7) 50%, transparent 100%),
      radial-gradient(1px 1px at 75% 20%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
      radial-gradient(1.5px 1.5px at 5% 50%, rgba(100, 255, 218, 0.7) 50%, transparent 100%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: ${twinkle} 6s ease-in-out infinite;
    opacity: 0.9;
  }

  /* Film grain (SVG noise) */
  .grain {
    position: absolute;
    inset: -50%;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
    opacity: 0.05;
    mix-blend-mode: overlay;
    pointer-events: none;
  }
`;

const Aurora = () => (
  <StyledBackdrop aria-hidden="true">
    <div className="sweep" />
    <span className="aurora aurora-1" />
    <span className="aurora aurora-2" />
    <span className="aurora aurora-3" />
    <span className="aurora aurora-4" />
    <div className="stars" />
    <div className="grain" />
  </StyledBackdrop>
);

export default Aurora;
