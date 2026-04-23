import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;

  .node {
    fill: #64ffda;
    filter: drop-shadow(0 0 3px rgba(100, 255, 218, 0.9));
  }

  .edge {
    stroke: rgba(100, 255, 218, 0.35);
    stroke-width: 0.5;
  }
`;

const NODE_COUNT = 28;
const LINK_DIST = 180;

const Constellation = () => {
  const svgRef = useRef(null);
  const nodesRef = useRef([]);
  const edgesRef = useRef([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {return undefined;}

    const rect = () => svg.getBoundingClientRect();
    let width = rect().width || 900;
    let height = rect().height || 600;

    nodesRef.current = Array.from({ length: NODE_COUNT }).map(() => {
      const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      node.setAttribute('class', 'node');
      node.setAttribute('r', (Math.random() * 1.6 + 1).toFixed(2));
      svg.appendChild(node);
      return {
        el: node,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      };
    });

    const onResize = () => {
      width = rect().width || width;
      height = rect().height || height;
    };
    window.addEventListener('resize', onResize);

    const drawEdges = () => {
      // Clear previous
      edgesRef.current.forEach(e => e.remove());
      edgesRef.current = [];

      const nodes = nodesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('class', 'edge');
            line.setAttribute('x1', nodes[i].x);
            line.setAttribute('y1', nodes[i].y);
            line.setAttribute('x2', nodes[j].x);
            line.setAttribute('y2', nodes[j].y);
            line.setAttribute('stroke-opacity', (1 - dist / LINK_DIST) * 0.4);
            svg.insertBefore(line, svg.firstChild);
            edgesRef.current.push(line);
          }
        }
      }
    };

    let frame = 0;
    let rafId;
    const tick = () => {
      const nodes = nodesRef.current;
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) {n.vx *= -1;}
        if (n.y < 0 || n.y > height) {n.vy *= -1;}
        n.el.setAttribute('cx', n.x);
        n.el.setAttribute('cy', n.y);
      });
      if (frame % 6 === 0) {drawEdges();}
      frame += 1;
      rafId = requestAnimationFrame(tick);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(tick);
    } else {
      drawEdges();
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      nodesRef.current.forEach(n => n.el.remove());
      edgesRef.current.forEach(e => e.remove());
      nodesRef.current = [];
      edgesRef.current = [];
    };
  }, []);

  return <StyledSvg ref={svgRef} aria-hidden="true" />;
};

export default Constellation;
