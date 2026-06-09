import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllArticles } from "@/lib/news";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ChevronUp } from "lucide-react";
import { ArticleContent } from "./ArticleContent";
import { ArticleShare } from "./ArticleShare";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 250));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const all = getAllArticles();
  const related = all.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);
  const readingTime = estimateReadingTime(article.content);

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 px-4 py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300/80 text-sm text-center">
          我们正在测试 News，内容不可信
        </div>
        <div className="mb-8 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="text-white/50 hover:text-white -ml-2" asChild>
            <Link href="/news">
              <ArrowLeft className="size-4 mr-1" />
              返回新闻中心
            </Link>
          </Button>
          <ArticleShare title={article.title} slug={article.slug} />
        </div>

        <header className="mb-10">
          <Badge variant="outline" className="mb-4 border-purple-500/40 text-purple-300">
            {article.category}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>阅读约 {readingTime} 分钟</span>
            </div>
          </div>
        </header>

        <div className="aspect-[2/1] relative overflow-hidden rounded-2xl mb-12 border border-white/10">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="size-full object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <ArticleContent content={article.content} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="text-white/50 hover:text-white" asChild>
            <Link href="/news">
              <ArrowLeft className="size-4 mr-1" />
              返回新闻中心
            </Link>
          </Button>
          <ArticleShare title={article.title} slug={article.slug} />
        </div>

        {related.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">相关文章</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/news/${r.slug}`}
                  className="group block rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all overflow-hidden cursor-pointer"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-white leading-snug group-hover:text-purple-300 transition-colors line-clamp-2">
                      {r.title}
                    </p>
                    <p className="text-xs text-white/40 mt-2">{formatDate(r.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
