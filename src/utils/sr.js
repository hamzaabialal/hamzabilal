// Disabled ScrollReveal for better performance (prevents CLS and non-composited animations)
// Elements will appear immediately without animation

const isSSR = typeof window === 'undefined';

// Create a mock ScrollReveal that does nothing
const mockSR = {
  reveal: () => mockSR,
  clean: () => mockSR,
  destroy: () => mockSR,
  sync: () => mockSR,
};

const sr = isSSR ? null : mockSR;

export default sr;
