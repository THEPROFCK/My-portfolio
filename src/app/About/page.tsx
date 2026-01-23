"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Code2, Sparkles, BookOpen, Users, Target, GraduationCap, Rocket, MessageCircle, ArrowLeft, Zap, Lightbulb, Globe } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "I build for people, not just users. Understanding human needs shapes every decision I make.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that others can understand and build upon.",
  },
  {
    icon: Sparkles,
    title: "Intentional Design",
    description: "Every pixel has purpose. Clarity and simplicity guide my design process.",
  },
  {
    icon: BookOpen,
    title: "Continuous Growth",
    description: "Learning never stops. I embrace challenges as opportunities to expand my skills.",
  },
  {
    icon: Users,
    title: "Lifting Others",
    description: "Sharing knowledge, mentoring peers, and building together makes us all better.",
  },
  {
    icon: Target,
    title: "Impact Driven",
    description: "I focus on outcomes that matter—solving real problems for real people.",
  },
];

const journeyMilestones = [
  {
    icon: Lightbulb,
    title: "The Spark",
    description: "My journey started with curiosity—tinkering with websites and wondering how digital products came to life. That curiosity became obsession.",
    year: "2019"
  },
  {
    icon: GraduationCap,
    title: "Learning Phase",
    description: "Currently pursuing my degree while building real projects. Every course, tutorial, and late-night debugging session adds to my foundation.",
    year: "2020-2024"
  },
  {
    icon: Rocket,
    title: "What's Next",
    description: "I'm seeking internships and freelance opportunities where I can contribute meaningfully, learn from experienced teams, and build products that matter.",
    year: "2025+"
  },
];

