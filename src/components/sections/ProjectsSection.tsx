"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { GitHubRepo } from "@/lib/github";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type ProjectsSectionProps = {
  repos: GitHubRepo[];
};

export function ProjectsSection({ repos }: ProjectsSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        Projects
      </h2>
      {repos.length === 0 ? (
        <p className="text-[var(--foreground-muted)]">
          Configure <code className="rounded bg-[var(--background-elevated)] px-1.5 py-0.5 text-sm">NEXT_PUBLIC_GITHUB_USERNAME</code> in .env.local to load your GitHub repositories.
        </p>
      ) : (
        <motion.ul
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {repos.map((repo) => (
            <motion.li key={repo.id} variants={card}>
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]/50 p-5 transition-colors hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent-glow)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-semibold text-[var(--foreground)]">
                  {repo.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--foreground-muted)]">
                  {repo.description || "No description"}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--foreground-muted)]">
                  {repo.language && (
                    <span className="rounded bg-[var(--background)] px-2 py-1">
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span>★ {repo.stargazers_count}</span>
                  )}
                </div>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  );
}
