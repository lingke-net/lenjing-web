'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isFirstRender.current) {
      // 首次加载：淡入
      isFirstRender.current = false;
      gsap.fromTo(
        container,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' }
      );
      return;
    }

    // 页面切换：滑出当前页 + 滑入新页
    const tl = gsap.timeline();
    
    // 滑出当前内容
    tl.to(container, {
      opacity: 0,
      x: -50,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        // 更新内容
        setDisplayChildren(children);
        // 重置位置
        gsap.set(container, { x: 50, opacity: 0 });
      }
    });

    // 滑入新内容
    tl.to(container, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, [pathname, children]);

  return (
    <div ref={containerRef} className="page-transition-container">
      {displayChildren}
    </div>
  );
}