const stats = [
  { label: "Years of Experience", value: "5+", icon: Zap },
  { label: "Projects Built", value: "50+", icon: Rocket },
  { label: "Technologies Mastered", value: "15+", icon: Code2 },
  { label: "Countries Reached", value: "10+", icon: Globe },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const journeyRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Cinematic lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-slate-400/8 blur-[160px]" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-slate-500/8 blur-[180px]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
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
                About Me
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-black uppercase tracking-tighter mb-6 text-slate-100 leading-[0.85]"
              style={{
                fontFamily: "'Inter', 'SF Pro Display', system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.04em",
                lineHeight: "1",
              }}
            >
              Hey, I'm
              <br />
              Peter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed font-light"
            >
              I build solutions through thoughtful design and engineering. More than software I build solutions.
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

      {/* Story Section */}
      <section ref={storyRef} className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-slate-500/5 blur-[220px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-20">
              <motion.span
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider"
              >
                My Story
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mt-4 mb-8 text-slate-100"
              >
                The Full Picture
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 space-y-6 text-base sm:text-lg text-white/70 leading-relaxed"
            >
              <p>
                I'm a <span className="text-white font-semibold">Software Developer & Designer</span> who enjoys turning ideas into digital products people genuinely enjoy using. But titles only explain what I do not why I do it.
              </p>
              <p>
                What really drives me is the space where thoughtful design meets solid engineering. I care about building products that feel intentional  not just functional. The kind that anticipate real needs, remove unnecessary friction, and respect the people using them.
              </p>
              <p>
                I'm currently a student, balancing school with real world projects. Living in both worlds has shaped how I work. It's taught me discipline  how to manage my time, learn quickly, and still ship meaningful work even when resources are limited. <span className="text-slate-300 font-semibold">Curiosity pushes me forward, and consistency keeps me grounded.</span>
              </p>
              <p className="text-white font-medium">
                Beyond building things, I care deeply about growth  mine and the people around me. I enjoy sharing what I learn, supporting others, and contributing wherever I can. I'm not trying to impress anyone. I'm here to learn, to collaborate, and to build products that genuinely help people in real ways.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-slate-400/6 blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-20">
              <motion.span
                initial={{ opacity: 0 }}
                animate={valuesInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider"
              >
                What I Stand For
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mt-4 mb-8 text-slate-100"
              >
                Values That Guide Me
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 space-y-6 text-base sm:text-lg text-white/70 leading-relaxed"
            >
              <p>
                <span className="text-white font-semibold block mb-2">Empathy First</span>
                Empathy drives everything I build. Before writing a single line of code, I always ask myself who I'm building for and what problem they're trying to solve. Technology should serve people, not the other way around. When I design interfaces, I think about real users  someone rushing through a busy day, someone new to technology, or accessibility needs that often get overlooked. Every decision, from button placement to color choice, starts with understanding the human on the other side of the screen.
              </p>

              <p>
                <span className="text-slate-300 font-semibold block mb-2">Clean Code Is a Form of Respect</span>
                Empathy doesn't stop at the interface it extends to the codebase. I care deeply about writing clean, readable, and maintainable code. Not to show off clever tricks, but to make life easier for future me and for anyone else who works on the project. Thoughtful structure, clear naming, and modular architecture help systems scale and remain understandable over time. To me, code is communication, and I take that responsibility seriously.
              </p>

              <p>
                <span className="text-slate-300 font-semibold block mb-2">Design Is Problem-Solving</span>
                Design isn't decoration. It's problem-solving made visual. Every pixel should have a reason to exist. I've learned that the best designs often feel invisible they guide users so naturally that the interface fades away, leaving only the experience. Simplicity is hard. It requires restraint, iteration, and the willingness to remove anything that doesn't serve the core purpose.
              </p>

              <p>
                <span className="text-white font-semibold block mb-2">Growth as a Daily Practice</span>
                I'm still learning and I always will be. Growth isn't a destination; it's a habit. Some weeks I'm deep into a new framework, other times I'm studying design principles or user psychology. I learn by building, by breaking things, and by fixing them again. I seek feedback even when it's uncomfortable, because that's where real progress happens.
              </p>

              <p>
                <span className="text-slate-300 font-semibold block mb-2">Community Over Competition</span>
                Along the way, I've learned that growth accelerates in community. The best learning happens when knowledge is shared. When I figure something out, I pass it on through documentation, mentoring, or simply helping others find their way. I benefited from open resources and generous people early on, and paying that forward feels natural.
              </p>

              <p className="text-white font-medium">
                <span className="text-slate-300 font-semibold block mb-2">Impact as the North Star</span>
                Ultimately, I measure success by impact. Not by impressive tech stacks or vanity metrics, but by real outcomes for real people. Did this feature save someone time? Did it reduce frustration? Did it solve an actual problem? If the answer is no, the work isn't finished. Technology exists to improve lives that's the north star that guides everything I build.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section ref={journeyRef} className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-500/6 blur-[160px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-20">
              <motion.span
                initial={{ opacity: 0 }}
                animate={journeyInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-slate-400 font-normal uppercase tracking-wider"
              >
                My Journey
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mt-4 mb-8 text-slate-100"
              >
                The Path So Far
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={journeyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 space-y-8 text-base sm:text-lg text-white/70 leading-relaxed"
            >
              <p>
                <span className="text-white font-semibold block mb-2 text-xl">Where It Began</span>
                The first time I saw code, I thought my sister was doing magic. I didn't understand the symbols on her screen, but I was fascinated by the idea that someone could build things with a computer. When she told me it was called programming, something clicked. I didn't have a plan just curiosity and the desire to create something from nothing.
              </p>

              <p>
                <span className="text-slate-300 font-semibold block mb-2 text-xl">Learning the Hard Way</span>
                I didn't have my own laptop at first, so I learned by borrowing hers whenever I could. Progress was slow and frustrating. But small wins kept me going especially the first time I built a simple website and watched an animation finally work. That moment taught me that the "magic" was actually logic, patience, and practice.
              </p>

              <p>
                <span className="text-slate-300 font-semibold block mb-2 text-xl">From Curiosity to Impact</span>
                The turning point came when I built a simple booking system for a small business. When I saw how much time it saved them, I realized software wasn't just about code. It was about solving real problems for real people. Each project since has sharpened my ability to listen, ask better questions, and design with people in mind.
              </p>

              <p>
                <span className="text-white font-semibold block mb-2 text-xl">Where I Am Now</span>
                Today, I'm a student balancing academics with real-world projects. It's demanding, but it has taught me discipline how to prioritize, manage my energy, and ship meaningful work even with limited time. More importantly, I've learned how to learn: how to break down complex problems and find solutions independently.
              </p>

              <p>
                <span className="text-slate-300 font-semibold block mb-2 text-xl">The Horizon</span>
                I'm not chasing titles or hype. I'm looking for environments where craft is valued and building things that genuinely help people is the goal. Every expert was once a beginner who refused to give up. I'm still in the early chapters of my story, but I'm writing it deliberately, one project at a time.
              </p>

              <div className="pt-6 border-t border-white/10">
                <p className="text-white font-medium italic">
                  This is only the beginning but it's a beginning I'm proud of.
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={journeyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-12 text-center"
            >
              <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-white">
                Let's Connect
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                Whether you're looking for a collaborator, have advice to share, or just want to 
                talk about building great products I'd love to hear from you.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 rounded-full text-white/80 hover:text-white hover:border-white/30 transition-all"
              > 
                Start a Conversation
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}