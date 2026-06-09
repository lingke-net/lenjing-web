import { getAllArticles } from "@/lib/news";
import { NewsPageClient } from "./NewsPageClient";

export default function NewsPage() {
  const articles = getAllArticles();
  return <NewsPageClient articles={articles} />;
}
