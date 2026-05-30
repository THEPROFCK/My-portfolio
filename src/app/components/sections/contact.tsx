"use client";

import React, { useState } from "react";
import { Github, Linkedin, Instagram, Mail, MapPin, Send } from "lucide-react";

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

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.details || data.error || "Failed");

      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setFormStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-neutral-600 text-[11px] uppercase tracking-[0.3em] font-medium mb-8">
          Contact
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-xl">
            Let&apos;s build something together.
          </h2>
          <p className="text-neutral-500 text-base max-w-sm leading-relaxed">
            Have a project in mind or just want to talk? Drop a message — I
            reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — info */}
          <div className="flex flex-col gap-5">
            <a
              href="mailto:caulcrickp@gmail.com"
              className="flex items-center gap-4 p-5 bg-[#0d0d0d] border border-white/[0.08] rounded-xl hover:border-white/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <p className="text-neutral-600 text-xs mb-0.5">Email</p>
                <p className="text-white text-sm font-medium group-hover:text-neutral-300 transition-colors">
                  caulcrickp@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-[#0d0d0d] border border-white/[0.08] rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <p className="text-neutral-600 text-xs mb-0.5">Location</p>
                <p className="text-white text-sm font-medium">Lagos, Nigeria</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center bg-[#0d0d0d] border border-white/[0.08] rounded-xl text-neutral-500 hover:text-white hover:border-white/20 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Message sent!
                </h3>
                <p className="text-neutral-500 text-sm">
                  I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-500 text-xs font-medium">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-500 text-xs font-medium">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-500 text-xs font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                {formStatus === "error" && (
                  <p className="text-red-400 text-sm">
                    {errorMessage || "Something went wrong. Please try again."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
