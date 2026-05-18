import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StaggeredMenu from "@/components/StaggeredMenu";
import PageTransition from "@/components/PageTransition";
import FooterBrandLogo from "@/components/FooterBrandLogo";
import ConditionalWrapper from "@/components/ConditionalWrapper";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prism Horizon 棱镜视界",
  description: "棱镜视界，创造超越想象的视界",
};

const menuItems = [
  { label: '首页', ariaLabel: '回到欢迎页面', link: '/' },
  { label: '产品信息', ariaLabel: '了解我们的产品', link: '/product' },
  { label: '关于我们', ariaLabel: '关于我们', link: '/about' },
  { label: '加入我们', ariaLabel: '加入我们', link: '/join-us' },
  { label: '新闻动态', ariaLabel: '获取我司动态', link: '/news' },
  { label: '登录/注册', ariaLabel: '登录/注册', link: '/account/login' },
];

const socialItems = [
  { label: '微信', link: 'https://work.weixin.qq.com/kfid/kfcc27e997eb895be0b' },
  { label: 'GitHub', link: 'https://github.com/lingke-net' }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SpeedInsights />
        <Analytics/>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#8465ffff', '#5227FF']}
          logoUrl="/prism-logo-h-e.webp"
          accentColor="#5227FF"
          isFixed={true}
        />
        <main className="flex-1 relative z-[1]">
          <PageTransition>
            {children}
          </PageTransition>
          <ConditionalWrapper>
            {/* 占位区域，防止底部 Fixed 组件遮挡内容 */}
            <div className="h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px]"></div>
          </ConditionalWrapper>
        </main>
        <ConditionalWrapper>
          <FooterBrandLogo />
        </ConditionalWrapper>
        <Toaster />
      </body>
    </html>
  );
}
