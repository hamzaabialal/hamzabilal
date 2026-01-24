import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  .greeting {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h1 {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  h2 {
    margin-top: 5px;
    font-size: clamp(40px, 8vw, 80px);
    color: var(--slate);
    line-height: 0.9;
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
    <span className="greeting">Hi, my name is</span>
    <h1>Hamza Bilal.</h1>
    <h2>Backend Developer & AI Engineer specializing in Scalable Systems.</h2>
    <p>
        I'm a <strong>Backend Developer</strong> and <strong>AI Engineer</strong> specializing in{' '}
      <strong>Django</strong>, <strong>FastAPI</strong>, Flask, and pytest. I also build{' '}
      <strong>custom AI agents</strong> and production ML services, deploying models on{' '}
      <strong>AWS</strong> (SageMaker and Comprehend) and integrating them into APIs. Currently,
        I'm focused on building scalable backend and AI-driven APIs at{' '}
      <a
        href="https://www.linkedin.com/in/hamza-bilal-600968245/"
        target="_blank"
        rel="noreferrer">
          Distack Solutions
      </a>
        . <Link to="/#about">Read my background and skills</Link> or{' '}
      <Link to="/#projects">explore my portfolio projects</Link>.
    </p>
    <a
      className="email-link"
      href="mailto:hamzaabialal@gmail.com"
      target="_blank"
      rel="noreferrer">
        Get In Touch
    </a>
  </StyledHeroSection>
);

export default Hero;
