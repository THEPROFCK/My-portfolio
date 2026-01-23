"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Resume", href: "/resume" },
    { name: "Newsletter", href: "/newsletter" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/THEPROFCK", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/caulcrick-peter-a65a672b8/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/theprof._ck/", label: "Instagram" },
  {
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" className={props.className || "h-5 w-5 text-white/70"} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/THEPROFCK",
    label: "X"
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black border-t border-white/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent"
                >
                  PC
                </motion.div>
              </Link>
              <p className="text-white/60 text-base mb-6 max-w-md leading-relaxed">
                A software developer and designer focused on creating exceptional digital experiences. 
                Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5 text-white/70" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Navigation */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    Navigation
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.navigation.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-blue-400 transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-blue-400 transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="col-span-2 md:col-span-1">
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    Stay Updated
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Get the latest articles and updates delivered to your inbox.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-white/50 text-sm text-center md:text-left">
              <p>© {new Date().getFullYear()} Peter Caulcrick. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-white/70" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}