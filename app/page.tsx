'use client';

import Prism from '@/components/Prism';
import Silk from '@/components/Silk';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          backgroundColor: '#000',
          overflow: 'hidden',
        }}
      >
        <Silk
          speed={6.9}
          scale={0.6}
          color="#002FA7"
          noiseIntensity={2.9}
          rotation={3.09}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '30px',
            zIndex: 10,
          }}
        >
          <h1
            className="title-text"
            style={{
              fontSize: '64px',
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.2,
              color: '#fff',
            }}
          >
            创造超越想象的视界
            <br />
            <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontFamily: 'Arial, sans-serif', fontSize: '48px' }}>
              Beyond Imagination
            </span>
          </h1>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
