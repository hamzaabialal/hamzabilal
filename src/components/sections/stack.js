import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollX = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
`;

const StyledStackSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0 20px;
  position: relative;

  h2.numbered-heading {
    margin-bottom: 30px;
  }

  .marquee {
    position: relative;
    overflow: hidden;
    padding: 10px 0;
    mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  }

  .marquee-track {
    display: flex;
    gap: 40px;
    width: max-content;
    animation: ${scrollX} 40s linear infinite;
    will-change: transform;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  .marquee:hover .marquee-track {
    animation-play-state: paused;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    border: 1px solid var(--lightest-navy);
    border-radius: 999px;
    background: rgba(100, 255, 218, 0.03);
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    white-space: nowrap;
    transition: transform 240ms ease, border-color 240ms ease, color 240ms ease,
      background 240ms ease, box-shadow 240ms ease;

    .glyph {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      background: var(--green);
      opacity: 0.75;
    }

    &:hover {
      transform: translateY(-2px);
      border-color: var(--green);
      color: var(--lightest-slate);
      background: rgba(100, 255, 218, 0.08);
      box-shadow: 0 8px 24px -10px rgba(100, 255, 218, 0.4);
    }
  }
`;

const STACK = [
  'Python',
  'Django',
  'Django REST Framework',
  'FastAPI',
  'Flask',
  'Celery',
  'Redis',
  'PostgreSQL',
  'n8n',
  'Make.com',
  'Zapier',
  'OpenAI',
  'LangChain',
  'Agno',
  'Whisper',
  'AWS SageMaker',
  'AWS Comprehend',
  'AWS Textract',
  'AWS Lambda',
  'AWS S3',
  'Docker',
  'Next.js',
  'TypeScript',
  'Notion API',
  'HubSpot',
  'Close CRM',
  'Salesforce',
  'GoHighLevel',
  'Unipile',
  'Dripify',
  'Apify',
];

const Stack = () => {
  // duplicate for seamless loop
  const items = [...STACK, ...STACK];
  return (
    <StyledStackSection id="stack" aria-label="Tools and platforms I work with">
      <h2 className="numbered-heading">My Stack</h2>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((tool, i) => (
            <span className="chip" key={`${tool}-${i}`}>
              <span className="glyph" aria-hidden="true" />
              {tool}
            </span>
          ))}
        </div>
      </div>
    </StyledStackSection>
  );
};

export default Stack;
