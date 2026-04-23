import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const spinGradient = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const StyledMetricsSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 0;

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledCard = styled.div`
  position: relative;
  padding: 34px 28px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(28, 40, 71, 0.55) 0%, rgba(10, 15, 31, 0.75) 100%);
  backdrop-filter: blur(14px);
  overflow: hidden;
  isolation: isolate;
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);

  /* Rotating conic-gradient border */
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 16px;
    padding: 2px;
    background: conic-gradient(
      from 0deg,
      #64ffda 0%,
      #00e5ff 25%,
      #7c5cff 50%,
      #ff4ecd 75%,
      #64ffda 100%
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.45;
    animation: ${spinGradient} 14s linear infinite;
    z-index: -1;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 10%, rgba(100, 255, 218, 0.14), transparent 55%);
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 60px -20px rgba(124, 92, 255, 0.35);
  }
  &:hover::before {
    opacity: 1;
  }

  .metric-value {
    font-family: var(--font-mono);
    font-size: clamp(36px, 5vw, 54px);
    line-height: 1;
    background: var(--grad-primary);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: gradShift 6s ease-in-out infinite;
    letter-spacing: -0.02em;
    font-weight: 600;
  }

  .metric-suffix {
    font-size: 0.6em;
    margin-left: 2px;
    color: var(--green);
    -webkit-text-fill-color: var(--green);
  }

  .metric-label {
    margin-top: 12px;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: var(--light-slate);
    letter-spacing: 0.02em;
  }

  .metric-sub {
    margin-top: 6px;
    font-size: var(--fz-xs);
    color: var(--slate);
  }
`;

const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

const Counter = ({ target, duration = 1600, suffix = '', decimals = 0, prefix = '' }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setValue(target);
      return undefined;
    }
    const node = ref.current;
    if (!node) {
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const tick = now => {
            const t = Math.min((now - start) / duration, 1);
            const eased = easeOutCubic(t);
            setValue(target * eased);
            if (t < 1) {
              requestAnimationFrame(tick);
            } else {
              setValue(target);
            }
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target, duration, started]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <span ref={ref} className="metric-value">
      {prefix}
      {display}
      {suffix && <span className="metric-suffix">{suffix}</span>}
    </span>
  );
};

Counter.propTypes = {
  target: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string,
  decimals: PropTypes.number,
  prefix: PropTypes.string,
};

Counter.defaultProps = {
  duration: 1600,
  suffix: '',
  decimals: 0,
  prefix: '',
};

const METRICS = [
  {
    target: 3,
    suffix: '+',
    label: 'Years at Techticks',
    sub: 'AI Automation & Backend Engineering',
  },
  {
    target: 30,
    suffix: '+',
    label: 'Automations Shipped',
    sub: 'n8n · Make.com · Zapier',
  },
  {
    target: 100,
    suffix: '%',
    label: 'Upwork Job Success',
    sub: '5.0★ across all engagements',
  },
  {
    target: 12,
    suffix: '+',
    label: 'AWS Services Used',
    sub: 'SageMaker · Comprehend · Textract · Lambda',
  },
];

const Metrics = () => (
  <StyledMetricsSection id="metrics" aria-label="Portfolio metrics">
    <h2 className="numbered-heading">By the Numbers</h2>
    <div className="metrics-grid">
      {METRICS.map((m, i) => (
        <StyledCard key={i}>
          <Counter target={m.target} suffix={m.suffix} />
          <div className="metric-label">{m.label}</div>
          <div className="metric-sub">{m.sub}</div>
        </StyledCard>
      ))}
    </div>
  </StyledMetricsSection>
);

export default Metrics;
