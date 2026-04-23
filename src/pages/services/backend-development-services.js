import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ServiceLayout from '../../components/serviceLayout';

const TITLE = 'Backend Development Services — API Development & Custom Backend | Hamza Bilal';
const DESC =
  'Backend development services and API development services from a senior Python engineer. Custom backend development with Django, FastAPI, Flask, PostgreSQL, Celery, Redis, and AWS. Serving startups in USA, UK, Germany, and Australia.';

const FAQ = [
  {
    q: 'What do backend development services include?',
    a: 'Backend development services cover the architecture, REST APIs, database design, authentication, integrations, async tasks, deployment, and monitoring of your server-side stack. I build production backends in Django + DRF and FastAPI, deployed on AWS with Docker and CI/CD.',
  },
  {
    q: 'What are API development services?',
    a: 'API development services are end-to-end design and build of REST (or GraphQL) APIs your frontend, mobile app, or third parties consume. Includes endpoint design, OpenAPI / Swagger docs, auth (JWT / OAuth2), rate limiting, versioning, error handling, and testing.',
  },
  {
    q: 'When do I need custom backend development vs. a SaaS?',
    a: 'Custom backend development is right when you have unique business logic, sensitive data, performance requirements a SaaS cannot meet, or a roadmap that needs full control. If you are gluing together 5+ SaaS tools and paying $1k+ / month, custom backend development almost always pays for itself in 12-18 months.',
  },
  {
    q: 'Which Python framework do you use?',
    a: 'I work with Django + DRF for full-featured products that need admin, ORM, and authentication out of the box; FastAPI for high-performance async APIs and microservices; and Flask for lightweight utilities. I will recommend the right one based on your team and roadmap — not based on what I prefer.',
  },
  {
    q: 'Do you handle deployment and DevOps?',
    a: 'Yes. I containerize with Docker, deploy to AWS (EC2 / ECS, Lambda, S3, API Gateway, RDS), configure CI/CD pipelines, set up CloudWatch + Sentry alerting, and document the operational runbook so your team can take over.',
  },
  {
    q: 'Do you write tests?',
    a: 'Yes. Pytest with fixtures and factories, integration tests against a real test database, and at least smoke tests for every API endpoint. CI runs the suite on every PR.',
  },
];

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Backend Development Services',
  serviceType: [
    'Backend Development Services',
    'API Development Services',
    'Custom Backend Development',
    'Python Backend Development',
    'Django Development',
    'FastAPI Development',
    'REST API Development',
  ],
  provider: {
    '@type': 'Person',
    name: 'Hamza Bilal',
    url: 'https://hamzabilal.dev',
    email: 'mailto:hamzaabialal@gmail.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Place', name: 'Worldwide — Remote' },
  ],
  url: 'https://hamzabilal.dev/services/backend-development-services/',
  description:
    'Backend development services and API development services. Python, Django, FastAPI, Flask, PostgreSQL, Celery, Redis, AWS. For startups and SaaS in USA, UK, Germany, Australia.',
};

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const Page = ({ location }) => (
  <ServiceLayout
    location={location}
    title="Backend Development Services"
    metaTitle={TITLE}
    metaDescription={DESC}
    canonicalPath="/services/backend-development-services/"
    lede="End-to-end backend development services and API development services for SaaS, ecommerce, and AI products. Custom backend development in Python with Django, FastAPI, and Flask — deployed on AWS with monitoring, CI/CD, and full documentation."
    pills={['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Celery + Redis', 'AWS', 'Docker']}
    serviceJsonLd={SERVICE_JSONLD}
    faqJsonLd={FAQ_JSONLD}
    related={[
      { to: '/services/django-development-services/', label: 'Django Development Services' },
      { to: '/services/ai-automation-services/', label: 'AI Automation Services' },
      { to: '/services/ai-agent-development-services/', label: 'AI Agent Development Services' },
      { to: '/services/data-extraction-services/', label: 'Data Extraction Services' },
    ]}>
    <h2>What you get with custom backend development</h2>
    <p>
      A senior Python engineer who has shipped backends for SaaS, AI, and ecommerce clients in the
      USA, UK, Germany, and Australia. I take ownership of architecture, code quality, deployment,
      and the runbook your future team will live in.
    </p>

    <h2>Capabilities</h2>
    <div className="grid-2">
      <div className="card">
        <h3>REST API development</h3>
        <p>
          Clean endpoint design, JWT / OAuth2 auth, rate limiting, OpenAPI docs, versioning, and
          end-to-end tests.
        </p>
      </div>
      <div className="card">
        <h3>SaaS backends</h3>
        <p>
          Multi-tenancy, subscription billing (Stripe), team management, audit logs, scalable from
          day one.
        </p>
      </div>
      <div className="card">
        <h3>Third-party integrations</h3>
        <p>
          OAuth2 flows, webhook handling with retries and idempotency, dependable sync with HubSpot
          / Close / Salesforce / Stripe / Zoom.
        </p>
      </div>
      <div className="card">
        <h3>Async & background jobs</h3>
        <p>
          Celery + Redis for report generation, file conversion, long-running AI inference, and bulk
          data ops.
        </p>
      </div>
      <div className="card">
        <h3>Database design</h3>
        <p>
          PostgreSQL schemas built for scale, indexes, query plans, migrations, and read-replica
          setup when you need it.
        </p>
      </div>
      <div className="card">
        <h3>AWS deployment</h3>
        <p>
          Docker → ECR → ECS / Lambda, API Gateway, S3, CloudWatch, IAM-scoped credentials, and
          CI/CD on GitHub Actions.
        </p>
      </div>
    </div>

    <h2>The framework choice</h2>
    <p>
      <strong>Django + DRF</strong> for products that need an admin, ORM, and
      &quot;batteries-included&quot; auth out of the box. The fastest way to a production REST API
      for most B2B SaaS.
    </p>
    <p>
      <strong>FastAPI</strong> for high-performance async APIs, model-serving endpoints,
      microservices, and anywhere you want native OpenAPI generation and Pydantic validation.
    </p>
    <p>
      <strong>Flask</strong> for lightweight utilities, internal tools, and simple webhook
      receivers.
    </p>
    <p>
      For Django specifically, see my{' '}
      <Link className="inline" to="/services/django-development-services/">
        Django Development Services
      </Link>{' '}
      page.
    </p>

    <h2>How an engagement runs</h2>
    <ul>
      <li>
        <strong>Day 0:</strong> 30-min call to scope. Written quote and timeline within 4 hours.
      </li>
      <li>
        <strong>Week 1:</strong> Repo setup, CI, base architecture, first auth + 2-3 endpoints in
        your staging env.
      </li>
      <li>
        <strong>Weeks 2-N:</strong> Iterative builds with weekly demos and async standups.
      </li>
      <li>
        <strong>Final week:</strong> Production deploy, runbook, knowledge-transfer Loom, 30-day
        bug-fix window.
      </li>
    </ul>

    <h2>Pricing</h2>
    <ul>
      <li>
        <strong>API integration / single endpoint set</strong>: $400 – $1,500 fixed-price.
      </li>
      <li>
        <strong>SaaS backend MVP</strong>: $4,000 – $12,000 (3-6 weeks).
      </li>
      <li>
        <strong>Replatform / refactor</strong>: $5,000 – $20,000 depending on scope.
      </li>
      <li>
        <strong>Hourly</strong>: $60 – $120 / hr depending on engagement length.
      </li>
      <li>
        <strong>Monthly retainer</strong>: $1,500 – $4,500 / month.
      </li>
    </ul>

    <h2>Frequently asked questions</h2>
    {FAQ.map(({ q, a }) => (
      <div className="faq-item" key={q}>
        <h3>{q}</h3>
        <p>{a}</p>
      </div>
    ))}
  </ServiceLayout>
);

Page.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Page;
