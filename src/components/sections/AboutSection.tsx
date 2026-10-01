"use client";

import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

// Renderiza a bio reconhecendo listas: linhas iniciadas com "•"
// viram itens de um <ul>; demais linhas não vazias viram <p>.
function renderBio(bio: string): ReactNode[] {
  const lines = bio.split("\n");
  const nodes: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("•")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("•")) {
        items.push(lines[i].trim().slice(1).trim());
        i++;
      }
      nodes.push(
        <ul key={key++} className="list-disc space-y-2 pl-6">
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>,
      );
      continue;
    }

    nodes.push(<p key={key++}>{line}</p>);
    i++;
  }

  return nodes;
}

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        Sobre mim
      </h2>
      <div className="space-y-6 text-[var(--foreground-muted)] leading-relaxed">
        {renderBio(siteConfig.bio)}
      </div>
    </AnimatedSection>
  );
}
