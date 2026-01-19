import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledSitemapSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 50px;

  @media (max-width: 768px) {
    padding: 80px 25px;
  }

  h1 {
    font-size: clamp(40px, 5vw, 60px);
    color: var(--lightest-slate);
    margin-bottom: 20px;
  }

  .subtitle {
    color: var(--slate);
    font-size: var(--fz-lg);
    margin-bottom: 50px;
  }

  .sitemap-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
  }

  .sitemap-section {
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    padding: 30px;
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
    }

    h2 {
      color: var(--green);
      font-size: var(--fz-xl);
      margin-bottom: 20px;
      font-family: var(--font-mono);
      display: flex;
      align-items: center;
      gap: 10px;

      &:before {
        content: '▹';
        color: var(--green);
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 12px;
    }

    a {
      color: var(--slate);
      font-size: var(--fz-md);
      transition: var(--transition);
      display: inline-block;

      &:hover {
        color: var(--green);
        transform: translateX(5px);
      }
    }

    .description {
      color: var(--light-slate);
      font-size: var(--fz-sm);
      margin-top: 5px;
    }
  }

  .cta-section {
    margin-top: 60px;
    text-align: center;
    padding: 40px;
    background-color: var(--light-navy);
    border-radius: var(--border-radius);

    h3 {
      color: var(--lightest-slate);
      margin-bottom: 15px;
    }

    p {
      color: var(--slate);
      margin-bottom: 25px;
    }

    .email-link {
      ${({ theme }) => theme.mixins.bigButton};
    }
  }
`;

const SitemapPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" }, frontmatter: { draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              description
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 10
      ) {
        edges {
          node {
            frontmatter {
              title
              external
              github
            }
          }
        }
      }
    }
  `);

  const posts = data.posts.edges;
  const projects = data.projects.edges;

  return (
    <Layout location={location}>
      <Helmet>
        <title>Sitemap | Hamza Bilal - Backend Developer & AI Engineer</title>
        <meta
          name="description"
          content="Complete sitemap of Hamza Bilal's portfolio. Navigate to all pages including services, projects, blog posts, and contact information."
        />
        <link rel="canonical" href="https://hamzabilal.dev/sitemap" />
      </Helmet>

      <StyledSitemapSection>
        <h1>Sitemap</h1>
        <p className="subtitle">
          Navigate through all pages and content on hamzabilal.dev - Your guide to hiring a Backend
          Developer & AI Engineer.
        </p>

        <div className="sitemap-grid">
          {/* Main Pages */}
          <div className="sitemap-section">
            <h2>Main Pages</h2>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
                <p className="description">Introduction & Overview</p>
              </li>
              <li>
                <Link to="/#about">About Me</Link>
                <p className="description">Skills, Experience & Background</p>
              </li>
              <li>
                <Link to="/#jobs">Work Experience</Link>
                <p className="description">Professional History</p>
              </li>
              <li>
                <Link to="/#projects">Featured Projects</Link>
                <p className="description">Portfolio Highlights</p>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
                <p className="description">Get In Touch</p>
              </li>
              <li>
                <Link to="/archive">Project Archive</Link>
                <p className="description">Complete Project List</p>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="sitemap-section">
            <h2>Services Offered</h2>
            <ul>
              <li>
                <Link to="/#about">Django & DRF Development</Link>
                <p className="description">REST APIs, Admin, Authentication</p>
              </li>
              <li>
                <Link to="/#about">FastAPI Development</Link>
                <p className="description">High-Performance Async APIs</p>
              </li>
              <li>
                <Link to="/#about">AI Agent Development</Link>
                <p className="description">Custom AI Agents with OpenAI</p>
              </li>
              <li>
                <Link to="/#about">ML Model Deployment</Link>
                <p className="description">AWS SageMaker & Comprehend</p>
              </li>
              <li>
                <Link to="/#about">SaaS Backend Development</Link>
                <p className="description">Scalable Backend Architecture</p>
              </li>
              <li>
                <Link to="/#about">API Integration</Link>
                <p className="description">Zoom, Salesforce, Stripe & More</p>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div className="sitemap-section">
            <h2>Blog Posts</h2>
            <ul>
              <li>
                <Link to="/pensieve">All Blog Posts</Link>
                <p className="description">Technical Articles & Tutorials</p>
              </li>
              {posts.map(({ node }, i) => (
                <li key={i}>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/pensieve/tags">Browse by Tags</Link>
                <p className="description">Filter Posts by Topic</p>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="sitemap-section">
            <h2>Projects</h2>
            <ul>
              {projects.map(({ node }, i) => (
                <li key={i}>
                  <a
                    href={node.frontmatter.external || node.frontmatter.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer">
                    {node.frontmatter.title}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/archive">View All Projects →</Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="sitemap-section">
            <h2>Technologies</h2>
            <ul>
              <li>
                <Link to="/#about">Python & Django</Link>
              </li>
              <li>
                <Link to="/#about">FastAPI & Flask</Link>
              </li>
              <li>
                <Link to="/#about">Django REST Framework</Link>
              </li>
              <li>
                <Link to="/#about">OpenAI & LangChain</Link>
              </li>
              <li>
                <Link to="/#about">AWS SageMaker</Link>
              </li>
              <li>
                <Link to="/#about">Docker & Kubernetes</Link>
              </li>
              <li>
                <Link to="/#about">PostgreSQL & Redis</Link>
              </li>
              <li>
                <Link to="/#about">Celery & Background Tasks</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="sitemap-section">
            <h2>Connect</h2>
            <ul>
              <li>
                <a
                  href="mailto:hamzaabialal@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Email: hamzaabialal@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hamza-bilal-600968245/"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hamzaabialal"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h3>Ready to Hire a Backend Developer & AI Engineer?</h3>
          <p>
            Looking for someone to build scalable APIs, deploy ML models, or create custom AI
            agents? Let's discuss your project.
          </p>
          <a
            className="email-link"
            href="mailto:hamzaabialal@gmail.com"
            target="_blank"
            rel="noreferrer">
            Get In Touch
          </a>
        </div>
      </StyledSitemapSection>
    </Layout>
  );
};

export default SitemapPage;
