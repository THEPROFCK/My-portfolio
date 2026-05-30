import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#080808] py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-neutral-600 text-[11px] uppercase tracking-[0.3em] font-medium mb-4">
              Writing
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-medium transition-colors group shrink-0"
          >
            View all posts
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Posts */}
        <div className="divide-y divide-white/[0.07]">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors duration-200"
            >
              {/* Index */}
              <span className="text-neutral-700 text-sm font-mono w-6 shrink-0 hidden sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Tags */}
              <div className="flex gap-2 shrink-0">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-md border border-white/10 text-neutral-500 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-white text-base sm:text-lg font-semibold group-hover:text-neutral-300 transition-colors flex-1">
                {post.title}
              </h3>

              {/* Date + arrow */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-neutral-600 text-sm hidden sm:block">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
