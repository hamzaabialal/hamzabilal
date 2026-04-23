import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Layout,
  Reveal,
  Hero,
  Stack,
  Metrics,
  About,
  Jobs,
  Testimonials,
  Featured,
  Projects,
  Faq,
  Contact,
} from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <Reveal>
        <Stack />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Metrics />
      </Reveal>
      <Reveal>
        <Jobs />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Featured />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
