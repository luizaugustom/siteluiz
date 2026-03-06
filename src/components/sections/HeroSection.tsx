"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useReducedMotion } from "@/lib/useReducedMotion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const containerReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const itemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
      {/* Subtle gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent"
        aria-hidden
      />

      <motion.div
        variants={reducedMotion ? containerReduced : container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16"
      >
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            variants={reducedMotion ? itemReduced : item}
            className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            variants={reducedMotion ? itemReduced : item}
            className="mt-2 text-xl text-[var(--accent)] sm:text-2xl"
          >
            {siteConfig.title}
          </motion.p>
          <motion.p
            variants={reducedMotion ? itemReduced : item}
            className="mt-4 max-w-lg text-[var(--foreground-muted)]"
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.div
            variants={reducedMotion ? itemReduced : item}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Link
              href="#projects"
              className="rounded-lg bg-[var(--accent)] px-6 py-3 font-medium text-white shadow-lg shadow-[var(--accent-glow)] transition-all hover:bg-[var(--accent-hover)] hover:shadow-[var(--accent)]/30"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={reducedMotion ? itemReduced : item}
          className="relative h-64 w-64 shrink-0 sm:h-72 sm:w-72 md:h-80 md:w-80"
        >
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[var(--accent)]/30 shadow-2xl shadow-[var(--accent-glow)]">
            <Image
              src={siteConfig.avatarPath}
              alt={`${siteConfig.name} - ${siteConfig.title}`}
              fill
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
