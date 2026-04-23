import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import {
  Head,
  Loader,
  Nav,
  Social,
  Email,
  Footer,
  ScrollProgress,
  Aurora,
  CursorGlow,
} from '@components';
import { GlobalStyle, theme } from '@styles';
import { usePrefersReducedMotion } from '@hooks';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* Lift only the main content wrapper above the Aurora backdrop.
     Nav, Side, and other fixed-positioned components handle their own z-index. */
  > #content {
    position: relative;
    z-index: 1;
  }
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const prefersReducedMotion = usePrefersReducedMotion();
  // Skip loader if user prefers reduced motion for better LCP
  const [isLoading, setIsLoading] = useState(isHome && !prefersReducedMotion);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Aurora />
              <CursorGlow />
              <ScrollProgress />
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
