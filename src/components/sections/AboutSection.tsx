"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        About me
      </h2>
      <div className="space-y-6 text-[var(--foreground-muted)] leading-relaxed">
        {siteConfig.bio.split("\n").map((paragraph, i) => (
          <p key={i}>{paragraph.trim()}</p>
        ))}
      </div>
    </AnimatedSection>
  );
}
