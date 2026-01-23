"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Sparkles, ArrowLeft, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const projects = [
   {
    title: "Footcom",
    description:
      "Your ultimate football companion for in depth player comparisons, tactical team analysis, and live stats tracking keeping you connected to the beautiful game with real time news and performance insights.",
    image: "/projects/footcom.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Football API", "D3.js"],
    liveUrl: "https://footcom.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/Footcom",
    featured: false,
    category: "Web App",
    year: "2025",
  },
  {
    title: "Xpense",
    description:
      "An AI integrated expense tracker built to help users monitor daily expenses, analyze spending patterns, and receive smart suggestions for better financial decisions.",
    image: "/projects/xpense.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
    liveUrl: "https://xpense-one.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/Xpense-",
    featured: false,
    category: "Web App",
    year: "2025",
  },
  {
    title: "SpecWise",
    description:
      "A comprehensive comparison platform that streamlines product research by comparing specifications, delivering AI powered recommendations, and connecting users with trusted vendors all in one intuitive interface.",
    image: "/projects/specwise.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "OpenAI"],
    liveUrl: "https://specwise.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/SpecWise",
    featured: false,
    category: "Web App",
    year: "2025",
  },
  {
    title: "Student Care",
    description:
      "A comprehensive campus health management system that connects students with healthcare services, enabling appointment scheduling, medication tracking, health record access, and real time doctor availability all in one centralized platform.",
    image: "/projects/studentcare.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    liveUrl: "https://studentcare.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/StudentCare",
    featured: true,
    category: "Dashboard",
    year: "2024",
  },
  {
    title: "PathFinder",
    description:
      "A career discovery platform designed to help students and early career professionals gain clarity by exploring career paths, understanding required skills, and making informed growth decisions.",
    image: "/projects/pathfinder.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI","Vibe coded"],
    liveUrl: "https://pathfinder-sooty.vercel.app",
    githubUrl: "https://github.com/THEPROFCK/PathFinder",
    featured: false,
    category: "Web App",
    year: "2026",
  },
   {
    title: "Drum machine",
    description:
      "A web-based drum machine that allows users to create and share beats using a variety of samples and effects.",
    image: "/projects/drum-machine.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://drum-machine-delta-six.vercel.app/",
    githubUrl: "https://github.com/THEPROFCK/Drum-Machine",
    featured: false,
    category: "Web App",
    year: "2026",
  },
  {
    title: "Timestamp microservice",
    description:
      "A microservice that provides timestamps for various events and actions within the application.",
    image: "/projects/timestamp-microservice.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://timestamp-microservice-sage-iota.vercel.app/",
    githubUrl: "https://github.com/THEPROFCK/timestamp-microservice",
    featured: false,
    category: "Templates",
    year: "2026",
  },
  
];

const categories = ["All", "Web App", "Dashboard", "Websites", "AI Tool", "Templates"];

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
      transition={{ delay: index * 0.05, duration: 0.5 }}
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
          {/* Placeholder for image */}
          <Image
            src={projects[index].image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index < 2}
          />
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
            backgroundSize: "50px 50px"
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
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-2 py-1 rounded-lg bg-white/10 text-white/50 font-medium">
            {project.year}
          </span>
          <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-slate-300 transition-colors mb-2">
          {project.title}
        </h3>
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

export default function AllProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
                href="/#projects"
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
                All Projects
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
              Every
              <br />
              Project
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed font-light mb-12"
            >
              From design systems to full-stack applications, here's a comprehensive collection of work that showcases my journey as a developer.
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-3 overflow-x-auto pb-4"
            >
              <Filter className="h-5 w-5 text-white/40 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
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

      {/* Projects Grid */}
      <section ref={ref} className="relative pb-24 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-xl text-white/40">No projects found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}