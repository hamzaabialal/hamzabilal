import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    // Backend Technologies
    'Python', 'Django', 'Django REST Framework', 'FastAPI', 'Flask', 
    'REST APIs', 'Celery', 'Redis', 'Pytest', 'SQL',
    
    // AI/ML Technologies
    'Machine Learning', 'Hugging Face', 'OpenAI', 'Whisper', 'AWS SageMaker', 
    'AWS Comprehend', 'Text Analysis', 'Video Analysis', 'Image Analysis',
    
    // Development Tools & Cloud
    'JavaScript', 'Git', 'Docker', 'AI Agents', 'Agno', 'Apify', 
    'Social Media Scraping'
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Hamza Bilal and I'm a passionate Full-Stack Developer and AI/ML Engineer specializing in 
              backend development, machine learning, and AI-powered applications. My journey in programming began during 
              my studies in Data Science, where I discovered the incredible potential of Python for building robust, 
              scalable applications and intelligent systems.
            </p>

            <p>
              I specialize in backend development with extensive expertise in Django, Django REST Framework, FastAPI, 
              and Flask. My experience spans across building RESTful APIs, implementing OAuth flows, and creating 
              modular architecture patterns. I'm proficient in SQL databases, Git version control, and comprehensive 
              testing with pytest, ensuring high-quality, maintainable code.
            </p>

            <p>
              My passion lies in the intersection of AI and web development. I have extensive experience working with 
              Hugging Face models for text analysis, video analysis, and image analysis projects. I've built AI agents 
              for transcript generation using Agno and OpenAI, and implemented Whisper models for video transcription 
              and analysis. My work includes deploying custom ML models on AWS SageMaker and utilizing AWS Comprehend 
              for advanced text analysis.
            </p>

            <p>
              I've also worked on data scraping projects, extracting valuable insights from social media platforms using 
              Apify and other advanced techniques. These projects involved comprehensive text and video analysis, 
              leveraging ML models to derive meaningful patterns and trends from large datasets.
            </p>

            <p>
              Currently, I'm working as a Backend Developer at Distack Solutions, where I develop and maintain scalable 
              backend services using Python, Django, and Django Rest Framework. I'm passionate about driving innovation 
              through AI integration and continuously improving development processes with cutting-edge technologies.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/1703362284626.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
