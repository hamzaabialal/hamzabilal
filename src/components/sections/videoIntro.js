import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const VIDEO_ID = 'aDyulPIL-88';
const VIDEO_TITLE = 'Hamza Bilal — Video Introduction · AI Automation Engineer';
// YouTube auto-generates these thumbnail URLs. maxres falls back to hqdefault if missing.
const THUMB_HQ = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const THUMB_FALLBACK = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

const borderGlow = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulseRing = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.55), 0 12px 40px -8px rgba(124, 92, 255, 0.55); }
  70%  { box-shadow: 0 0 0 22px rgba(100, 255, 218, 0), 0 12px 40px -8px rgba(124, 92, 255, 0.55); }
  100% { box-shadow: 0 0 0 0 rgba(100, 255, 218, 0), 0 12px 40px -8px rgba(124, 92, 255, 0.55); }
`;

const StyledVideoSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 0;

  .video-wrap {
    position: relative;
    border-radius: 22px;
    padding: 2px;
    background: linear-gradient(
      130deg,
      rgba(100, 255, 218, 0.55),
      rgba(0, 229, 255, 0.4) 35%,
      rgba(124, 92, 255, 0.45) 65%,
      rgba(255, 78, 205, 0.4)
    );
    background-size: 220% 220%;
    animation: ${borderGlow} 9s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  .video-inner {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: #05070f;
    cursor: pointer;
    isolation: isolate;
  }

  .thumb {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 600ms cubic-bezier(0.22, 1, 0.36, 1);
    filter: brightness(0.78) saturate(1.1);
  }

  .video-inner:hover .thumb {
    transform: scale(1.04);
    filter: brightness(0.9) saturate(1.2);
  }

  /* Top-left "watch me" pill */
  .badge {
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(10, 15, 31, 0.65);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(100, 255, 218, 0.3);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    .live-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.7);
      animation: liveBlink 2s ease-out infinite;
    }
  }

  @keyframes liveBlink {
    0% {
      box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.7);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(100, 255, 218, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
    }
  }

  /* Bottom caption strip */
  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    padding: 22px 28px 22px;
    background: linear-gradient(
      0deg,
      rgba(5, 7, 15, 0.92) 0%,
      rgba(5, 7, 15, 0.6) 70%,
      transparent 100%
    );
    color: var(--lightest-slate);

    h3 {
      margin: 0 0 4px;
      font-size: clamp(18px, 2.2vw, 24px);
      font-weight: 600;
      color: white;
    }
    p {
      margin: 0;
      color: var(--light-slate);
      font-size: var(--fz-sm);
    }

    @media (max-width: 600px) {
      padding: 16px 18px;
    }
  }

  /* Center play button */
  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #64ffda 0%, #00e5ff 50%, #7c5cff 100%);
    background-size: 200% 200%;
    color: var(--navy);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
    animation: ${pulseRing} 2.6s ease-out infinite;

    &::before {
      content: '';
      position: absolute;
      inset: -10px;
      border-radius: 50%;
      border: 1px solid rgba(100, 255, 218, 0.25);
      pointer-events: none;
    }

    svg {
      width: 36px;
      height: 36px;
      margin-left: 4px;
      fill: var(--navy);
      filter: drop-shadow(0 2px 6px rgba(2, 6, 23, 0.4));
    }

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  .video-inner:hover .play-btn {
    transform: translate(-50%, -50%) scale(1.08);
  }

  .video-inner:focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 4px;
  }

  /* Iframe state */
  .video-inner.playing iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .video-inner.playing .thumb,
  .video-inner.playing .play-btn,
  .video-inner.playing .badge,
  .video-inner.playing .caption {
    display: none;
  }
`;

const VideoIntro = () => {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(THUMB_HQ);

  const handlePlay = () => setPlaying(true);

  const handleKey = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlay();
    }
  };

  return (
    <StyledVideoSection id="video-intro" aria-label="Video introduction">
      <h2 className="numbered-heading">Watch My 60-Second Intro</h2>

      <div className="video-wrap">
        <div
          className={`video-inner ${playing ? 'playing' : ''}`}
          role="button"
          tabIndex={0}
          aria-label={`Play video: ${VIDEO_TITLE}`}
          onClick={!playing ? handlePlay : undefined}
          onKeyDown={!playing ? handleKey : undefined}>
          {!playing && (
            <>
              <img
                className="thumb"
                src={thumbSrc}
                alt="Hamza Bilal video introduction thumbnail"
                loading="lazy"
                onError={() => {
                  if (thumbSrc !== THUMB_FALLBACK) {setThumbSrc(THUMB_FALLBACK);}
                }}
              />
              <span className="badge">
                <span className="live-dot" aria-hidden="true" />
                Watch the intro · 60s
              </span>
              <button className="play-btn" type="button" aria-label="Play introduction video">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </button>
              <div className="caption">
                <h3>Meet Hamza — AI Automation &amp; Backend Engineer</h3>
                <p>
                  How I help startups in the USA, UK, Germany, and Australia ship production AI
                  workflows.
                </p>
              </div>
            </>
          )}

          {playing && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={VIDEO_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
    </StyledVideoSection>
  );
};

export default VideoIntro;
