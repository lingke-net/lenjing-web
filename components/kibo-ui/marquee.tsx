"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useEffect, ReactNode } from "react";

interface MarqueeProps {
  className?: string;
  children: ReactNode;
  pauseOnHover?: boolean;
}

interface MarqueeContentProps {
  className?: string;
  children: ReactNode;
  speed?: number;
}

interface MarqueeItemProps {
  className?: string;
  children: ReactNode;
}

interface MarqueeFadeProps {
  side: "left" | "right";
  className?: string;
}

export function Marquee({ className, children, pauseOnHover = false }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function MarqueeContent({
  className,
  children,
  speed = 40,
}: MarqueeContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(speed);

  useEffect(() => {
    if (contentRef.current) {
      const width = contentRef.current.scrollWidth / 2;
      setDuration((width / speed) * 10);
    }
  }, [speed]);

  return (
    <div
      ref={contentRef}
      className={cn(
        "flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
        pauseOnHover && "group-hover:[animation-play-state:paused]",
        className
      )}
      style={{
        animationDuration: `${duration}s`,
      }}
    >
      {children}
      {children}
    </div>
  );
}

export function MarqueeItem({ className, children }: MarqueeItemProps) {
  return (
    <div className={cn("shrink-0", className)}>
      {children}
    </div>
  );
}

export function MarqueeFade({ side, className }: MarqueeFadeProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 bottom-0 w-24",
        side === "left" && "left-0 bg-gradient-to-r from-background to-transparent",
        side === "right" && "right-0 bg-gradient-to-l from-background to-transparent",
        className
      )}
    />
  );
}
