import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StaggeredMenu from "@/components/StaggeredMenu";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  { label: '首页', ariaLabel: 'Go to home page', link: '/' },
  { label: '产品信息', ariaLabel: 'Learn about us', link: '/product' },
  { label: '了解我们', ariaLabel: 'View our services', link: '/about' },
  { label: '加入我们', ariaLabel: 'Get in touch', link: '/join-us' },
  { label: '新闻动态', ariaLabel: 'Get in touch', link: '/news' }
];

const socialItems = [
  { label: 'WeCom', link: 'https://work.weixin.qq.com/kfid/kfcc27e997eb895be0b' },
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
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B497CF', '#5227FF']}
          logoUrl="/prism-logo-h-e.webp"
          accentColor="#002FA7"
          isFixed={true}
        />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
