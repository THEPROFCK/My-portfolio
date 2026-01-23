"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Code2,
    title: "Engineering Mindset",
    description:
      "Building robust, scalable systems with clean architecture and best practices.",
  },
  {
    icon: Palette,
    title: "Design Thinking",
    description:
      "Creating intuitive interfaces that prioritize user experience and accessibility.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Turning complex challenges into elegant, maintainable solutions.",
  },
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Express.js",
  "MongoDB",
  "Django",
  "TypeScript",
  "Node.js",
  "Python",
  "UI/UX Design",
  "System Architecture",
  "Cloud Services (AWS)",
  "Figma",
  "REST APIs",
  "PostgreSQL",
  "Notion",
  "VS Code",
  "Postman",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Subtle atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-slate-500/5 blur-[220px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="max-w-5xl mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mt-4 mb-8 text-slate-100"
            >
              Bridging the gap between{" "}
              <span className="text-slate-300">code and design</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light"
            >
              With a background in both software development and UI/UX design, I
              bring over 3 years of experience crafting digital products that are
              intuitive, scalable, and visually refined. I care deeply about how
              things work and how they feel to use.
            </motion.p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/8"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-slate-200" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-base text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Core Skills & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.03 }}
                  className="px-4 py-2 bg-white/10 border border-white/15 rounded-lg text-sm font-medium text-white/70"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-14"
          >
            <Link
              href="/About"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 rounded-full text-white/80 hover:text-white hover:border-white/30 transition-all"
            >
              Read More About Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle grain texture */}
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