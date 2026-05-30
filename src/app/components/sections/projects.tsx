import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "PathFinder",
    description:
      "A career discovery platform helping students and early-career professionals explore paths, understand required skills, and make informed growth decisions.",
    image: "/projects/pathfinder.jpeg",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    liveUrl: "https://pathfinder-sooty.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/PathFinder",
  },
  {
    title: "Xpense",
    description:
      "An AI-integrated expense tracker that helps users monitor spending, analyse patterns, and get smart suggestions for better financial decisions.",
    image: "/projects/xpense.png",
    tech: ["Next.js", "TypeScript", "AI Integration", "Tailwind CSS"],
    liveUrl: "https://xpense-one.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/Xpense-",
  },
  {
    title: "SpecWise",
    description:
      "A product comparison platform that streamlines research by comparing specs, delivering AI-powered recommendations, and connecting users with vendors.",
    image: "/projects/specwise.png",
    tech: ["Next.js", "PostgreSQL", "OpenAI", "TypeScript"],
    liveUrl: "https://specwise.vercel.app",
    githubUrl: "https://github.com/yourusername/SpecWise",
  },
  {
    title: "Footcom",
    description:
      "A football companion app for in-depth player comparisons, tactical team analysis, and live stats — keeping you connected to the beautiful game.",
    image: "/projects/footcom.png",
    tech: ["Next.js", "Football API", "D3.js", "TypeScript"],
    liveUrl: "https://footcom.vercel.app",
    githubUrl: "https://github.com/yourusername/Footcom",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-neutral-600 text-[11px] uppercase tracking-[0.3em] font-medium mb-4">
              Work
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-medium transition-colors group shrink-0"
          >
            View all
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white text-lg font-bold">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-neutral-400 border border-white/[0.07]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
