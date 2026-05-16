"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  text: string;
  blurAmount?: number;
  animationDuration?: number;
  className?: string;
}

export function TrueFocus({
  text,
  blurAmount = 8,
  animationDuration = 1,
  className = "",
}: TrueFocusProps) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsFocused(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.h2
      className={className}
      initial={{ filter: `blur(${blurAmount}px)`, opacity: 0 }}
      animate={{
        filter: isFocused ? "blur(0px)" : `blur(${blurAmount}px)`,
        opacity: isFocused ? 1 : 0,
      }}
      transition={{
        duration: animationDuration,
        ease: "easeOut",
      }}
    >
      {text}
    </motion.h2>
  );
}
