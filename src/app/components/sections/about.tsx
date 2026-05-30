import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "Django", "PostgreSQL", "MongoDB", "Tailwind CSS",
  "REST APIs", "AWS", "Figma", "UI/UX Design",
];

export default function About() {
  return (
    <section id="about" className="bg-[#080808] py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-neutral-600 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
          About
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-16 max-w-3xl">
          Bridging the gap between code and design.
        </h2>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Bio */}
          <div className="space-y-5">
            <p className="text-neutral-400 text-lg leading-relaxed">
              I&apos;m a software developer with a background in both
              engineering and UI/UX design. I care deeply about how products
              work and how they feel to use.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Over the past 3+ years I&apos;ve built everything from
              AI-powered career platforms to real-time financial dashboards —
              always with a focus on clean architecture and intuitive
              experience.
            </p>
            <Link
              href="/About"
              className="inline-flex items-center gap-2 text-white text-sm font-medium mt-2 group"
            >
              <span className="border-b border-white/30 group-hover:border-white transition-colors pb-px">
                Read more about me
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Skills */}
          <div>
            <p className="text-neutral-600 text-[11px] uppercase tracking-[0.25em] font-medium mb-5">
              Stack &amp; Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-neutral-300 border border-white/10 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {[
            { value: "3+", label: "Years experience" },
            { value: "10+", label: "Projects shipped" },
            { value: "5+", label: "Happy clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">
                {stat.value}
              </p>
              <p className="text-neutral-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
