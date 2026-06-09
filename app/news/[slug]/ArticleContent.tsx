"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ArticleContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children, ...props }) => (
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 tracking-tight" {...props}>
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className="text-xl sm:text-2xl font-semibold text-white mt-8 mb-3" {...props}>
            {children}
          </h3>
        ),
        p: ({ children, ...props }) => (
          <p className="text-white/70 leading-[1.8] text-base sm:text-[1.0625rem] mb-5" {...props}>
            {children}
          </p>
        ),
        ul: ({ children, ...props }) => (
          <ul className="space-y-2 text-white/70 text-base sm:text-[1.0625rem] mb-6 pl-0" {...props}>
            {children}
          </ul>
        ),
        li: ({ children, ...props }) => (
          <li className="flex items-start gap-3 leading-[1.8]" {...props}>
            <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-purple-500/60" />
            <span>{children}</span>
          </li>
        ),
        strong: ({ children, ...props }) => (
          <strong className="text-white font-semibold" {...props}>
            {children}
          </strong>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote className="border-l-2 border-purple-500/60 text-white/50 pl-6 italic my-8 text-base sm:text-lg leading-relaxed" {...props}>
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
