export const siteConfig = {
  name: "Luiz Augusto Monteiro",
  title: "Software developer and support",
  tagline: "Building digital experiences with code and creativity.",
  bio: `Atualmente, atuo na área de Tecnologia da Informação, onde sou responsável pelo suporte a clientes e pela manutenção de softwares. Meu foco é garantir que a tecnologia seja uma facilitadora, resolvendo problemas complexos com agilidade e garantindo a satisfação de quem utiliza nossas soluções no dia a dia.
Minha bagagem é híbrida: trago comigo anos de experiência no setor comercial, resiliência e uma facilidade natural em entender as necessidades do público — habilidades que hoje aplico para traduzir demandas técnicas em resultados práticos.
O que busco e entrego:
Resolução de Problemas: Diagnóstico e manutenção de sistemas com foco em melhoria contínua.
Foco no Cliente: Atendimento consultivo e suporte técnico ágil.
Aprendizado Contínuo: Investimento constante em novos frameworks e metodologias para acompanhar a inovação do setor.`,
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
