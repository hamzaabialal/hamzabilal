/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });

  setHeadComponents([
    // Preconnect to font origins
    React.createElement('link', {
      key: 'preconnect-fonts',
      rel: 'preconnect',
      href: '/',
      crossOrigin: 'anonymous',
    }),

    // DNS prefetch for analytics
    React.createElement('link', {
      key: 'dns-prefetch-ga',
      rel: 'dns-prefetch',
      href: 'https://www.google-analytics.com',
    }),

    // Preload critical font - Calibre Regular (most used)
    React.createElement('link', {
      key: 'preload-calibre-regular',
      rel: 'preload',
      href: '/static/Calibre-Regular-*.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    }),

    // Preload critical font - Calibre Medium
    React.createElement('link', {
      key: 'preload-calibre-medium',
      rel: 'preload',
      href: '/static/Calibre-Medium-*.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    }),

    // Preload critical font - SF Mono Regular (for code/mono text)
    React.createElement('link', {
      key: 'preload-sfmono-regular',
      rel: 'preload',
      href: '/static/SFMono-Regular-*.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    }),

    // Add meta theme-color for better mobile experience
    React.createElement('meta', {
      key: 'theme-color',
      name: 'theme-color',
      content: '#0a192f',
    }),

    // Add meta for mobile viewport
    React.createElement('meta', {
      key: 'viewport',
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    }),
  ]);
};
