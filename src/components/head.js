import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

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
    // Primary Brand Keywords
    'Hamza Bilal',
    'Hamza Bilal Developer',
    'Hamza Bilal Portfolio',

    // High-Intent Hiring Keywords
    'Hire Backend Developer',
    'Hire Python Developer',
    'Hire Django Developer',
    'Hire FastAPI Developer',
    'Hire AI Engineer',
    'Hire AI Agent Developer',
    'Hire AI Automation Engineer',
    'Freelance Backend Developer',
    'Remote Python Developer',
    'Backend Developer for Hire',
    'Python Developer for Startups',
    'Upwork Freelancer',
    'Hire on Upwork',

    // Service Keywords
    'Backend Developer',
    'AI Engineer',
    'Python Developer',
    'Django Developer',
    'FastAPI Developer',
    'AI Agent Developer',
    'Machine Learning Engineer',
    'ML Engineer',
    'API Developer',
    'Build AI Agents',
    'Custom AI Agents',

    // Technology Keywords
    'Django',
    'FastAPI',
    'Flask',
    'Django REST Framework',
    'Python APIs',
    'AWS SageMaker',
    'AWS Comprehend',
    'OpenAI Integration',
    'LangChain Developer',
    'N8n Automation',
    'Make.com',
    'Zapier Automation',
    'AI Automation',

    // GEO Keywords
    'Backend Developer Pakistan',
    'Python Developer Pakistan',
    'AI Engineer Pakistan',
    'Remote Developer Asia',
    'Offshore Python Developer',
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

  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hamza Bilal',
    givenName: 'Hamza',
    familyName: 'Bilal',
    url: canonicalBase,
    jobTitle: [
      'Backend Developer',
      'AI Engineer',
      'AI Automation Engineer',
      'Python Developer',
      'Full Stack Developer',
      'AI Agent Developer',
    ],
    email: 'mailto:hamzaabialal@gmail.com',
    description:
      'Expert Backend Developer and AI Engineer specializing in Django, FastAPI, Python APIs, and building custom AI Agents. Available for hire worldwide.',
    knowsAbout: [
      'Django',
      'Django REST Framework',
      'FastAPI',
      'Flask',
      'Python',
      'REST APIs',
      'GraphQL',
      'Celery',
      'Redis',
      'PostgreSQL',
      'MySQL',
      'AI Agents',
      'OpenAI',
      'LangChain',
      'Machine Learning',
      'AWS SageMaker',
      'AWS Comprehend',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Microservices',
      'API Integration',
      'Zoom API',
      'Salesforce API',
      'N8n',
      'Make.com',
      'Zapier',
      'AI Automation',
      'Full Stack Development',
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
    workLocation: {
      '@type': 'VirtualLocation',
      name: 'Remote - Worldwide',
    },
    sameAs: [
      'https://www.linkedin.com/in/hamza-bilal-600968245/',
      'https://github.com/hamzaabialal',
      'https://www.upwork.com/freelancers/~016dcbde991464381d',
      'https://hamzabilal.dev',
    ],
  };

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hamza Bilal - Backend Development & AI Engineering Services',
    serviceType: [
      'Software Development',
      'AI Development',
      'Backend Development',
      'API Development',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide - Remote Services Available Globally',
    },
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
      'Hire expert Backend Developer and AI Engineer for Django, FastAPI, Python APIs, and custom AI Agents. Scalable solutions for startups and enterprises.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Backend & AI Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Django & DRF Backend Development',
            description:
              'Build scalable REST APIs with Django and Django REST Framework. Authentication, permissions, admin panels, ORM optimization, and comprehensive testing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FastAPI Microservices Development',
            description:
              'High-performance async APIs and microservices with FastAPI. Webhooks, background tasks, real-time features, and API integrations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom AI Agent Development',
            description:
              'Build intelligent AI agents using OpenAI, LangChain, and Agno. Automate workflows, integrate with your APIs, and create smart assistants for your business.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ML Model Deployment on AWS',
            description:
              'Deploy machine learning models to production on AWS SageMaker. Real-time endpoints, AWS Comprehend for text analysis, Whisper for transcription.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Backend Development',
            description:
              'End-to-end SaaS backend architecture. Multi-tenancy, subscription billing, user management, and scalable infrastructure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'API Integration Services',
            description:
              'Integrate third-party APIs including Zoom, Salesforce, Stripe, and social media platforms. OAuth flows, webhooks, and data synchronization.',
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
        name: 'How can I hire Hamza Bilal as a Backend Developer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can hire me by reaching out via email at hamzaabialal@gmail.com or through LinkedIn. I am available for freelance projects, contract work, and full-time remote positions worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build custom AI agents for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I specialize in building custom AI agents using OpenAI, LangChain, and Agno. I can create intelligent assistants, automate workflows, integrate AI with your existing systems, and build conversational AI solutions tailored to your business needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which Python backend frameworks do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I work with Django, Django REST Framework, FastAPI, and Flask. I choose the best framework based on your project needs - Django for robust admin and ORM, FastAPI for high-performance async APIs, and Flask for lightweight microservices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you deploy ML models on AWS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I have extensive experience deploying machine learning models on AWS. I use SageMaker for real-time model endpoints, AWS Comprehend for text analysis, and can set up complete ML pipelines with monitoring and scaling.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you build a SaaS backend for my startup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! I specialize in building scalable SaaS backends with multi-tenancy, user authentication, subscription billing integration (Stripe), API rate limiting, and cloud deployment. I use Django/FastAPI with PostgreSQL and Redis.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your availability and timezone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I am based in Pakistan (GMT+5) and work remotely with international clients worldwide. I am flexible with timezones and can accommodate meetings and collaboration across different time zones. I am available for full-time, part-time, and project-based work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate third-party APIs like Zoom, Salesforce, or Stripe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I have hands-on experience integrating many third-party APIs including Zoom, Salesforce, Stripe, Twilio, and social media platforms. I handle OAuth flows, webhooks, data synchronization, and error handling.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide scalable backend solutions for startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I design scalable, modular backends with Django/DRF and FastAPI, containerized with Docker, tested with pytest, and ready for CI/CD and cloud deployment. I build systems that can grow with your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes you different from other Backend Developers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I combine strong backend development skills with AI/ML expertise. I can build traditional APIs and also integrate AI capabilities like custom agents, ML model deployment, and intelligent automation - giving your product a competitive edge.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer ongoing maintenance and support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I offer ongoing maintenance, bug fixes, feature additions, and technical support for projects I build. I believe in long-term partnerships and ensuring your systems run smoothly.',
        },
      },
    ],
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />
      <meta
        name="description"
        content="Hamza Bilal - Senior AI Engineer & Backend Developer specializing in Django, FastAPI, and Autonomous AI Agents. Expert in Python and ML."
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
      <script type="application/ld+json">{JSON.stringify(jsonLdWebsite)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdPerson)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdService)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
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
