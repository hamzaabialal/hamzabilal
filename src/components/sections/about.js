import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
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
    'Python',
    'Django',
    'Django REST Framework',
    'FastAPI',
    'Flask',
    'REST APIs',
    'Celery',
    'Redis',
    'Pytest',
    'SQL',

    // AI/ML Technologies
    'Machine Learning',
    'Hugging Face',
    'OpenAI',
    'LangChain',
    'Whisper',
    'AWS SageMaker',
    'AWS Comprehend',
    'AWS Textract',
    'Text Analysis',
    'Video Analysis',
    'Image Analysis',

    // AI Automation
    'N8n',
    'Make.com',
    'Zapier',
    'GoHighLevel',
    'HubSpot',
    'Close CRM',
    'Salesforce',
    'Notion API',
    'Unipile',
    'Dripify',

    // Cloud & Deployment
    'AWS EC2',
    'AWS Lambda',
    'AWS S3',
    'AWS API Gateway',
    'Docker',
    'CI/CD',

    // Full Stack & Development Tools
    'JavaScript',
    'TypeScript',
    'Next.js',
    'React',
    'HTML/CSS',
    'Git',
    'AI Agents',
    'Agno',
    'Apify',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is <strong>Hamza Bilal</strong> and I'm a passionate{' '}
              <strong>Backend Developer</strong> and <strong>AI Engineer</strong> specializing in
              backend development, machine learning, and AI-powered applications. My journey in
              programming began during my studies in Data Science, where I discovered the incredible
              potential of <strong>Python</strong> for building robust, scalable applications and
              intelligent systems. <Link to="/pensieve">Read my technical blog posts</Link> for
              insights.
            </p>

            <p>
              I specialize in <strong>backend development</strong> with extensive expertise in{' '}
              <strong>Django</strong>, <strong>Django REST Framework</strong>,{' '}
              <strong>FastAPI</strong>, and <strong>Flask</strong>. My experience spans across
              building RESTful APIs, implementing OAuth flows, and creating modular architecture
              patterns. I'm proficient in SQL databases, Git version control, and comprehensive
              testing with pytest, ensuring high-quality, maintainable code. Check out my{' '}
              <Link to="/#projects">featured projects</Link> to see my work.
            </p>

            <p>
              My passion lies in the intersection of <strong>AI</strong> and web development. I have
              extensive experience working with Hugging Face models for text analysis, video
              analysis, and image analysis projects. I've built <strong>AI agents</strong> for
              transcript generation using Agno and OpenAI, and implemented Whisper models for video
              transcription and analysis. My work includes deploying custom{' '}
              <strong>ML models on AWS SageMaker</strong> and utilizing AWS Comprehend for advanced
              text analysis.
            </p>

            <p>
              I've also worked on data scraping projects, extracting valuable insights from social
              media platforms using Apify and other advanced techniques. These projects involved
              comprehensive text and video analysis, leveraging ML models to derive meaningful
              patterns and trends from large datasets. View my{' '}
              <Link to="/archive">complete project archive</Link>.
            </p>

            <h3>Social Media Assessment (End-to-End AI/ML System)</h3>
            <p>
              I engineered an end-to-end social media assessment pipeline that ingests creator
              content from TikTok, Instagram, Facebook, and YouTube using <b>Apify</b> crawlers. The
              pipeline standardizes posts, captions, thumbnails, and videos, then routes them to
              specialized analyzers:
            </p>
            <ul className="skills-list">
              <li>
                TextAnalyzer: AWS Comprehend for sentiment, key phrases, entities, and language.
              </li>
              <li>
                ImageAnalyzer: Custom CNN models deployed on AWS SageMaker, consumed via HTTPS
                endpoints.
              </li>
              <li>
                VideoAnalyzer: Video → frames every 3 seconds → batch image analysis → aggregate
                insights.
              </li>
              <li>Transcription: OpenAI Whisper for accurate multilingual speech-to-text.</li>
              <li>
                Agents: Task-specific AI agents orchestrated with Agno + OpenAI for enrichment and
                reporting.
              </li>
            </ul>

            <h3>Python Web Frameworks in My Workflow</h3>
            <p>
              I build robust backends with <b>Django</b> for admin, ORM, and authentication; expose
              clean REST APIs with
              <b>Django REST Framework</b> for browsable APIs and permissions; use <b>FastAPI</b>{' '}
              for high-performance, async microservices (model-serving, webhooks); and leverage{' '}
              <b>Flask</b> for lightweight utilities and internal tools. Services communicate over
              REST/JSON, with background jobs running via Celery/Redis.
            </p>

            <h3>ML Stack and Operations</h3>
            <p>
              Models and libraries I use include: Transformers and pipelines from Hugging Face,
              OpenAI APIs, custom TensorFlow/Keras and PyTorch CNNs for image understanding, and
              Whisper for ASR. I containerize models, deploy to <b>AWS SageMaker</b> (real-time
              endpoints), and operationalize data flows with S3, CloudWatch, and IAM. Text
              understanding uses <b>AWS Comprehend</b> for scalable NER, sentiment, and topic
              signals.
            </p>

            <h3>AI Automation & No-Code Ops</h3>
            <p>
              For the last <b>3+ years on-site at Techticks</b>, I've held two concurrent roles:{' '}
              <b>AI Automation &amp; Backend Engineer</b> (Apr 2023 – Present) and{' '}
              <b>Trainer, AI Automation &amp; Backend Engineering</b> (Jan 2024 – Present). As an
              engineer I ship production workflows in <b>n8n</b>, <b>Make.com</b>, and <b>Zapier</b>{' '}
              that replace manual operations with self-healing pipelines, connecting CRMs (
              <b>Close CRM</b>, <b>HubSpot</b>, <b>Salesforce</b>, <b>GoHighLevel</b>), marketing
              tools, databases, and LLMs (OpenAI, LangChain, Agno) into a single coherent system. As
              Trainer I own the in-house curriculum — mentoring junior engineers on Python backends,
              workflow design, LLM and agent orchestration, and AWS deployment.
            </p>
            <ul className="skills-list">
              <li>End-to-end AI workflows with OpenAI + LangChain decision-making</li>
              <li>CRM + marketing automation (Close, HubSpot, Salesforce, GoHighLevel)</li>
              <li>Complex PDF data extraction with 100% accuracy (OCR + LLM + schemas)</li>
              <li>Custom API and webhook integrations across the stack</li>
              <li>Outreach at scale with Unipile and Dripify, AI-personalized</li>
              <li>Notion-as-backend patterns for client-facing portals (e.g. Hostyo)</li>
            </ul>

            <h3>AWS Deployment & MLOps</h3>
            <p>
              I own deployment end-to-end on <b>AWS</b>: backend services run on EC2/ECS behind API
              Gateway, background jobs on Lambda and SQS, artifacts and data in S3, and
              observability through CloudWatch and structured logs. I containerize ML models with
              Docker, push to ECR, and deploy to <b>AWS SageMaker</b> real-time endpoints for image
              and text inference. For text understanding at scale I lean on <b>AWS Comprehend</b>{' '}
              (sentiment, entities, key phrases, topics) and <b>AWS Textract</b> for OCR, glued
              together by Django/FastAPI services and n8n orchestration.
            </p>

            <p>
              Currently, I hold two concurrent roles on-site at Techticks —{' '}
              <b>AI Automation &amp; Backend Engineer</b> and{' '}
              <b>Trainer, AI Automation &amp; Backend Engineering</b> — building scalable backends
              and AI-driven APIs that power real-world products, and training the next generation of
              engineers on the same stack. I'm passionate about driving innovation through AI
              integration and continuously improving development processes.
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
              src="../../images/1703362284626.webp"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Hamza Bilal - Senior AI Engineer and Python Developer based in Pakistan, expert in LLM orchestration."
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
