import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #05070f;
    --navy: #0a0f1f;
    --light-navy: #111a33;
    --lightest-navy: #1c2847;
    --navy-shadow: rgba(2, 6, 23, 0.75);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #f0f6ff;

    /* Primary accents — richer, gradient-ready palette */
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --purple: #7c5cff;
    --pink: #ff4ecd;
    --blue: #00e5ff;

    /* Curated gradients used across headings, borders, buttons */
    --grad-primary: linear-gradient(135deg, #64ffda 0%, #00e5ff 40%, #7c5cff 100%);
    --grad-aurora: linear-gradient(120deg, #64ffda 0%, #7c5cff 50%, #ff4ecd 100%);
    --grad-glow: radial-gradient(circle at 30% 30%, rgba(100, 255, 218, 0.18), transparent 60%);

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
