"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 确保 DOM 完全渲染后再开始动画
    requestAnimationFrame(() => {
      gsap.fromTo(
        container.children,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    });

    // 页面离开动画
    const handleBeforeLeave = () => {
      gsap.to(container, {
        opacity: 0,
        x: -30,
        duration: 0.3,
        ease: 'power2.in',
      });
    };

    // 监听链接点击
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && !link.getAttribute('href')?.startsWith('#') && !link.getAttribute('href')?.startsWith('http') && !link.getAttribute('href')?.startsWith('mailto') && !link.getAttribute('href')?.startsWith('tel')) {
        handleBeforeLeave();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
