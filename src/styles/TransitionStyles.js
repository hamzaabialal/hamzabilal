import { css } from 'styled-components';

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
  /* Fade up - using only opacity to prevent CLS */
  .fadeup-enter {
    opacity: 0.01;
    transition: opacity 150ms var(--easing);
    will-change: opacity;
  }

  .fadeup-enter-active {
    opacity: 1;
    transition: opacity 150ms var(--easing);
    will-change: opacity;
  }

  /* Fade down - using only opacity to prevent CLS */
  .fadedown-enter {
    opacity: 0.01;
    transition: opacity 150ms var(--easing);
    will-change: opacity;
  }

  .fadedown-enter-active {
    opacity: 1;
    transition: opacity 150ms var(--easing);
    will-change: opacity;
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
    will-change: opacity;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 150ms var(--easing);
    will-change: opacity;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 150ms var(--easing);
  }
`;

export default TransitionStyles;
