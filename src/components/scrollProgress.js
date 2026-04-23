import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  z-index: 12;
  pointer-events: none;

  .fill {
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
    background: linear-gradient(90deg, #64ffda, #7c5cff);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
    transition: width 80ms linear;
  }
`;

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight;
      const pct = height > 0 ? (scrolled / height) * 100 : 0;
      setProgress(pct);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <StyledBar progress={progress} aria-hidden="true">
      <div className="fill" />
    </StyledBar>
  );
};

export default ScrollProgress;
