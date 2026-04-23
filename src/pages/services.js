import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledHub = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 140px 50px 80px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 120px 25px 60px;
  }

  h1 {
    font-size: clamp(36px, 6vw, 64px);
    line-height: 1.1;
    margin: 0 0 14px;
    background: var(--grad-primary);
    background-size: 220% 220%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .lede {
    color: var(--light-slate);
    font-size: clamp(var(--fz-lg), 1.6vw, var(--fz-xl));
    line-height: 1.55;
    max-width: 780px;
    margin: 0 0 56px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    display: block;
    padding: 28px 26px;
    border-radius: 14px;
    text-decoration: none;
    background: linear-gradient(180deg, rgba(28, 40, 71, 0.55) 0%, rgba(10, 15, 31, 0.75) 100%);
    border: 1px solid rgba(100, 255, 218, 0.15);
    transition: transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease;

    &:hover {
      transform: translateY(-6px);
      border-color: rgba(100, 255, 218, 0.5);
      box-shadow: 0 24px 60px -20px rgba(124, 92, 255, 0.3);
    }

    h2 {
      margin: 0 0 8px;
      font-size: var(--fz-xxl);
      color: var(--lightest-slate);
      font-family: var(--font-mono);
    }
    p {
      margin: 0 0 14px;
      color: var(--light-slate);
      font-size: var(--fz-md);
      line-height: 1.55;
    }
    .arrow {
      display: inline-block;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }
  }
`;

const SERVICES = [
  {
    to: '/services/ai-automation-services/',
    title: 'AI Automation Services',
    desc: 'End-to-end AI workflow automation with n8n, Make.com, and Zapier — replace manual ops with self-healing pipelines.',
  },
  {
    to: '/services/ai-agent-development-services/',
    title: 'AI Agent Development Services',
    desc: 'Custom AI agents with OpenAI, LangChain, and Agno — tool use, memory, multi-step reasoning, evals, production deployment.',
  },
  {
    to: '/services/backend-development-services/',
    title: 'Backend Development Services',
    desc: 'Scalable Python backends, REST API development, and custom backend architecture for SaaS, ecommerce, and AI products.',
  },
  {
    to: '/services/django-development-services/',
    title: 'Django Development Services',
    desc: 'Hire a Django developer for full-stack web development, REST APIs, admin panels, and production-grade Django + DRF systems.',
  },
  {
    to: '/services/data-extraction-services/',
    title: 'Data Extraction Services',
    desc: 'Complex PDF data extraction with 100% accuracy using AWS Textract, OpenAI, and Pydantic schema validation.',
  },
];

const ServicesHub = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Services — AI Automation, AI Agents, Backend & Django Development | Hamza Bilal</title>
      <meta
        name="description"
        content="Hire Hamza Bilal for AI automation services, AI agent development, backend development services, custom Django development, and data extraction services. Serving startups in USA, UK, Germany, and Australia."
      />
      <link rel="canonical" href="https://hamzabilal.dev/services/" />
      <meta
        property="og:title"
        content="Services — AI Automation, AI Agents, Backend & Django Development"
      />
      <meta
        property="og:description"
        content="Hire Hamza Bilal — AI Automation Engineer, AI Agent Developer, Django/Backend developer for startups in USA, UK, Germany, and Australia."
      />
      <meta property="og:url" content="https://hamzabilal.dev/services/" />
      <meta property="og:type" content="website" />
    </Helmet>

    <StyledHub>
      <h1>Services</h1>
      <p className="lede">
        Production-grade <strong>AI automation services</strong>,{' '}
        <strong>AI agent development</strong>, and <strong>backend development services</strong> for
        startups and agencies in the USA, UK, Germany, and Australia. Pick a service to see the full
        scope, deliverables, and how I work.
      </p>

      <div className="grid">
        {SERVICES.map(s => (
          <Link key={s.to} to={s.to} className="card">
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
            <span className="arrow">Learn more →</span>
          </Link>
        ))}
      </div>
    </StyledHub>
  </Layout>
);

ServicesHub.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ServicesHub;
