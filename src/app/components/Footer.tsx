import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { name: "About", href: "/About" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/THEPROFCK", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/caulcrick-peter-a65a672b8/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/theprof._ck/",
    label: "Instagram",
  },
  {
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/THEPROFCK",
    label: "X",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.07] px-6 sm:px-10 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent w-fit"
          >
            PC
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-500 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-neutral-500 hover:text-white hover:border-white/20 transition-colors"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.07] mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Peter Caulcrick
          </p>
          <p className="text-neutral-700 text-sm">
            Designed &amp; built by Peter
          </p>
        </div>
      </div>
    </footer>
  );
}
