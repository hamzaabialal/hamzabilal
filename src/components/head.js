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
    sameAs: [
      'https://www.linkedin.com/in/hamza-bilal-600968245/',
      'https://github.com/hamzaabialal',
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
