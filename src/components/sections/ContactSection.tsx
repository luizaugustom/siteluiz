"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

const links = [
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "✉" },
  { label: "GitHub", href: siteConfig.links.github, icon: "⌘" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: "in" },
  { label: "WhatsApp", href: siteConfig.links.whatsapp, icon: "💬" },
  ...(siteConfig.links.twitter
    ? [{ label: "Twitter", href: siteConfig.links.twitter, icon: "𝕏" }]
    : []),
];

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        Contact
      </h2>
      <p className="mb-8 text-[var(--foreground-muted)]">
        Get in touch — I&apos;m open to new opportunities and conversations.
      </p>
      <ul className="flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <motion.a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]/50 px-5 py-3 text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg" aria-hidden>
                {link.icon}
              </span>
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
