"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
        >
          Portfolio
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex flex-col gap-1.5 rounded p-2 text-[var(--foreground)] md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 bg-current"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--background-elevated)] hover:text-[var(--accent)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
