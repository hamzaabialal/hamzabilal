import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const StyledReveal = styled.div`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible, distance, instant }) =>
    visible || instant ? 'translate3d(0,0,0)' : `translate3d(0,${distance}px,0)`};
  transition: ${({ instant }) =>
    instant
      ? 'none'
      : 'opacity 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms cubic-bezier(0.22, 1, 0.36, 1)'};
  transition-delay: ${({ delay }) => `${delay}ms`};
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const Reveal = ({ children, delay = 0, distance = 20, as }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);

  // Synchronously check: is this element already on screen at first paint?
  // If yes, skip the fade — show it immediately and without animation.
  useIsoLayoutEffect(() => {
    if (typeof window === 'undefined') {return;}
    const node = ref.current;
    if (!node) {return;}
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyInView = rect.top < vh && rect.bottom > 0;
    if (alreadyInView) {
      setInstant(true);
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {return undefined;}
    if (instant || visible) {return undefined;}
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const node = ref.current;
    if (!node) {return undefined;}
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [instant, visible]);

  return (
    <StyledReveal
      ref={ref}
      visible={visible}
      instant={instant}
      delay={delay}
      distance={distance}
      as={as}>
      {children}
    </StyledReveal>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  distance: PropTypes.number,
  as: PropTypes.elementType,
};

export default Reveal;
