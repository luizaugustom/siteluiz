export const siteConfig = {
  name: "Your Name",
  title: "Software Developer",
  tagline: "Building digital experiences with code and creativity.",
  bio: `I'm a software developer passionate about creating efficient, scalable solutions. 
    With experience across the full stack, I focus on clean architecture and great user experiences. 
    I enjoy learning new technologies and contributing to open source.`,
  email: "your.email@example.com",
  avatarPath: "/avatar.svg",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    whatsapp: "https://wa.me/5511999999999",
    twitter: "https://twitter.com/yourhandle",
  },
  technologies: [
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "React", category: "Front-end" },
    { name: "Next.js", category: "Front-end" },
    { name: "Node.js", category: "Back-end" },
    { name: "Tailwind CSS", category: "Front-end" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Git", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
    { name: "REST APIs", category: "Back-end" },
  ],
  education: [
    {
      title: "Bachelor in Computer Science",
      institution: "University Name",
      year: "2020 - 2024",
      url: undefined,
    },
    {
      title: "Full Stack Web Development",
      institution: "Online Platform",
      year: "2023",
      url: "https://example.com",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
