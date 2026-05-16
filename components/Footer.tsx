"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type SocialLink = {
  name: string;
  url: string;
};

const FOOTER_LINKS: {
  information: { text: string; link: string }[];
  socialMedia: SocialLink[];
} = {
  information: [
    { text: "关于我们", link: "/about" },
    { text: "加入我们", link: "/join-us" },
    { text: "隐私协议", link: "https://support.lingke.ink/%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE" },
    { text: "产品使用服务条款", link: "https://support.lingke.ink/%E4%BA%A7%E5%93%81%E4%BD%BF%E7%94%A8%E6%9D%A1%E6%AC%BE" },
  ],
  socialMedia: [],
};

const CONTACT_INFO = {
  email: "hi@lenjing.cn",
  phone: "400-888-8888",
  address: "深圳市龙华区瓴克总部办公区P1",
};

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="px-10 py-12">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
          <img
            src="/prism-logo-h-e.webp"
            alt="Prism Horizon"
            className="h-16 md:h-12 cursor-pointer"
          />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-12">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">一束光，万千世界。</h3>
            <p className="text-sm text-white/60">
            棱镜视界（Lenjing Prism Horizon）是深圳瓴克网络科技有限公司旗下独立品牌，总部位于深圳瓴克总部办公区P1。我们是一家聚焦文化传媒、游戏发行运营、创意软件及数字资产开发的综合性数字创意企业。
            以“折射多元视角，创造无限世界”为核心理念，棱镜视界致力于将前沿技术与艺术表达相融合，在游戏、内容、工具与资产四个维度持续产出高品质的数字体验。我们相信，每一个视角都蕴藏着改变世界的力量。透过棱镜，看见不同
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white/60 uppercase tracking-wider">
              信息
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.information.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.link}
                    className="text-sm text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white/60 uppercase tracking-wider">
              联系我们
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="size-4 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="size-4 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              {FOOTER_LINKS.socialMedia.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="rounded-none border-white/20 hover:bg-white/10"
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="text-xs">{social.name.charAt(0)}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <Separator className="flex-1" />
          <div className="basis-10">
            <img
              src="/prism-logo-i.webp"
              alt="Logo"
              className="h-10 opacity-50"
            />
          </div>
          <Separator className="flex-1" />
        </div>

        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Lenjing Prism Horizon. All rights reserved. | 瓴克网络 旗下企业
          </p>
          <p className="text-xs text-white/40">
            LingkeWeb.Corn V3.0.1
          </p>
        </div>
      </div>
    </footer>
  );
}
