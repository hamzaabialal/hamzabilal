import { css } from 'styled-components';

const button = css`
  position: relative;
  color: var(--green);
  background-color: rgba(100, 255, 218, 0.05);
  border: 1px solid var(--green);
  border-radius: 8px;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  overflow: hidden;
  isolation: isolate;
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1), background 260ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--grad-aurora);
    opacity: 0;
    z-index: -1;
    transition: opacity 260ms ease;
  }

  &::after {
    content: '' !important;
    display: block !important;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 30%,
      rgba(255, 255, 255, 0.22) 50%,
      transparent 70%
    );
    transform: translateX(-100%);
    transition: transform 650ms ease;
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    outline: none;
    color: var(--navy);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -14px rgba(100, 255, 218, 0.45), 0 0 0 1px rgba(100, 255, 218, 0.5);
  }
  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }
  &:hover::after,
  &:focus-visible::after {
    transform: translateX(100%);
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    color: var(--green);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button,

  smallButton: css`
    ${button};
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
  `,

  bigButton: css`
    ${button};
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
