"use client";

import { Share2, Link2, Check } from "lucide-react";
import { useState } from "react";

export function ArticleShare({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined"
    ? `${window.location.origin}/news/${slug}`
    : `/news/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const shareData = { title, url };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleNativeShare}
        aria-label="分享文章"
        className="inline-flex items-center justify-center size-8 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
      >
        <Share2 className="size-4" />
      </button>
      <button
        onClick={handleCopy}
        aria-label="复制链接"
        className="inline-flex items-center justify-center size-8 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
      >
        {copied ? <Check className="size-4 text-green-400" /> : <Link2 className="size-4" />}
      </button>
    </div>
  );
}
