import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
  opacity: ${props => (props.isFinishing ? 0 : 1)};
  transition: opacity 0.2s ease-out;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    opacity: ${props => (props.isMounted ? 1 : 0)};
    transform: ${props => (props.isFinishing ? 'scale(0.8)' : 'scale(1)')};
    transition: opacity 0.15s ease, transform 0.2s ease;
    will-change: opacity, transform;

    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;

      #B {
        opacity: ${props => (props.showLetter ? 1 : 0)};
        transition: opacity 0.15s ease;
      }

      path {
        stroke-dasharray: 200;
        stroke-dashoffset: ${props => (props.isMounted ? 0 : 200)};
        transition: stroke-dashoffset 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    // Step 1: Mount and start path animation
    const mountTimeout = setTimeout(() => setIsMounted(true), 10);

    // Step 2: Show letter after path draws (400ms)
    const letterTimeout = setTimeout(() => setShowLetter(true), 450);

    // Step 3: Start finishing animation (600ms)
    const finishingTimeout = setTimeout(() => setIsFinishing(true), 650);

    // Step 4: Complete and unmount (850ms total - fast but professional)
    const completeTimeout = setTimeout(() => finishLoading(), 850);

    return () => {
      clearTimeout(mountTimeout);
      clearTimeout(letterTimeout);
      clearTimeout(finishingTimeout);
      clearTimeout(completeTimeout);
    };
  }, [finishLoading]);

  return (
    <StyledLoader
      className="loader"
      isMounted={isMounted}
      showLetter={showLetter}
      isFinishing={isFinishing}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
