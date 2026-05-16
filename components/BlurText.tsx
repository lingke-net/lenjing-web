"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  blurAmount?: number;
  animationDuration?: number;
  className?: string;
  delay?: number;
}

export function BlurText({
  text,
  blurAmount = 10,
  animationDuration = 1,
  className = "",
  delay = 0,
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <motion.p
      className={className}
      initial={{ filter: `blur(${blurAmount}px)`, opacity: 0 }}
      animate={{
        filter: isVisible ? "blur(0px)" : `blur(${blurAmount}px)`,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: animationDuration,
        ease: "easeOut",
      }}
    >
      {text}
    </motion.p>
  );
}
