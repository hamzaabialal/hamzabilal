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
    'Hamza',
    'Hamza Bilal',
    'Backend Developer',
    'Web Developer',
    'Python Developer',
    'Django',
    'FastAPI',
    'Flask',
    'Django REST Framework',
    'AI Engineer',
    'Machine Learning',
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
    url: canonicalBase,
    jobTitle: 'Backend Developer',
    email: 'mailto:hamzaabialal@gmail.com',
    knowsAbout: [
      'Django',
      'FastAPI',
      'REST APIs',
      'Celery',
      'xhtml2pdf',
      'Zoom API',
      'Salesforce API',
      'Python Developer',
      'Backend Developer',
      'API Developer',
      'AI Developer',
      'Deployed Custom Models in AWS Comprehened',
    ],
    sameAs: [
      'https://www.linkedin.com/in/hamza-bilal-600968245/',
      'https://github.com/hamzaabialal',
    ],
  };

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Backend Development & AI Services',
    serviceType: 'Software Development',
    areaServed: 'Worldwide',
    provider: {
      '@type': 'Person',
      name: 'Hamza Bilal',
      url: canonicalBase,
    },
    url: canonicalBase,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Backend & AI Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Django / DRF API Development',
            description: 'REST APIs, authentication, permissions, admin, ORM, testing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FastAPI Microservices',
            description: 'High-performance async services, webhooks, background tasks.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agents & Integrations',
            description: 'Agno + OpenAI agents integrated with APIs and data workflows.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ML Model Deployment (AWS)',
            description: 'SageMaker endpoints, AWS Comprehend, Whisper transcription.',
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
        name: 'Can you build AI agents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I build AI agents using Agno and OpenAI, integrating them with backend services and data workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which Python backend frameworks do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Django, Django REST Framework, FastAPI, and Flask—selected based on project needs for admin/ORM, robust REST, high-performance async, or lightweight utilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you deploy ML models on AWS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I containerize and deploy real-time models on AWS SageMaker, use AWS Comprehend for text analysis, and Whisper for transcription when needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you analyze social media content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I ingest data from TikTok, Instagram, Facebook, and YouTube via Apify and perform text, image, and video analysis.',
        },
      },
      {
        '@type': 'Question',
        name: 'What testing and reliability practices do you follow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Automated tests with pytest, background jobs with Celery/Redis, observability, and clean architecture for maintainability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with international clients remotely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I collaborate remotely with international clients across time zones using clear communication, async updates, and robust delivery processes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate third-party APIs (Zoom, Salesforce, etc.)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I have hands-on experience integrating Zoom, Salesforce, and other third-party APIs, including OAuth flows, webhooks, and data synchronization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide scalable backend solutions for startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I design scalable, modular backends with Django/DRF and FastAPI, containerized with Docker, tested with pytest, and ready for CI/CD and cloud deployment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are you located and do you work remotely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I’m based in Pakistan and work remotely with international clients worldwide.',
        },
      },
    ],
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
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
