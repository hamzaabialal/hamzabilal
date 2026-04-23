import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from './layout';

const StyledServicePage = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 140px 50px 80px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 120px 25px 60px;
  }

  .breadcrumb {
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    margin-bottom: 24px;

    a {
      color: var(--green);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  h1 {
    font-size: clamp(34px, 5.5vw, 60px);
    line-height: 1.1;
    letter-spacing: -0.01em;
    background: var(--grad-primary);
    background-size: 220% 220%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    margin: 0 0 16px;
  }

  .lede {
    color: var(--light-slate);
    font-size: clamp(var(--fz-lg), 1.6vw, var(--fz-xl));
    line-height: 1.55;
    max-width: 780px;
    margin: 0 0 36px;
  }

  .meta-row {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 56px;

    .pill {
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(100, 255, 218, 0.08);
      border: 1px solid rgba(100, 255, 218, 0.3);
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }
  }

  h2 {
    font-size: clamp(24px, 3vw, 32px);
    color: var(--lightest-slate);
    margin: 56px 0 16px;
    line-height: 1.2;
  }

  h3 {
    font-size: clamp(18px, 2vw, 22px);
    color: var(--lightest-slate);
    margin: 32px 0 10px;
  }

  p,
  li {
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.7;
  }

  ul {
    padding-left: 20px;
    margin: 0 0 24px;

    li {
      margin-bottom: 8px;
    }
  }

  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 24px 0 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    padding: 24px 22px;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(28, 40, 71, 0.5) 0%, rgba(10, 15, 31, 0.7) 100%);
    border: 1px solid rgba(100, 255, 218, 0.12);
    transition: transform 280ms ease, border-color 280ms ease;

    &:hover {
      transform: translateY(-4px);
      border-color: rgba(100, 255, 218, 0.4);
    }

    h3 {
      margin-top: 0;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
    }

    p {
      font-size: var(--fz-md);
      line-height: 1.55;
      margin: 0;
    }
  }

  .faq-item {
    border-top: 1px solid var(--lightest-navy);
    padding: 24px 0;

    h3 {
      margin: 0 0 8px;
      font-size: var(--fz-xl);
      color: var(--lightest-slate);
    }

    p {
      margin: 0;
    }
  }

  .cta-block {
    margin: 80px 0 0;
    padding: 48px 40px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.08), rgba(124, 92, 255, 0.08));
    border: 1px solid rgba(100, 255, 218, 0.25);
    text-align: center;

    h2 {
      margin-top: 0;
      background: var(--grad-primary);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .cta-actions {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 18px;
      justify-content: center;
    }

    .btn-primary {
      ${({ theme }) => theme.mixins.bigButton};
      text-decoration: none;
    }
    .btn-secondary {
      ${({ theme }) => theme.mixins.smallButton};
      text-decoration: none;
    }
  }

  .related {
    margin-top: 64px;

    h2 {
      margin-bottom: 16px;
    }
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      li {
        margin: 0;
      }

      a {
        display: inline-block;
        padding: 8px 14px;
        border-radius: 8px;
        border: 1px solid var(--lightest-navy);
        color: var(--light-slate);
        text-decoration: none;
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        transition: all 240ms ease;

        &:hover {
          color: var(--green);
          border-color: var(--green);
          transform: translateY(-2px);
        }
      }
    }
  }

  a.inline {
    color: var(--green);
    text-decoration: none;
    border-bottom: 1px solid rgba(100, 255, 218, 0.4);
    &:hover {
      border-bottom-color: var(--green);
    }
  }
`;

const ServiceLayout = ({
  location,
  title,
  metaTitle,
  metaDescription,
  canonicalPath,
  lede,
  pills,
  serviceJsonLd,
  faqJsonLd,
  children,
  related,
}) => (
  <Layout location={location}>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={`https://hamzabilal.dev${canonicalPath}`} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`https://hamzabilal.dev${canonicalPath}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {serviceJsonLd && <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>}
      {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
    </Helmet>

    <StyledServicePage>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/services/">Services</Link>
        <span>›</span>
        <span>{title}</span>
      </div>

      <h1>{title}</h1>
      <p className="lede">{lede}</p>

      {pills && pills.length > 0 && (
        <div className="meta-row">
          {pills.map(p => (
            <span key={p} className="pill">
              {p}
            </span>
          ))}
        </div>
      )}

      {children}

      <div className="cta-block">
        <h2>Ready to ship this for your business?</h2>
        <p>
          Send a 2-line message describing your stack and the workflow that costs you the most hours
          each week. Reply within 4 hours with a scope, timeline, and fixed quote.
        </p>
        <div className="cta-actions">
          <a className="btn-primary" href="mailto:hamzaabialal@gmail.com">
            Email hamzaabialal@gmail.com
          </a>
          <a
            className="btn-secondary"
            href="https://www.upwork.com/freelancers/~016dcbde991464381d"
            target="_blank"
            rel="noreferrer">
            Hire on Upwork
          </a>
        </div>
      </div>

      {related && related.length > 0 && (
        <div className="related">
          <h2>Related services</h2>
          <ul>
            {related.map(r => (
              <li key={r.to}>
                <Link to={r.to}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledServicePage>
  </Layout>
);

ServiceLayout.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  metaTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  canonicalPath: PropTypes.string.isRequired,
  lede: PropTypes.string.isRequired,
  pills: PropTypes.arrayOf(PropTypes.string),
  serviceJsonLd: PropTypes.object,
  faqJsonLd: PropTypes.object,
  children: PropTypes.node.isRequired,
  related: PropTypes.arrayOf(PropTypes.shape({ to: PropTypes.string, label: PropTypes.string })),
};

ServiceLayout.defaultProps = {
  pills: [],
  serviceJsonLd: null,
  faqJsonLd: null,
  related: [],
};

export default ServiceLayout;
