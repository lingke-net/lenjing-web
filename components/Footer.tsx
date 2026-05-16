'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="w-full py-12 pl-[30px]">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/prism-logo-h-e.webp"
            alt="Prism Horizon"
            className="h-8 md:h-10"
          />
        </div>

        {/* 公司理念 */}
        <div className="mb-8 max-w-xl">
          <p className="text-sm text-white/60 leading-relaxed">
            用科技打开视界，用创意连接未来。棱镜视界致力于打造卓越的数字化体验，
            让每一次交互都成为超越想象的旅程。
          </p>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-white/10 mb-6" />

        {/* 版权信息 */}
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Prism Horizon 棱镜视界. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
