import Link from "next/link";
import { CONFIG } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
                E
              </div>
              <span className="text-lg font-semibold tracking-tight">
                {CONFIG.appName}
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              {CONFIG.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} {CONFIG.appName}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with privacy in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
