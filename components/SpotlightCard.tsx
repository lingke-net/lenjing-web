"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Card
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "linear-gradient(135deg, rgba(15, 15, 20, 0.9), rgba(20, 20, 30, 0.8))",
        border: "1px solid rgba(100, 80, 180, 0.2)",
      }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 80, 180, 0.15), transparent 40%)`
            : "none",
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          background: isHovered
            ? `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 80, 180, 0.08), transparent 60%)`
            : "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      
      <CardContent className="relative z-10 p-6">
        {children}
      </CardContent>
    </Card>
  );
}
