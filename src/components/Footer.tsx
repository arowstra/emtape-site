import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { CONFIG } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Product" },
    { href: "/subscription", label: "Subscription" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ];

  return (
    <footer className="border-t border-border/70 bg-surface/80">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <BrandMark size={46} />
              <div className="leading-tight">
                <span className="display-font block text-base font-bold tracking-tight">
                  {CONFIG.appName}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">
                  Calculator workspace
                </span>
              </div>
            </Link>
            <p className="text-sm leading-7 text-muted">{CONFIG.tagline}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              {CONFIG.companyLegalName}
              <br />
              <a href={`mailto:${CONFIG.supportEmail}`} className="underline underline-offset-4">
                {CONFIG.supportEmail}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            &copy; {currentYear} {CONFIG.appName}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built around saved calculations, templates, export, and privacy-aware defaults.
          </p>
        </div>
      </div>
    </footer>
  );
}
