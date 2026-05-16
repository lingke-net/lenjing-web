"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  animateOnLoad?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789";

export function DecryptedText({
  text,
  speed = 50,
  className = "",
  animateOnLoad = true,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(
    animateOnLoad ? text.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]) : text.split("")
  );
  const [isAnimating, setIsAnimating] = useState(animateOnLoad);

  const decrypt = useCallback(() => {
    if (!animateOnLoad) {
      setDisplayText(text.split(""));
      return;
    }

    setIsAnimating(true);
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev.map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
      );
      
      iteration += 1 / 3;
      
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text.split(""));
        setIsAnimating(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, animateOnLoad]);

  useEffect(() => {
    const timeout = setTimeout(decrypt, 300);
    return () => clearTimeout(timeout);
  }, [decrypt]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText.join("")}
    </motion.span>
  );
}
