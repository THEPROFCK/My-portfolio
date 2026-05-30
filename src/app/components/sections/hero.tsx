"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

/* -------------------------------- Floating Paths -------------------------------- */

const PATH_COUNT = 12;
const pathDurations = Array.from({ length: PATH_COUNT }, (_, i) => 20 + (i * 7) % 10);

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: PATH_COUNT }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 15 * position} -${189 + i * 18}
        C-${380 - i * 15 * position} -${189 + i * 18}
        -${312 - i * 15 * position} ${216 - i * 18}
        ${152 - i * 15 * position} ${343 - i * 18}
        C${616 - i * 15 * position} ${470 - i * 18}
        ${684 - i * 15 * position} ${875 - i * 18}
        ${684 - i * 15 * position} ${875 - i * 18}`,
    width: 0.5 + i * 0.08,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgb(148, 163, 184)"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.03}
            fill="none"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{
              duration: pathDurations[path.id],
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* -------------------------------- Button -------------------------------- */

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
  asChild?: boolean;
  [key: string]: any;
}

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  asChild,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    default:
      "bg-white text-black hover:bg-white/90 focus:ring-white shadow-lg shadow-white/10",
    outline:
      "border-2 border-white/15 text-white hover:bg-white/5 focus:ring-white backdrop-blur-sm",
  };

  const sizes: Record<string, string> = {
    default: "px-4 py-2",
    lg: "px-8 py-4 text-lg",
  };

  if (asChild) {
    return (
      <span
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/* -------------------------------- Hero -------------------------------- */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Floating paths */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Cinematic lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-slate-400/8 blur-[160px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-slate-500/8 blur-[180px]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-left"
        >
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-2"
          >
            <span className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider">
              Hey, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-black uppercase tracking-tighter mb-1 text-slate-100 leading-[0.85]"
            style={{
              fontFamily:
                "'Inter', 'SF Pro Display', system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            Peter
            <br />
            Caulcrick
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-10 uppercase tracking-wide"
          >
            Software Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-xl md:text-2xl text-white/70 max-w-4xl mb-8 sm:mb-12 leading-relaxed font-light"
          >
            I build clean, scalable software with intuitive user experiences
            turning complex problems into solutions people love.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
          >
            <Button size="lg" className="group w-full sm:w-auto justify-center">
              <a href="#projects" className="flex items-center">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto justify-center"
            >
              <a href="/blog" className="flex items-center text-white">
                <FileText className="mr-2 h-5 w-5" />
                Read Blog
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-10 left-8 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
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
  );
}