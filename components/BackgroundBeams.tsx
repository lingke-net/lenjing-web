"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Beam {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  opacity: number;
}

interface BackgroundBeamsProps {
  className?: string;
  beamCount?: number;
}

export function BackgroundBeams({
  className = "",
  beamCount = 20,
}: BackgroundBeamsProps) {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const initialBeams: Beam[] = Array.from({ length: beamCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      angle: Math.random() * 360,
      speed: 0.2 + Math.random() * 0.5,
      length: 100 + Math.random() * 200,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setBeams(initialBeams);
  }, [beamCount]);

  useEffect(() => {
    if (beams.length === 0) return;

    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      setBeams((prevBeams) =>
        prevBeams.map((beam) => ({
          ...beam,
          x: (beam.x + Math.sin(beam.angle * (Math.PI / 180)) * beam.speed) % 100,
          y: (beam.y + Math.cos(beam.angle * (Math.PI / 180)) * beam.speed) % 100,
          angle: beam.angle + beam.speed * 0.1,
          opacity: 0.1 + Math.sin(elapsed * 2 + beam.x) * 0.1,
        }))
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [beams.length]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(100, 80, 180, 0.6)" />
            <stop offset="50%" stopColor="rgba(80, 120, 200, 0.4)" />
            <stop offset="100%" stopColor="rgba(60, 160, 220, 0.6)" />
          </linearGradient>
        </defs>
        {beams.map((beam, index) => (
          <motion.line
            key={index}
            x1={`${beam.x}%`}
            y1={`${beam.y}%`}
            x2={`${beam.x + Math.cos(beam.angle * (Math.PI / 180)) * beam.length}%`}
            y2={`${beam.y + Math.sin(beam.angle * (Math.PI / 180)) * beam.length}%`}
            stroke="url(#beamGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: beam.opacity }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
}
