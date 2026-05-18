'use client';

import Prism from '@/components/Prism';
import Silk from '@/components/Silk';
import Footer from '@/components/Footer';
  
import PixelBlast from '@/components/PixelBlast';

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
        {/*<Silk
          speed={6.9}
          scale={0.6}
          color="#002FA7"
          noiseIntensity={2.9}
          rotation={3.09}
        />*/}
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#2659d8"
          patternScale={5.5}
          patternDensity={1.45}
          pixelSizeJitter={1.15}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.7}
          edgeFade={0}
          transparent
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
