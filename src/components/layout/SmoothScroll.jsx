import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

const lenisOptions = Object.freeze({
  anchors: true,
  lerp: 0.09,
  smoothWheel: true,
});

export default function SmoothScroll({ children }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (event) => setPrefersReducedMotion(event.matches);

    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  if (prefersReducedMotion) return children;

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
