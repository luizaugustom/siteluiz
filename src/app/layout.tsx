import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { CircuitBackground } from "@/components/ui/CircuitBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Augusto | Portfólio",
  description:
    "Portfólio com habilidades, projetos e experiência em desenvolvimento de software. Feito com Next.js.",
  openGraph: {
    title: "Luiz Augusto | Portfólio",
    description:
      "Portfólio com habilidades, projetos e experiência em desenvolvimento de software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Augusto | Portfólio",
    description: "Portfólio com habilidades e projetos em desenvolvimento de software.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <CircuitBackground />
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
