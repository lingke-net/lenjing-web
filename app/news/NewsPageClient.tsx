"use client";

import { useState } from "react";
import Link from "next/link";
import type { ArticleMeta } from "@/lib/news";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Newspaper } from "lucide-react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCategories(articles: ArticleMeta[]) {
  return Array.from(new Set(articles.map((a) => a.category)));
}

export function NewsPageClient({ articles }: { articles: ArticleMeta[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = getCategories(articles);
  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;
  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 px-4 py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300/80 text-sm text-center">
          我们正在测试 News，内容不可信
        </div>
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="size-8 text-purple-400" />
            <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
              Prism's News
            </h1>
          </div>
          <p className="text-lg text-white/60 max-w-2xl">
            随时了解棱镜视界的最新动态、产品更新与行业洞察
          </p>
        </header>

        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === null
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                  : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70"
              }`}
            >
              全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {featured && !activeCategory && (
          <section className="mb-16">
            <Link href={`/news/${featured.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:border-purple-500/30">
                <div className="aspect-[2/1] sm:aspect-[3/1] relative overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                  <Badge variant="outline" className="mb-4 text-xs border-purple-500/40 text-purple-300">
                    {featured.category}
                  </Badge>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-3 line-clamp-2">
                    {featured.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
                    <Calendar className="size-4" />
                    <span>{formatDate(featured.date)}</span>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base max-w-2xl line-clamp-2">
                    {featured.summary}
                  </p>
                </div>
              </div>
            </Link>
          </section>
        )}

        {rest.length > 0 && (
          <section>
            {!activeCategory && (
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-white">最新文章</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                <span className="text-sm text-white/30">{articles.length} 篇文章</span>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <Link key={article.slug} href={`/news/${article.slug}`} className="group">
                  <Card className="h-full overflow-hidden border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <Badge variant="outline" className="text-xs bg-black/40 backdrop-blur-sm border-purple-500/30 text-purple-300">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
                        <Calendar className="size-3.5" />
                        <span>{formatDate(article.date)}</span>
                        <span className="text-white/20 mx-1">·</span>
                        <span className="text-white/30">{article.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white leading-snug mb-2 group-hover:text-purple-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm text-white/40 group-hover:text-purple-300 transition-colors">
                        <span>阅读更多</span>
                        <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <Newspaper className="size-16 text-white/10 mx-auto mb-6" />
            <p className="text-xl text-white/40">暂无相关文章</p>
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                查看全部文章 →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
