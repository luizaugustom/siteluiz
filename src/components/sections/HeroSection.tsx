"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useReducedMotion } from "@/lib/useReducedMotion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const containerReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const itemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
      {/* Subtle gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent"
        aria-hidden
      />

      <motion.div
        variants={reducedMotion ? containerReduced : container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16"
      >
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            variants={reducedMotion ? itemReduced : item}
            className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            variants={reducedMotion ? itemReduced : item}
            className="mt-2 text-xl text-[var(--accent)] sm:text-2xl"
          >
            {siteConfig.title}
          </motion.p>
          <motion.p
            variants={reducedMotion ? itemReduced : item}
            className="mt-4 max-w-lg text-[var(--foreground-muted)]"
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.div
            variants={reducedMotion ? itemReduced : item}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Link
              href="#projects"
              className="rounded-lg bg-[var(--accent)] px-6 py-3 font-medium text-white shadow-lg shadow-[var(--accent-glow)] transition-all hover:bg-[var(--accent-hover)] hover:shadow-[var(--accent)]/30"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={reducedMotion ? itemReduced : item}
          className="relative h-64 w-64 shrink-0 sm:h-72 sm:w-72 md:h-80 md:w-80"
        >
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background - Monitor */}
            <rect
              x="80"
              y="120"
              width="240"
              height="160"
              rx="16"
              fill="url(#monitorGradient)"
              stroke="var(--accent)"
              strokeWidth="3"
            />
            <rect
              x="100"
              y="140"
              width="200"
              height="120"
              rx="8"
              fill="#0a0e27"
            />
            {/* Monitor Stand */}
            <rect x="170" y="290" width="60" height="50" fill="var(--accent)" />
            <ellipse cx="200" cy="340" rx="45" ry="12" fill="var(--accent)" opacity="0.6" />
            
            {/* Person Head */}
            <circle cx="180" cy="100" r="30" fill="#d4a574" />
            {/* Hair */}
            <path
              d="M 150 80 Q 180 50 210 80"
              fill="#8b6f47"
            />
            {/* Face Details */}
            <circle cx="170" cy="95" r="4" fill="#333" />
            <circle cx="190" cy="95" r="4" fill="#333" />
            <path d="M 180 105 Q 180 108 185 110" stroke="#333" strokeWidth="2" fill="none" />
            
            {/* Body */}
            <ellipse cx="220" cy="160" rx="35" ry="50" fill="#3b82f6" />
            
            {/* Arms - Left arm on keyboard */}
            <g id="leftArm">
              <line x1="192" y1="135" x2="140" y2="180" stroke="#d4a574" strokeWidth="8" strokeLinecap="round" />
              <circle cx="138" cy="182" r="10" fill="#d4a574" />
            </g>
            
            {/* Arms - Right arm on mouse */}
            <g id="rightArm">
              <line x1="250" y1="140" x2="300" y2="160" stroke="#d4a574" strokeWidth="8" strokeLinecap="round" />
              <circle cx="302" cy="161" r="10" fill="#d4a574" />
            </g>
            
            {/* Keyboard */}
            <rect x="130" y="190" width="160" height="30" rx="4" fill="#1e1e2e" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="145" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="160" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="175" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="190" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="205" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="220" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="235" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="250" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="265" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            <circle cx="280" cy="205" r="3" fill="var(--accent)" opacity="0.7" />
            
            {/* Mouse */}
            <ellipse cx="310" cy="190" rx="20" ry="28" fill="#1e1e2e" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="310" cy="175" r="8" fill="var(--accent)" opacity="0.5" />
            
            {/* Screen Glow Effect */}
            <rect
              x="100"
              y="140"
              width="200"
              height="120"
              rx="8"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1"
              opacity="0.3"
            />
            
            {/* Animated Light on Screen */}
            <g id="screenGlow">
              <rect
                x="110"
                y="150"
                width="80"
                height="30"
                fill="var(--accent)"
                opacity="0.2"
              />
              <rect
                x="210"
                y="200"
                width="70"
                height="40"
                fill="var(--accent)"
                opacity="0.15"
              />
            </g>
            
            {/* Gradients */}
            <defs>
              <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
          {/* Animation */}
          <style>{`
            @keyframes typing {
              0%, 100% { transform: translateX(0px); }
              50% { transform: translateX(-5px); }
            }
            @keyframes mouseClick {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(0.9); }
            }
            #leftArm {
              animation: typing 2s ease-in-out infinite;
              transform-origin: 192px 135px;
            }
            #rightArm {
              animation: mouseClick 2.5s ease-in-out infinite;
              transform-origin: 250px 140px;
            }
            #screenGlow {
              animation: pulse 1.5s ease-in-out infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 0.4; }
            }
          `}</style>
        </motion.div>
      </motion.div>
    </section>
  );
}
