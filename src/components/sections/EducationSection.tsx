"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

export function EducationSection() {
  return (
    <AnimatedSection
      id="education"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        Education
      </h2>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {siteConfig.education.map((edu) => (
          <motion.li
            key={`${edu.title}-${edu.institution}`}
            variants={item}
            className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]/50 p-5"
          >
            {edu.url ? (
              <Link
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                  {edu.title}
                </h3>
                <p className="mt-1 text-[var(--foreground-muted)]">
                  {edu.institution}
                </p>
                <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                  {edu.year}
                </p>
              </Link>
            ) : (
              <>
                <h3 className="font-semibold text-[var(--foreground)]">
                  {edu.title}
                </h3>
                <p className="mt-1 text-[var(--foreground-muted)]">
                  {edu.institution}
                </p>
                <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                  {edu.year}
                </p>
              </>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </AnimatedSection>
  );
}
