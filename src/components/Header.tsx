"use client";

import Link from "next/link";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import BrandMark from "@/components/BrandMark";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Product" },
    { href: "/subscription", label: "Plan" },
    { href: "/support", label: "Support" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <BrandMark size={46} />
            <div className="leading-tight">
              <span className="display-font block text-base font-bold tracking-tight">
                {CONFIG.appName}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">
                Tape-first calculator
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-foreground/90"
            >
              Contact
            </Link>
          </nav>

          <button
            className="rounded-xl p-2 transition-colors hover:bg-surface md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background"
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
