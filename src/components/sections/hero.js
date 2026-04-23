import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Magnetic from '../magnetic';

const floatOrb = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(60px, -40px) scale(1.08); }
  66%  { transform: translate(-40px, 30px) scale(0.94); }
  100% { transform: translate(0, 0) scale(1); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: calc(var(--nav-height) + 40px);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: calc(var(--nav-height) + 24px);
  }

  /* Subtle grid pattern */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(100, 255, 218, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100, 255, 218, 0.04) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: radial-gradient(circle at 30% 40%, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(circle at 30% 40%, black 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* Floating color orbs */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
    pointer-events: none;
    z-index: 0;
    will-change: transform;
  }
  .orb-1 {
    width: 560px;
    height: 560px;
    top: -140px;
    right: -120px;
    background: radial-gradient(circle, #64ffda 0%, transparent 70%);
    opacity: 0.42;
    animation: ${floatOrb} 14s ease-in-out infinite;
  }
  .orb-2 {
    width: 440px;
    height: 440px;
    bottom: -120px;
    left: -80px;
    background: radial-gradient(circle, #7c5cff 0%, transparent 70%);
    opacity: 0.4;
    animation: ${floatOrb} 18s ease-in-out infinite reverse;
  }
  .orb-3 {
    width: 340px;
    height: 340px;
    top: 38%;
    left: 42%;
    background: radial-gradient(circle, #ff4ecd 0%, transparent 70%);
    opacity: 0.22;
    animation: ${floatOrb} 22s ease-in-out infinite;
  }

  /* Stacking context above background */
  .greeting,
  h1,
  h2,
  p,
  .email-link,
  .hero-pill {
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: ${fadeInUp} 720ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
      opacity: 1;
    }
  }
  .hero-pill {
    animation-delay: 80ms;
  }
  h1 {
    animation-delay: 180ms;
  }
  h2 {
    animation-delay: 300ms;
  }
  p {
    animation-delay: 420ms;
  }
  .email-link {
    animation-delay: 560ms;
  }

  /* Availability pill */
  .hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 6px 14px;
    margin-bottom: 18px;
    border: 1px solid rgba(100, 255, 218, 0.35);
    border-radius: 999px;
    background: rgba(100, 255, 218, 0.06);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    backdrop-filter: blur(6px);

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.7);
      animation: pulse 2.2s ease-out infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(100, 255, 218, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
      }
    }
  }

  h1 {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    line-height: 1.1;
    background: linear-gradient(110deg, #ccd6f6 0%, #64ffda 45%, #7c5cff 70%, #ccd6f6 100%);
    background-size: 220% 220%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: ${fadeInUp} 720ms cubic-bezier(0.22, 1, 0.36, 1) forwards,
      ${gradientShift} 9s ease-in-out infinite 720ms;
  }

  h2 {
    margin-top: 10px;
    font-size: clamp(30px, 5.5vw, 60px);
    color: var(--slate);
    line-height: 1.1;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => (
  <StyledHeroSection>
    <span className="orb orb-1" aria-hidden="true" />
    <span className="orb orb-2" aria-hidden="true" />
    <span className="orb orb-3" aria-hidden="true" />

    <span className="hero-pill">
      <span className="dot" />
      Available for new projects
    </span>

    <h1>Hamza Bilal.</h1>
    <h2>AI Automation Engineer &amp; n8n / Make.com / Zapier Developer.</h2>
    <p>
      I'm an <strong>AI Automation Engineer</strong> and <strong>AI Agent Developer</strong> with{' '}
      <strong>3+ years on-site at Techticks</strong>, serving clients in the{' '}
      <strong>USA, UK, Germany, and Australia</strong>. I design{' '}
      <strong>n8n, Make.com, and Zapier</strong> workflows, build <strong>custom AI agents</strong>{' '}
      with OpenAI and LangChain, and ship <strong>CRM automation</strong>,{' '}
      <strong>LinkedIn outreach</strong>, <strong>ecommerce automation</strong>, and{' '}
      <strong>lead-generation</strong> systems — backed by Python / Django / FastAPI and deployed on{' '}
      <strong>AWS</strong> (<strong>SageMaker</strong>, <strong>Comprehend</strong>,{' '}
      <strong>Textract</strong>). <Link to="/#about">See my background and services</Link> or{' '}
      <Link to="/#projects">explore my automation portfolio</Link>.
    </p>
    <Magnetic strength={0.3} range={160}>
      <a
        className="email-link"
        href="mailto:hamzaabialal@gmail.com"
        target="_blank"
        rel="noreferrer">
        Get In Touch
      </a>
    </Magnetic>
  </StyledHeroSection>
);

export default Hero;
