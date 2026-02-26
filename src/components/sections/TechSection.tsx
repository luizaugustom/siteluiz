"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function TechSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <AnimatedSection
      id="technologies"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        Technologies
      </h2>
      <motion.ul
        ref={listRef}
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {siteConfig.technologies.map((tech) => (
          <motion.li key={tech.name} variants={cardVariants}>
            <motion.div
              className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]/50 p-4 transition-colors hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent-glow)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="font-medium text-[var(--foreground)]">{tech.name}</p>
              <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                {tech.category}
              </p>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatedSection>
  );
}
