import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const StyledTestimonialsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 0;

  .viewport {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      130deg,
      rgba(100, 255, 218, 0.35),
      rgba(124, 92, 255, 0.25),
      rgba(255, 78, 205, 0.25)
    );
    background-size: 200% 200%;
    animation: ${shimmer} 10s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  .track-wrap {
    position: relative;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(17, 26, 51, 0.85) 0%, rgba(10, 15, 31, 0.95) 100%);
    backdrop-filter: blur(16px);
    overflow: hidden;
  }

  .track {
    display: flex;
    transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  .slide {
    min-width: 100%;
    padding: 56px 64px 48px;

    @media (max-width: 768px) {
      padding: 42px 30px 36px;
    }
  }

  .quote-mark {
    font-family: Georgia, serif;
    font-size: 88px;
    line-height: 1;
    margin-bottom: -18px;
    background: var(--grad-primary);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .stars {
    display: inline-flex;
    gap: 3px;
    margin-bottom: 16px;
    color: #ffc857;
    font-size: var(--fz-md);
    letter-spacing: 2px;
  }

  .quote {
    color: var(--lightest-slate);
    font-size: clamp(var(--fz-lg), 2.1vw, 22px);
    line-height: 1.55;
    margin: 0 0 24px;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-items: center;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .badge {
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(100, 255, 218, 0.1);
    border: 1px solid rgba(100, 255, 218, 0.3);
    color: var(--green);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    gap: 16px;
  }

  .dots {
    display: flex;
    gap: 10px;
    flex: 1;
    justify-content: center;
  }

  .dot {
    width: 30px;
    height: 4px;
    border-radius: 999px;
    background: rgba(168, 178, 209, 0.2);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 260ms ease, transform 260ms ease;

    &.active {
      background: var(--grad-primary);
      transform: scaleX(1.15);
    }
    &:hover {
      background: rgba(100, 255, 218, 0.5);
    }
  }

  .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--lightest-navy);
    background: rgba(17, 26, 51, 0.6);
    color: var(--light-slate);
    cursor: pointer;
    transition: border-color 240ms ease, color 240ms ease, transform 240ms ease;

    &:hover {
      border-color: var(--green);
      color: var(--green);
      transform: scale(1.06);
    }

    &:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: 3px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const TESTIMONIALS = [
  {
    quote:
      'Hamza is an excellent full-stack developer with deep expertise in backend systems and automation. He helped us build complex workflows using n8n, integrate multiple APIs, and design logic that actually works in production.',
    client: 'Full Stack Developer engagement',
    date: 'Dec 2025 – Jan 2026',
    amount: '$1,545',
    stars: 5,
  },
  {
    quote: 'BEST SERVICE HIGHLY RECOMMENDED.',
    client: 'n8n workflow for Revolut Business & Notion Reservations',
    date: 'Nov 2025 – Mar 2026',
    amount: '$500',
    stars: 5,
  },
  {
    quote:
      'Hamza was great. Knowledgable and worked hard to get it right. He helped us scrap hundreds of emails and import into HubSpot. Highly recommended.',
    client: 'HubSpot email scraper & importer',
    date: 'Mar 2026',
    amount: '$375',
    stars: 5,
  },
  {
    quote:
      'Great experience. Very responsive and consistently quick turnaround. Hamza is very reliable and easy to work with.',
    client: 'n8n workflow debugging and improvements',
    date: 'Feb 2026',
    amount: '$100',
    stars: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);
  const timerRef = useRef(null);

  const total = TESTIMONIALS.length;
  const go = next => setIndex(((next % total) + total) % total);

  useEffect(() => {
    const tick = () => {
      if (!hoverRef.current) {
        setIndex(i => (i + 1) % total);
      }
      timerRef.current = setTimeout(tick, 6500);
    };
    timerRef.current = setTimeout(tick, 6500);
    return () => clearTimeout(timerRef.current);
  }, [total]);

  return (
    <StyledTestimonialsSection
      id="testimonials"
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
      }}>
      <h2 className="numbered-heading">What Clients Say</h2>

      <div className="viewport">
        <div className="track-wrap">
          <div
            className="track"
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
            aria-live="polite">
            {TESTIMONIALS.map((t, i) => (
              <div
                className="slide"
                key={i}
                role="group"
                aria-label={`Review ${i + 1} of ${total}`}>
                <div className="quote-mark" aria-hidden="true">
                  “
                </div>
                <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
                  {'★'.repeat(t.stars)}
                </div>
                <p className="quote">{t.quote}</p>
                <div className="meta">
                  <span className="badge">Upwork · 5.0★</span>
                  <span>{t.client}</span>
                  <span>· {t.date}</span>
                  <span>· {t.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="nav">
        <button className="arrow" aria-label="Previous testimonial" onClick={() => go(index - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="dots" role="tablist">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
        <button className="arrow" aria-label="Next testimonial" onClick={() => go(index + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </StyledTestimonialsSection>
  );
};

export default Testimonials;
