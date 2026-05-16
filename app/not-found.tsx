'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import LetterGlitch from '@/components/LetterGlitch';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const handleGoHome = () => {
    const content = contentRef.current;
    if (!content) return;

    gsap.to(content, {
      opacity: 0,
      x: -30,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => router.push('/')
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
        glitchColors={['#081c4f', '#3061e0', '#002FA7']}
      />

      <div
        ref={contentRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
          zIndex: 10,
          padding: '0 20px',
        }}
      >
        <h1 style={{
          fontSize: 'clamp(80px, 15vw, 150px)',
          fontWeight: 'bold',
          margin: 0,
          color: '#fff',
          lineHeight: 1,
        }}>
          404
        </h1>

        <p style={{
          marginTop: '40px',
          fontSize: 'clamp(14px, 2.5vw, 20px)',
          color: 'rgba(255,255,255,0.6)',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}>
          这个页面不存在，也可能是棱镜没做完...
        </p>

        <Button className="mt-12" variant="secondary" onClick={handleGoHome}>
          返回首页
        </Button>
      </div>
    </div>
  );
}
