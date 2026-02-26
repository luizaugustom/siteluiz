import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechSection } from "@/components/sections/TechSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getUserRepos } from "@/lib/github";

export default async function Home() {
  const username =
    process.env.GITHUB_USERNAME ||
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
    "";
  const repos = username ? await getUserRepos(username).catch(() => []) : [];

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechSection />
      <EducationSection />
      <ProjectsSection repos={repos} />
      <ContactSection />
    </main>
  );
}
