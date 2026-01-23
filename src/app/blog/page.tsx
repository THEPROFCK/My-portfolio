"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { blogPosts, getFeaturedPosts } from "@/lib/blog";

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Subtle atmospheric background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-400/6 blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-500/6 blur-[160px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-6xl mx-auto text-left"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2"
            >
              <span className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider">
                Writing
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter mb-6 text-slate-100 leading-[0.85]"
              style={{
                fontFamily: "'Inter', 'SF Pro Display', system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              Blog
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed font-light"
            >
              Thoughts on tech, growth, and life.
            </motion.p>
          </motion.div>
        </div>

        {/* Subtle grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"200\" height=\"200\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')",
          }}
        />
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        {/* Featured posts */}
        {featuredPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="mb-20 max-w-7xl mx-auto"
          >
            <h2 className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/8 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-slate-400 font-medium border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-slate-300 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-base text-white/60 mb-6 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-white/40">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* All posts */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider mb-8">
            All Articles
          </h2>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <motion.article
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all group cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate group-hover:text-slate-300 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-slate-300 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}