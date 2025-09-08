import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFaqSection = styled.section`
  max-width: 900px;
  margin: 0 auto;

  .faq-item {
    border-bottom: 1px solid var(--lightest-navy);
  }

  .faq-question {
    width: 100%;
    text-align: left;
    background: transparent;
    color: var(--lightest-slate);
    border: 0;
    padding: 16px 0;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .faq-answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
  }

  .faq-answer.open {
    max-height: 500px;
  }
`;

const Faq = () => {
  const faqs = [
    {
      q: 'Can you build AI agents?',
      a: 'Yes, I build AI agents using Agno and OpenAI, integrating them with backend services and data workflows.',
    },
    {
      q: 'Which Python backend frameworks do you use?',
      a: 'Django, Django REST Framework, FastAPI, and Flask—selected based on project needs for admin/ORM, robust REST, high-performance async, or lightweight utilities.',
    },
    {
      q: 'Do you deploy ML models on AWS?',
      a: 'Yes, I containerize and deploy real-time models on AWS SageMaker, use AWS Comprehend for text analysis, and Whisper for transcription when needed.',
    },
    {
      q: 'Do you analyze social media content?',
      a: 'Yes, I ingest data from TikTok, Instagram, Facebook, and YouTube via Apify and perform text, image, and video analysis.',
    },
    {
      q: 'What testing and reliability practices do you follow?',
      a: 'Automated tests with pytest, background jobs with Celery/Redis, observability, and clean architecture for maintainability.',
    },
    {
      q: 'Do you work with international clients remotely?',
      a: 'Yes, I collaborate remotely with international clients across time zones using clear communication, async updates, and robust delivery processes.',
    },
    {
      q: 'Can you integrate third-party APIs (Zoom, Salesforce, etc.)?',
      a: 'Yes, I have hands-on experience integrating Zoom, Salesforce, and other third-party APIs, including OAuth flows, webhooks, and data synchronization.',
    },
    {
      q: 'Do you provide scalable backend solutions for startups?',
      a: 'Yes, I design scalable, modular backends with Django/DRF and FastAPI, containerized with Docker, tested with pytest, and ready for CI/CD and cloud deployment.',
    },
    {
      q: 'Where are you located and do you work remotely?',
      a: 'I’m based in Pakistan and work remotely with international clients worldwide.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <StyledFaqSection id="faq">
      <h2 className="numbered-heading">FAQ</h2>
      <div>
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}>
              <span>{item.q}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <div style={{ paddingBottom: 16 }}>{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </StyledFaqSection>
  );
};

export default Faq;
