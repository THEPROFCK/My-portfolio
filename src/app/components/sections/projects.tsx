"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "PathFinder",
    description: "A career discovery platform designed to help students and early career professionals gain clarity by exploring career paths, understanding required skills, and making informed growth decisions.",
    image: "/projects/pathfinder.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI","Vibe coded"],
    liveUrl: "https://pathfinder-sooty.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/PathFinder",
    featured: false,
  },
  {
    title: "Xpense",
    description: "An AI integrated expense tracker built to help users monitor daily expenses, analyze spending patterns, and receive smart suggestions for better financial decisions.",
    image: "/projects/xpense.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
    liveUrl: "https://xpense-one.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/Xpense-",
    featured: false,
  },
  {
    title: "SpecWise",
    description: "A comprehensive comparison platform that streamlines product research by comparing specifications, delivering AI powered recommendations, and connecting users with trusted vendors all in one intuitive interface.",
    image: "/projects/specwise.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "OpenAI"],
    liveUrl: "https://specwise.vercel.app",
    githubUrl: "https://github.com/yourusername/SpecWise",
    featured: false,
  },
  {
    title: "Footcom",
    description: "Your ultimate football companion for in depth player comparisons, tactical team analysis, and live stats tracking keeping you connected to the beautiful game with real time news and performance insights.",
    image: "/projects/footcom.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Football API", "D3.js"],
    liveUrl: "https://footcom.vercel.app",
    githubUrl: "https://github.com/yourusername/Footcom",
    featured: false,
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 transition-all duration-300"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-xs font-bold text-black">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Project image */}
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-slate-500"
        >
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index < 2}
          />
          {/* Placeholder for image - replace with actual Image component when images are available */}
          <div className="text-sm font-medium">Project Preview</div>
        </motion.div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Hover overlay with buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            <Github className="h-4 w-4" />
            Code
          </motion.a>
        </motion.div>
      </div>

      {/* Project info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-slate-300 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
        </div>
        <p className="text-base text-white/60 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-white/70 font-medium border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Subtle atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-slate-400/6 blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-slate-500/6 blur-[160px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <div className="max-w-5xl mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider"
            >
              Featured Work
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mt-4 mb-8 text-slate-100"
            >
              Projects I've{" "}
              <span className="text-slate-300">built</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light"
            >
              A collection of projects that showcase my expertise in full-stack development, 
              design systems, and creating exceptional user experiences.
            </motion.p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* View all projects link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 rounded-full text-white/80 hover:text-white hover:border-white/30 transition-all group"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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