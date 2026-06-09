"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.set(container, { opacity: 0 });

    requestAnimationFrame(() => {
      gsap.to(container, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  }, [pathname]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
