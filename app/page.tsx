'use client';

import PixelBlast from '@/components/PixelBlast';

export default function Home() {
  return (
    <>
      <style>{`
        @font-face {
          font-family: 'AlimamaFangYuanTi';
          src: url('https://ziyuan.lingke.ink/fount/AlimamaFangYuanTiVF-Thin-2.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
        }
        .title-text {
          font-family: 'AlimamaFangYuanTi', sans-serif;
          font-weight: 600;
        }
      `}</style>

      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#002FA7"
          patternScale={2.5}
          patternDensity={1.05}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={3}
          edgeFade={0.2}
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
    </>
  );
}
