import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1 
}) {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin: '50px',
    triggerOnce: true
  });

  const delayClass = delay === 1 ? 'stagger-1' : 
                   delay === 2 ? 'stagger-2' : 
                   delay === 3 ? 'stagger-3' : 
                   delay === 4 ? 'stagger-4' : '';

  return (
    <div
      ref={targetRef}
      className={`fade-in-section ${delayClass} ${
        isIntersecting ? 'is-visible' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}