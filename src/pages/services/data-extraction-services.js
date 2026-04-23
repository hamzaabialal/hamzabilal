import React from 'react';
import PropTypes from 'prop-types';
import ServiceLayout from '../../components/serviceLayout';

const TITLE = 'Data Extraction Services — PDF & Document Data Extraction with AI | Hamza Bilal';
const DESC =
  'Data extraction services with 100% accuracy. Complex PDF data extraction, invoice parsing, contract extraction, and document AI using AWS Textract, OpenAI, LangChain, and Pydantic schemas. For startups in USA, UK, Germany, and Australia.';

const FAQ = [
  {
    q: 'What are data extraction services?',
    a: 'Data extraction services turn unstructured documents — PDFs, scanned images, contracts, invoices, reports — into clean structured data (JSON, CSV, database rows) you can use in workflows, dashboards, and AI pipelines.',
  },
  {
    q: 'How do you reach 100% accuracy on complex PDFs?',
    a: 'A three-layer pipeline: AWS Textract for layout-aware OCR, an LLM (OpenAI / Claude) for normalization and field-level reasoning, and Pydantic schemas with strict validation. Anything that fails validation lands in a human review queue — never silently silently wrong data downstream.',
  },
  {
    q: 'Which document types do you handle?',
    a: 'Invoices, purchase orders, contracts, statements, lab reports, ID documents, multi-column reports, scanned forms, mixed-language documents. If it is a PDF or image with structure, the pipeline can handle it.',
  },
  {
    q: 'Can you process documents at scale?',
    a: 'Yes. Pipelines run async on AWS Lambda or a FastAPI worker pool, with batching, retries, and per-tenant rate limits. I have shipped pipelines handling thousands of documents per day with sub-cent per-page cost.',
  },
  {
    q: 'How do I integrate the data extraction service?',
    a: 'Two common patterns: (1) a REST endpoint your app calls with the file URL, gets a structured JSON response; (2) an n8n / Make.com workflow that watches a Google Drive / S3 folder and writes results to your database. I will recommend the right one based on your stack.',
  },
  {
    q: 'What does it cost?',
    a: 'Pilot pipeline (one document type, ~95-100% accuracy on your sample): $1,500 – $3,500. Production pipeline with API + monitoring + human-review queue: $3,500 – $9,000. Per-document cloud cost is typically $0.005 – $0.05 depending on document length and LLM complexity.',
  },
];

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Extraction Services — PDF & Document AI',
  serviceType: [
    'Data Extraction Services',
    'PDF Data Extraction',
    'Document AI',
    'OCR Services',
    'Invoice Parsing',
    'Contract Data Extraction',
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
  url: 'https://hamzabilal.dev/services/data-extraction-services/',
  description:
    'Complex PDF data extraction services using AWS Textract, OpenAI, LangChain, and Pydantic schemas. 100% accuracy with human-in-the-loop fallback.',
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
    title="Data Extraction Services"
    metaTitle={TITLE}
    metaDescription={DESC}
    canonicalPath="/services/data-extraction-services/"
    lede="Production data extraction services that turn complex PDFs and documents into structured JSON with 100% accuracy. Built on AWS Textract, OpenAI, LangChain, and strict Pydantic schemas with a human-in-the-loop fallback."
    pills={['AWS Textract', 'OpenAI', 'LangChain', 'Pydantic', 'FastAPI', '100% Accuracy']}
    serviceJsonLd={SERVICE_JSONLD}
    faqJsonLd={FAQ_JSONLD}
    related={[
      { to: '/services/ai-automation-services/', label: 'AI Automation Services' },
      { to: '/services/ai-agent-development-services/', label: 'AI Agent Development Services' },
      { to: '/services/backend-development-services/', label: 'Backend Development Services' },
    ]}>
    <h2>Why most data-extraction projects fail (and how I fix it)</h2>
    <p>
      Pure OCR misses fields. Pure LLM hallucinates. The reliable answer is a layered pipeline: OCR
      for spatial truth, LLM for semantic normalization, schemas for guarantees, and a human in the
      loop for the edge cases. That is the architecture I ship — and it is why my clients trust the
      extracted data downstream without a second review.
    </p>

    <h2>The pipeline architecture</h2>
    <div className="grid-2">
      <div className="card">
        <h3>1. Layout-aware OCR</h3>
        <p>
          AWS Textract pulls text, tables, and forms with bounding boxes — preserves spatial
          relationships that matter on invoices and reports.
        </p>
      </div>
      <div className="card">
        <h3>2. LLM normalization</h3>
        <p>
          OpenAI / Claude reads the raw OCR + structured layout and emits a normalized record
          matching your target schema (dates, currencies, addresses, vendor names, line items).
        </p>
      </div>
      <div className="card">
        <h3>3. Schema validation</h3>
        <p>
          Strict Pydantic schemas with custom validators catch type errors, missing fields,
          impossible values, and inconsistencies (e.g. line items not summing to the invoice total).
        </p>
      </div>
      <div className="card">
        <h3>4. Human-in-the-loop fallback</h3>
        <p>
          Anything that fails validation lands in a review queue with the original document, the
          extracted draft, and the failure reason. Reviewer fixes once; the pipeline learns the
          pattern.
        </p>
      </div>
      <div className="card">
        <h3>5. Audit log</h3>
        <p>
          Every extraction logs the OCR text, the prompt, the raw LLM output, and the final
          validated record — for compliance and debugging.
        </p>
      </div>
      <div className="card">
        <h3>6. Delivery</h3>
        <p>
          REST endpoint, n8n / Make.com workflow, or direct write to your Postgres / Snowflake /
          data warehouse — your choice.
        </p>
      </div>
    </div>

    <h2>Document types I handle</h2>
    <ul>
      <li>Invoices and purchase orders</li>
      <li>Contracts (vendor, employment, lease, NDAs)</li>
      <li>Bank and credit-card statements</li>
      <li>Lab and medical reports</li>
      <li>Multi-column reports and research papers</li>
      <li>ID documents and KYC forms</li>
      <li>Real-estate listings and property descriptions</li>
      <li>Scanned forms (with handwriting via Textract Forms)</li>
      <li>Mixed-language documents</li>
    </ul>

    <h2>Engagement options</h2>
    <ul>
      <li>
        <strong>Pilot pipeline</strong> on one document type, sample of 50-200 docs:{' '}
        <strong>$1,500 – $3,500</strong> (2-3 weeks).
      </li>
      <li>
        <strong>Production pipeline</strong> with REST API + monitoring + human-review queue:{' '}
        <strong>$3,500 – $9,000</strong> (3-6 weeks).
      </li>
      <li>
        <strong>Per-document cloud cost</strong>: typically $0.005 – $0.05 depending on document
        length and LLM complexity.
      </li>
      <li>
        <strong>Monthly retainer</strong> for new document types and pipeline tuning: $900 – $2,500.
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
