export const siteConfig = {
  name: "Luiz Augusto Monteiro",
  title: "Software Developer",
  tagline: "Building digital experiences with code and creativity.",
  bio: `I am a software developer focused on building modern, efficient, and scalable solutions. With solid expertise in React and Node.js, and experience with Python, I work across the entire development cycle, always prioritizing Clean Architecture and delivering exceptional user experiences.

Currently, at Laev Software Development, I am responsible for the evolutionary maintenance and creation of new functionalities in complex corporate systems. My daily work involves transforming business requirements into robust and sustainable code.

I am driven by continuous learning and contributing to open-source projects. My portfolio includes personal projects from conception to deployment, demonstrating my ability to take ideas from concept to production.   I enjoy learning new technologies and contributing to open source.`,
  email: "luizlam72@gmail.com",
  avatarPath: "/me.jpeg",
  links: {
    github: "https://github.com/luizaugustom",
    linkedin: "https://linkedin.com/in/luiz-augusto-monteiro-528385292",
    whatsapp: "https://wa.me/5548992151944",
  },
  technologies: [
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "React", category: "Front-end" },
    { name: "React Native", category: "Front-end" },
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
      title: "Full Stack Web Development (Node.js, React, React Native)",
      institution: "Faculdade de Tecnologia Rocketseat",
      year: "2023 - 2026",
      url: "https://rocketseat.com.br",
    },
    {
      title: "Engenharia de Prompt",
      institution: "Faculdade de Tecnologia Rocketseat",
      year: "2025",
      url: "https://rocketseat.com.br",
    },
    {
      title: "N8N - Introdução a Automação",
      institution: "Faculdade de Tecnologia Rocketseat",
      year: "2025",
      url: "https://rocketseat.com.br",
    },
    
  ],
  softwares: [
    {
      name: "MontShop",
      url: "https://montshop.app",
      description: "Plataforma de e-commerce e gestão de vendas para lojas físicas e online",
      username: "empresa@montshop.com",
      password: "123456",
      featured: true,
    },
    {
      name: "Bom Lar",
      url: "https://bomlar.vercel.app",
      description: "Plataforma de busca e anúncio de imóveis",
      username: undefined,
      password: undefined,
      featured: false,
    },
    {
      name: "Sistema MontShop",
      url: "https://sistemamontshop.com",
      description: "Sistema integrado de gestão empresarial para comércios",
      username: undefined,
      password: undefined,
      featured: false,
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
