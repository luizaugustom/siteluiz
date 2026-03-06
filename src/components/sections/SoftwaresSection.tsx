"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SoftwaresSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <AnimatedSection
      id="softwares"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        Softwares em Produção
      </h2>
      <motion.div
        ref={listRef}
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {siteConfig.softwares.map((software) => (
          <motion.a
            key={software.name}
            href={software.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
          >
            <motion.div
              className={`group relative h-full rounded-xl border transition-all hover:shadow-lg ${
                software.featured
                  ? "border-[var(--accent)] bg-gradient-to-br from-[var(--background-elevated)]/80 to-[var(--accent)]/10 shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)] hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)]"
                  : "border-[var(--border)] bg-[var(--background-elevated)]/50 hover:border-[var(--accent)]/40 hover:shadow-[var(--accent-glow)]"
              } p-6`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {software.featured && (
                <div className="absolute -top-3 left-6 bg-[var(--accent)] px-3 py-1 rounded-full text-xs font-semibold text-[var(--background)] shadow-lg">
                  Principal
                </div>
              )}
              <h3 className="mb-2 text-xl font-bold text-[var(--foreground)]">
                {software.name}
              </h3>
              <p className="mb-4 text-sm text-[var(--foreground-muted)]">
                {software.description}
              </p>
              
              {software.username !== undefined && software.password !== undefined && (
                <div className="mb-4 space-y-1 bg-[var(--background)]/50 rounded p-3">
                  <p className="text-xs text-[var(--foreground-muted)]">
                    <span className="font-semibold">Email:</span> {software.username}
                  </p>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    <span className="font-semibold">Senha:</span> {software.password}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] group-hover:gap-3 transition-all">
                Acessar
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
