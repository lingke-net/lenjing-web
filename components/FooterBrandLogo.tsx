"use client";

import GridDistortion from "./GridDistortion";

interface FooterBrandLogoProps {
  imageSrc?: string;
  className?: string;
}

export default function FooterBrandLogo({
  imageSrc = "/prism-logo-h-e-w.webp",
  className = "",
}: FooterBrandLogoProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-0 overflow-hidden h-[200px] sm:h-[260px] md:h-[320px] lg:h-[400px] ${className}`}
    >
      {/* 背景层 */}
      <div className="absolute inset-0 bg-[#002FA7] z-0" />
      {/* GridDistortion 层 */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-[min(90vw,calc((100vh-80px)*4.34))] aspect-[10/2.3025]">
          <GridDistortion
            imageSrc={imageSrc}
            grid={12}
            mouse={0.12}
            strength={0.18}
            relaxation={0.88}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
