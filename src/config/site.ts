export const siteConfig = {
  name: "Luiz Augusto Monteiro",
  title: "Desenvolvedor de software e suporte",
  tagline: "Construindo experiências digitais com código e criatividade.",
  bio: `Olá! Sou Luiz, Desenvolvedor de Software com experiência profissional no desenvolvimento, manutenção e evolução de aplicações Web e Mobile.

Atuo no ciclo completo de desenvolvimento de software, desde a análise de requisitos e definição de arquitetura até desenvolvimento, integração, deploy, manutenção e evolução das aplicações. Tenho experiência prática na construção de sistemas do zero, além de projetos desenvolvidos como freelancer para diferentes clientes.

Atualmente, trabalho no desenvolvimento e manutenção de sistemas Web e Mobile em ambiente profissional, participando da implementação de novas funcionalidades, correção de problemas, melhorias de performance e evolução contínua dos produtos.

Tenho interesse e experiência em áreas como:

• Desenvolvimento de aplicações Web e Mobile
• Desenvolvimento Full Stack
• Arquitetura e estruturação de sistemas
• APIs e integrações
• Banco de dados
• Manutenção e evolução de sistemas
• DevOps e processos de deploy
• Desenvolvimento de sistemas do zero
• Análise e resolução de problemas
• Boas práticas de desenvolvimento de software

Além da experiência profissional, venho aprimorando constantemente meus conhecimentos por meio de cursos de desenvolvimento de software na Rocketseat e, atualmente, estou cursando Análise e Desenvolvimento de Sistemas.

Busco uma oportunidade como Desenvolvedor de Software, onde possa aplicar minha experiência prática, contribuir para o desenvolvimento de soluções robustas e escaláveis e continuar evoluindo tecnicamente em um ambiente de engenharia de software.

Estou aberto a oportunidades como Desenvolvedor Web, Desenvolvedor Mobile, Desenvolvedor Full Stack e Desenvolvedor de Software.`,
  email: "luizlam72@gmail.com",
  avatarPath: "/me.jpeg",
  links: {
    github: "https://github.com/luizaugustom",
    linkedin: "https://linkedin.com/in/luiz-augusto-monteiro-528385292",
    whatsapp: "https://wa.me/5548992151944",
  },
  technologies: [
    { name: "TypeScript", category: "Linguagem" },
    { name: "JavaScript", category: "Linguagem" },
    { name: "React", category: "Front-end" },
    { name: "React Native", category: "Front-end" },
    { name: "Next.js", category: "Front-end" },
    { name: "Node.js", category: "Back-end" },
    { name: "Tailwind CSS", category: "Front-end" },
    { name: "PostgreSQL", category: "Banco de dados" },
    { name: "Git", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
    { name: "REST APIs", category: "Back-end" },
  ],
  education: [
    {
      title: "Desenvolvimento Web Full Stack (Node.js, React, React Native)",
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
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Faculdade Digital Descomplica",
      year: "Cursando",
      url: "https://faculdadedescomplica.com.br",
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
