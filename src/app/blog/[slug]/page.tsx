"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Download, Check } from "lucide-react";
import { getBlogPost } from "@/lib/blog";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} slug={slug} />;
}

function BlogPostContent({ post, slug }: { post: any; slug: string }) {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Get current time when component mounts
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    // Update time every minute
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  // Share functionality
  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: `Check out this article: ${post.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying link
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  // Download as PDF/Text functionality
  const handleDownload = () => {
    // Create text content
    const textContent = `
${post.title}
Published: ${new Date(post.publishedAt).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})}
Reading Time: ${post.readTime}
Tags: ${post.tags.join(', ')}

${post.content}

---
Read more at: ${window.location.href}
    `.trim();

    // Create blob and download
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Download as HTML (better formatting)
  const handleDownloadHTML = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            line-height: 1.6;
            color: #333;
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #1a2b3b;
        }
        .meta {
            color: #666;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
        }
        .tags {
            margin-bottom: 1rem;
        }
        .tag {
            display: inline-block;
            padding: 4px 12px;
            margin-right: 8px;
            background: #f0f0f0;
            border-radius: 4px;
            font-size: 0.875rem;
            color: #666;
        }
        h2 {
            font-size: 1.875rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #1a2b3b;
        }
        p {
            margin-bottom: 1rem;
        }
        .footer {
            margin-top: 3rem;
            padding-top: 1rem;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <div class="tags">
        ${post.tags.map((tag: string) => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <h1>${post.title}</h1>
    <div class="meta">
        <p>Published: ${new Date(post.publishedAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}</p>
        <p>Reading Time: ${post.readTime}</p>
    </div>
    <div class="content">
        ${post.content.split('\n').map((line: string) => {
          if (line.startsWith('# ')) {
            return `<h1>${line.slice(2)}</h1>`;
          }
          if (line.startsWith('## ')) {
            return `<h2>${line.slice(3)}</h2>`;
          }
          if (line.trim() === '') {
            return '<br />';
          }
          return `<p>${line}</p>`;
        }).join('\n')}
    </div>
    <div class="footer">
        <p>Read the original article at: <a href="${window.location.href}">${window.location.href}</a></p>
    </div>
</body>
</html>
    `.trim();

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Simple content renderer with link support
  const renderContent = (content: string) => {
    // Helper to convert markdown links to anchor tags
    const parseLinks = (text: string) => {
      // Match [text](url) pattern
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts: { type: 'text' | 'link'; content: string; url?: string }[] = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(text)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
          parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
        }
        // Add the link
        parts.push({ type: 'link', content: match[1], url: match[2] });
        lastIndex = linkRegex.lastIndex;
      }

      // Add remaining text
      if (lastIndex < text.length) {
        parts.push({ type: 'text', content: text.slice(lastIndex) });
      }

      return parts.map((part, idx) => {
        if (part.type === 'link') {
          return (
            <a
              key={idx}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {part.content}
            </a>
          );
        }
        return <span key={idx}>{part.content}</span>;
      });
    };

    return content.split('\n').map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-4xl font-bold text-white mt-8 mb-4">{parseLinks(line.slice(2))}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-3xl font-bold text-white mt-8 mb-4">{parseLinks(line.slice(3))}</h2>;
      }
      if (line.trim() === '') {
        return <br key={i} />;
      }
      return <p key={i} className="text-white/70 mb-4 leading-relaxed">{parseLinks(line)}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-24">
        {/* Back link and Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Share and Download Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </Button>

            <div className="relative group">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
              >
                <Download className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Download</span>
              </Button>

              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-[#1a2b3b] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <button
                  onClick={handleDownloadHTML}
                  className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-white/10 transition-colors rounded-t-lg"
                >
                  Download as HTML
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-white/10 transition-colors rounded-b-lg"
                >
                  Download as Text
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-white/70 font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/50 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            {currentTime && (
              <span className="flex items-center gap-2 text-white/40">
                <Clock className="h-4 w-4" />
                Opened at {currentTime}
              </span>
            )}
          </div>
        </motion.header>

        {/* Article content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          {renderContent(post.content)}
        </motion.div>

        {/* Share at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              Did you find this article helpful? Share it with others!
            </p>
            <div className="flex gap-2">
              <Button
                onClick={handleShare}
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Link Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}

