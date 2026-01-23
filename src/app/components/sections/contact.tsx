"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/THEPROFCK", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/caulcrick-peter-a65a672b8/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/theprof._ck/", label: "Instagram" },
  {
    icon: (props: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className || "h-6 w-6 text-white/70"}
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/THEPROFCK",
    label: "X",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

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
          company: formData.get("company"), // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.details || data.error || "Failed");
      }

      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        e.currentTarget.reset();
      }, 3000);
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <span className="text-slate-400 text-xl">Get in Touch</span>
            <h2 className="text-5xl sm:text-6xl font-black text-white mt-4">
              Let's work together
            </h2>
            <p className="text-white/60 text-xl mt-6 max-w-3xl">
              Have a project or opportunity in mind? Drop a message and let’s
              build something meaningful.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <div className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <Mail className="text-white" />
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-white font-semibold">
                    caulcrickp@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <MapPin className="text-white" />
                <div>
                  <p className="text-white/50 text-sm">Location</p>
                  <p className="text-white font-semibold">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10"
                  >
                    <link.icon className="h-6 w-6 text-white/70" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              {formStatus === "success" ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-white">
                    Message sent 🚀
                  </h3>
                  <p className="text-white/60 mt-2">
                    I’ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <input
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white resize-none"
                  />

                  {formStatus === "error" && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again.
                      </p>
                      {errorMessage && (
                        <p className="text-red-300/70 text-xs mt-1">
                          {errorMessage}
                        </p>
                      )}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-white/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
