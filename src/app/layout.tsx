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
  title: "Portfolio | Software Developer",
  description:
    "Portfolio showcasing software development skills, projects, and experience. Built with Next.js.",
  openGraph: {
    title: "Portfolio | Software Developer",
    description:
      "Portfolio showcasing software development skills, projects, and experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Software Developer",
    description: "Portfolio showcasing software development skills and projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
