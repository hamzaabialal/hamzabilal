import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();
  const isHomepage = pathname === '/' || pathname === '';

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } =
    site.siteMetadata;

  // Ensure canonical host in case siteUrl is not set to the production domain
  const canonicalBase =
    typeof siteUrl === 'string' && siteUrl.includes('hamzabilal.dev')
      ? siteUrl
      : 'https://hamzabilal.dev';

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${canonicalBase}${image || defaultImage}`,
    url: `${canonicalBase}${pathname}`,
  };

  const keywords = [
    // Primary Brand
    'Hamza Bilal',
    'Hamza Bilal AI Automation Engineer',
    'Hamza Bilal n8n Developer',

    // Primary Target Keywords
    'AI Automation Engineer',
    'Workflow Automation Expert',
    'n8n Automation Developer',
    'Make.com Automation Expert',
    'Zapier Automation Specialist',
    'AI Agent Developer',
    'Business Process Automation Consultant',

    // Niche Client Keywords
    'Ecommerce Automation Expert',
    'Lead Generation Automation',
    'CRM Automation Specialist',
    'LinkedIn Outreach Automation',
    'Sales Automation Developer',
    'Custom API Integration Expert',

    // Long-tail Hiring Keywords
    'Hire AI automation engineer',
    'Hire n8n developer',
    'Hire Make.com expert',
    'Hire Zapier expert',
    'Hire AI agent developer',
    'Freelance n8n developer',
    'Freelance AI automation engineer',
    'AI workflow automation for ecommerce',
    'Zapier expert for business automation',
    'Custom AI agent developer for startups',
    'n8n consultant for startups',
    'Make.com consultant for SaaS',

    // Supporting Service Keywords
    'n8n Self-Hosting',
    'Zapier to n8n Migration',
    'HubSpot Automation',
    'Close CRM Automation',
    'GoHighLevel Automation',
    'Salesforce Automation',
    'Notion API Automation',
    'WhatsApp Bot Developer',
    'Telegram Bot Developer',
    'OpenAI Integration',
    'LangChain Developer',
    'Prompt Engineering',
    'AWS SageMaker Deployment',
    'AWS Comprehend Integration',
    'AWS Textract OCR',

    // Backend Support Keywords
    'Python Backend Developer',
    'Django Developer',
    'FastAPI Developer',
    'REST API Development',

    // Geo Keywords (ranking in USA / Europe / Germany / Australia)
    'AI Automation Engineer USA',
    'AI Automation Engineer Europe',
    'AI Automation Engineer Germany',
    'AI Automation Engineer Australia',
    'n8n Developer USA',
    'n8n Developer UK',
    'n8n Developer Germany',
    'n8n Developer Australia',
    'Zapier Expert USA',
    'Make.com Expert Europe',
    'AI Agent Developer Berlin',
    'AI Agent Developer London',
    'AI Agent Developer Sydney',
    'Remote AI Automation Engineer',
    'Offshore AI Automation Freelancer',
  ];

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: defaultTitle || 'Hamza Bilal',
    url: canonicalBase,
    publisher: {
      '@type': 'Person',
      name: 'Hamza Bilal',
      url: canonicalBase,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${canonicalBase}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // VideoObject schema — Google Video search + AI chatbot (ChatGPT, Claude,
  // Perplexity) discoverability of the video introduction.
  const videoId = 'aDyulPIL-88';
  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Hamza Bilal — Video Introduction · AI Automation & Backend Engineer',
    description:
      'A short video introduction from Hamza Bilal — AI Automation Engineer, n8n / Make.com / Zapier expert, and AI Agent Developer. Trainer at Techticks with 100% Upwork Job Success. Available for hire by startups in USA, UK, Germany, and Australia.',
    thumbnailUrl: [
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    ],
    uploadDate: '2026-04-20',
    duration: 'PT1M',
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    potentialAction: {
      '@type': 'WatchAction',
      target: `${canonicalBase}/#video-intro`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Hamza Bilal',
      url: canonicalBase,
    },
    author: {
      '@type': 'Person',
      name: 'Hamza Bilal',
      url: canonicalBase,
    },
    inLanguage: 'en',
    isFamilyFriendly: true,
    keywords:
      'AI Automation Engineer, n8n developer, Make.com expert, Zapier specialist, AI Agent Developer, hire AI automation engineer, freelance n8n developer',
  };

  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hamza Bilal',
    givenName: 'Hamza',
    familyName: 'Bilal',
    url: canonicalBase,
    jobTitle: [
      'AI Automation Engineer',
      'Workflow Automation Expert',
      'n8n Automation Developer',
      'Make.com Automation Expert',
      'Zapier Automation Specialist',
      'AI Agent Developer',
      'Business Process Automation Consultant',
      'CRM Automation Specialist',
      'Ecommerce Automation Expert',
      'Lead Generation Automation Developer',
      'LinkedIn Outreach Automation Specialist',
      'Sales Automation Developer',
      'Custom API Integration Expert',
      'Backend Developer',
      'Python Developer',
    ],
    email: 'mailto:hamzaabialal@gmail.com',
    description:
      'Hire Hamza Bilal — AI Automation Engineer, n8n / Make.com / Zapier expert, and AI Agent Developer. Builds custom AI agents, CRM & ecommerce automations, and lead-generation workflows for startups in USA, UK, Germany, and Australia.',
    knowsAbout: [
      'AI Automation',
      'Workflow Automation',
      'n8n',
      'n8n Self-Hosting',
      'Make.com',
      'Zapier',
      'Zapier to n8n Migration',
      'AI Agents',
      'OpenAI',
      'LangChain',
      'Agno',
      'Prompt Engineering',
      'Business Process Automation',
      'CRM Automation',
      'HubSpot',
      'Close CRM',
      'GoHighLevel',
      'Salesforce',
      'Notion API',
      'Ecommerce Automation',
      'Shopify Automation',
      'Lead Generation Automation',
      'LinkedIn Outreach Automation',
      'Unipile',
      'Dripify',
      'Sales Automation',
      'Custom API Integration',
      'Webhooks',
      'OAuth 2.0',
      'WhatsApp Bot Development',
      'Telegram Bot Development',
      'PDF Data Extraction',
      'AWS SageMaker',
      'AWS Comprehend',
      'AWS Textract',
      'AWS Lambda',
      'AWS API Gateway',
      'Python',
      'Django',
      'Django REST Framework',
      'FastAPI',
      'Flask',
      'REST APIs',
      'Celery',
      'Redis',
      'PostgreSQL',
      'Docker',
      'CI/CD',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressRegion: 'Pakistan',
    },
    nationality: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    workLocation: [
      { '@type': 'VirtualLocation', name: 'Remote - Worldwide' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Place', name: 'Europe' },
    ],
    sameAs: [
      'https://www.linkedin.com/in/hamza-bilal-600968245/',
      'https://github.com/hamzaabialal',
      'https://www.upwork.com/freelancers/~016dcbde991464381d',
      'https://hamzabilal.dev',
      'https://www.youtube.com/watch?v=aDyulPIL-88',
    ],
    subjectOf: {
      '@type': 'VideoObject',
      name: 'Hamza Bilal — Video Introduction',
      url: `${canonicalBase}/#video-intro`,
      embedUrl: 'https://www.youtube.com/embed/aDyulPIL-88',
      thumbnailUrl: 'https://img.youtube.com/vi/aDyulPIL-88/maxresdefault.jpg',
    },
  };

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hamza Bilal — AI Automation, n8n / Make.com / Zapier Development Services',
    serviceType: [
      'AI Automation Engineering',
      'Workflow Automation',
      'n8n Development',
      'Make.com Development',
      'Zapier Development',
      'AI Agent Development',
      'Business Process Automation',
      'CRM Automation',
      'Ecommerce Automation',
      'Lead Generation Automation',
      'LinkedIn Outreach Automation',
      'Sales Automation',
      'Custom API Integration',
    ],
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'Place', name: 'Worldwide — Remote' },
    ],
    provider: {
      '@type': 'Person',
      name: 'Hamza Bilal',
      url: canonicalBase,
      email: 'mailto:hamzaabialal@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
        addressRegion: 'Pakistan',
      },
    },
    url: canonicalBase,
    description:
      'Hire an expert AI Automation Engineer, n8n developer, Make.com expert, and AI agent developer. Full workflow automation, CRM, ecommerce, LinkedIn outreach, and lead-generation automations for clients in USA, UK, Germany, and Australia.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Automation & Workflow Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'n8n Automation Development',
            description:
              'Custom n8n workflows, self-hosted n8n setup, Zapier-to-n8n migrations, and complex multi-step automations with error handling and retries.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Make.com Scenario Development',
            description:
              'Make.com scenarios with routers, iterators, aggregators, and operation-cost optimization for SaaS and ecommerce teams.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Zapier Automation',
            description:
              'Zapier Zaps, multi-step workflows, Paths, Webhooks by Zapier, and AI Actions with OpenAI for rapid client delivery.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom AI Agent Development',
            description:
              'Build custom AI agents with OpenAI, LangChain, and Agno. Tool use, memory, multi-step reasoning, and production-ready deployment for startups.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CRM Automation',
            description:
              'Automate HubSpot, Close CRM, GoHighLevel, and Salesforce — lead scoring, bi-directional sync, task handoffs, and reporting pipelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ecommerce Automation',
            description:
              'AI workflow automation for ecommerce: order processing, Shopify / WooCommerce integrations, inventory sync, customer support bots, abandoned-cart flows.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lead Generation Automation',
            description:
              'Automated lead-gen funnels: scraping with Apify, enrichment, scoring, CRM push, and AI-personalized first-touch messaging.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LinkedIn Outreach Automation',
            description:
              'Multi-channel LinkedIn + email outreach with Unipile and Dripify, AI-personalized openers, reply detection, and CRM handover.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sales Automation',
            description:
              'End-to-end sales-pipeline automation: inbound routing, lead qualification with LLMs, meeting booking, and automated follow-ups.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom API Integration',
            description:
              'Webhooks, OAuth flows, event-driven integrations, and robust retry/alerting for any SaaS or internal API.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Process Automation Consulting',
            description:
              'Audit, design, and ship end-to-end automation strategy replacing manual ops with self-healing workflows.',
          },
        },
      ],
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I hire an AI automation engineer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can hire Hamza Bilal as your AI Automation Engineer by emailing hamzaabialal@gmail.com or through LinkedIn and Upwork. I take freelance, contract, and retainer engagements with clients in the USA, UK, Germany, Australia, and across Europe — remote and timezone-flexible.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work as a freelance n8n developer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I work as a freelance n8n developer building custom workflows, self-hosting n8n for clients, and migrating Zapier or Make.com scenarios to n8n to cut costs. Projects range from single automations to full ops-platforms with error handling, alerting, and documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build AI workflow automation for ecommerce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I build AI workflow automation for ecommerce stores — Shopify and WooCommerce integrations, order routing, inventory sync, abandoned-cart flows, AI-powered customer-support bots, and end-to-end Meta Ads → CRM pipelines for DTC brands.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are you a Zapier expert for business automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I am a Zapier Automation Specialist and build multi-step Zaps, Paths, filters, Webhooks by Zapier, and AI Actions with OpenAI. Ideal when you need fast client-ready automations without the operational overhead of self-hosted tooling.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you develop custom AI agents for startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I build custom AI agents for startups using OpenAI, LangChain, and Agno — with tool use, memory, multi-step reasoning, and production deployment. Common use cases: lead qualification agents, customer-support copilots, internal ops assistants, and content-generation pipelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle Make.com scenario development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. I build complex Make.com scenarios using routers, iterators, aggregators, and error-handling branches. I also optimise operation usage to keep your Make.com bill under control.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you automate my CRM (HubSpot, Close, GoHighLevel, Salesforce)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I am a CRM Automation Specialist for HubSpot, Close CRM, GoHighLevel, and Salesforce — lead scoring, bi-directional sync with calendars and support tools, automated task creation, and reporting pipelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you do LinkedIn outreach automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I build multi-channel LinkedIn + email outreach systems with Unipile and Dripify, AI-personalized first lines via OpenAI, rate-limit-aware scheduling, reply detection, and automatic CRM handover.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build lead generation automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Lead-gen automations are a core specialty — scraping prospects with Apify, enriching with data providers, scoring with LLMs, pushing into HubSpot / Close / GoHighLevel, and triggering personalized first-touch outreach.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer custom API integration services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I specialize in custom API integrations — OAuth flows, webhooks, event-driven pipelines, and robust retry / alerting. I have hands-on experience with Close, HubSpot, Salesforce, Microsoft Graph, Notion, Revolut Business, Unipile, Apify, Stripe, and many more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve clients in the USA, UK, Germany, and Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I work remotely with clients across the USA, UK, Germany, Australia, and the wider EU. I am based in Pakistan (GMT+5) and am flexible with North American, European, and APAC working hours for meetings and real-time collaboration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you migrate existing Zapier or Make.com workflows to n8n?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Zapier-to-n8n and Make.com-to-n8n migrations are a popular engagement — they typically cut monthly automation cost significantly and unlock advanced logic (self-hosting, complex branching, background queues) that SaaS tools can not match.',
        },
      },
      {
        '@type': 'Question',
        name: 'What rates and engagement models do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I offer hourly, fixed-price, and monthly retainer engagements depending on scope. Simple automations ship in 2–5 days; complex multi-step AI workflows and lead-gen systems typically deliver in 1–3 weeks. You get a firm scope and timeline before we start.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide ongoing monitoring and support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every automation ships with error handling, alerting, and documentation. Optional monthly retainers cover monitoring, optimization, and new-feature rollouts so your systems stay healthy as your business grows.',
        },
      },
    ],
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />
      <meta
        name="description"
        content="Hire Hamza Bilal — AI Automation Engineer, n8n / Make.com / Zapier expert, and AI Agent Developer. Workflow automation, CRM automation, LinkedIn outreach, ecommerce & lead-generation automations for startups in USA, UK, Germany, and Australia."
      />{' '}
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaultTitle || 'Hamza Bilal'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="google-site-verification" content="qENLeOdnrBPsfj3q82IZ7OZb089_hl1SPYvny0LrrtU" />
      <meta name="google-site-verification" content="JYfQ0qgER--rJP2XM6618-D8OO37NUhhkq2w1RS1ITI" />
      {/* Open Graph video tags + Twitter player card — homepage only,
          where the embedded VideoIntro section lives. Lets Facebook /
          LinkedIn / X / Slack / Discord render an inline preview, and
          gives AI scrapers (ChatGPT, Perplexity, Claude) a clear video
          reference attached to this URL. */}
      {isHomepage && (
        <meta property="og:video" content="https://www.youtube.com/embed/aDyulPIL-88" />
      )}
      {isHomepage && (
        <meta property="og:video:url" content="https://www.youtube.com/embed/aDyulPIL-88" />
      )}
      {isHomepage && (
        <meta property="og:video:secure_url" content="https://www.youtube.com/embed/aDyulPIL-88" />
      )}
      {isHomepage && <meta property="og:video:type" content="text/html" />}
      {isHomepage && <meta property="og:video:width" content="1280" />}
      {isHomepage && <meta property="og:video:height" content="720" />}
      {isHomepage && (
        <meta
          property="og:image"
          content="https://img.youtube.com/vi/aDyulPIL-88/maxresdefault.jpg"
        />
      )}
      {isHomepage && <meta name="twitter:card" content="player" />}
      {isHomepage && (
        <meta name="twitter:player" content="https://www.youtube.com/embed/aDyulPIL-88" />
      )}
      {isHomepage && <meta name="twitter:player:width" content="1280" />}
      {isHomepage && <meta name="twitter:player:height" content="720" />}
      {isHomepage && (
        <meta
          name="twitter:image"
          content="https://img.youtube.com/vi/aDyulPIL-88/maxresdefault.jpg"
        />
      )}
      <script type="application/ld+json">{JSON.stringify(jsonLdWebsite)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdPerson)}</script>
      {isHomepage && <script type="application/ld+json">{JSON.stringify(jsonLdService)}</script>}
      {isHomepage && <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>}
      {isHomepage && <script type="application/ld+json">{JSON.stringify(jsonLdVideo)}</script>}
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
