import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-24 pb-10 sm:pb-14">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-neutral-600 uppercase tracking-[0.25em] font-medium">
          Portfolio · 2025
        </span>
        <span className="text-[11px] text-neutral-600 uppercase tracking-[0.25em] font-medium hidden sm:block">
          Lagos, Nigeria
        </span>
      </div>

      {/* Main content — always visible, no opacity animations */}
      <div className="mt-auto">
        {/* Role label */}
        <p className="text-neutral-500 text-xs sm:text-sm uppercase tracking-[0.3em] font-medium mb-5 sm:mb-7">
          Software Developer
        </p>

        {/* Name */}
        <h1
          className="font-black uppercase leading-[0.82] tracking-tighter text-white mb-8 sm:mb-10"
          style={{ fontSize: "clamp(2rem, 13vw, 14rem)" }}
        >
          Peter
          <br />
          Caulcrick
        </h1>

        {/* Divider + bottom row */}
        <div className="border-t border-white/10 pt-7 sm:pt-8 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10 lg:gap-16">
          <p className="text-neutral-400 text-base sm:text-lg max-w-md leading-relaxed">
            I build clean, scalable software — turning complex problems into
            experiences people actually love to use.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:ml-auto shrink-0">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
