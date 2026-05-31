import type { Metadata } from "next";
import Link from "next/link";
import { CONFIG } from "@/lib/config";
import AppMockup from "@/components/AppMockup";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: `${CONFIG.appName} — Smart Paper Tape Calculator`,
  description:
    "EmTape is a modern calculator with a paper tape workflow for reviewing, editing, and continuing everyday calculations.",
  openGraph: {
    title: `${CONFIG.appName} — Smart Paper Tape Calculator`,
    description:
      "EmTape is a modern calculator with a paper tape workflow for reviewing, editing, and continuing everyday calculations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONFIG.appName} — Smart Paper Tape Calculator`,
    description:
      "EmTape is a modern calculator with a paper tape workflow for reviewing, editing, and continuing everyday calculations.",
  },
};

function StoreBadge({ store }: { store: "apple" | "google" }) {
  const isApple = store === "apple";
  return (
    <a
      href={isApple ? CONFIG.appStoreUrl : CONFIG.googlePlayUrl}
      className="inline-flex items-center gap-2.5 rounded-xl bg-foreground px-5 py-3 text-background shadow-sm hover:bg-foreground/90 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {isApple ? (
        <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.64-.68.84-1.27 2.18-1.11 3.29 1.19.09 2.39-.6 3.1-1.82z" />
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] uppercase tracking-wider opacity-80 leading-none">
          {isApple ? "Download on the" : "Get it on"}
        </div>
        <div className="text-sm font-semibold leading-tight">
          {isApple ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}

export default function HomePage() {
  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Paper tape workflow",
      description:
        "Review your calculation steps instead of losing context after every result.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
      ),
      title: "Continue from your result",
      description:
        "Keep working from a total without starting from scratch.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "History that makes sense",
      description:
        "Save and revisit previous calculations when supported by the app.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: "Built for everyday money math",
      description:
        "Useful for shopping, business totals, school calculations, estimates, budgeting, and quick arithmetic.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
      title: "Finance tools and templates",
      description:
        "Include helpful premium finance tools/templates where available.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
      title: "Private by design",
      description:
        "No ads, no selling of personal data, and no unnecessary tracking.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="max-w-lg text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
                {CONFIG.appName} —{" "}
                <span className="text-muted">a smarter calculator with a paper tape memory.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                EmTape helps you calculate, review, edit, and continue your work with a clean
                tape-style calculator built for everyday arithmetic, business, school, and
                personal finance calculations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <StoreBadge store="apple" />
                <StoreBadge store="google" />
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                <span className="font-medium">15-day free trial.</span>
                <span>Full access during trial. Subscription required after trial.</span>
              </div>
              <div className="mt-4">
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-accent hover:text-accent-hover underline underline-offset-4"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <AppMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Product Visual / Tape Demo */}
      <section className="bg-surface border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See your calculations clearly.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every line is visible. Every step is reviewable. Work with confidence.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-background border border-border/60 shadow-lg overflow-hidden">
              {/* Mock tape header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/60 bg-surface/50">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs font-medium text-muted">Tape</span>
              </div>
              {/* Mock tape lines */}
              <div className="divide-y divide-border/40">
                {[
                  { expr: "2,450.00 + 1,180.50", res: "3,630.50" },
                  { expr: "3,630.50 × 1.08", res: "3,920.94" },
                  { expr: "3,920.94 − 500.00", res: "3,420.94", active: true },
                ].map((line, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-4 tape-line ${
                      line.active
                        ? "bg-accent/5 font-semibold text-foreground"
                        : "text-muted"
                    }`}
                  >
                    <span className="text-sm">{line.expr}</span>
                    <span className={`text-sm ${line.active ? "text-accent" : ""}`}>
                      = {line.res}
                    </span>
                  </div>
                ))}
              </div>
              {/* Input area */}
              <div className="px-5 py-4 border-t border-border/60 bg-surface/30">
                <div className="text-right text-2xl font-light tape-line text-foreground">
                  3,420.94 +{" "}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for real work.
          </h2>
          <p className="mt-4 text-lg text-muted">
            A calculator designed around how you actually think with numbers.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="bg-surface border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Try everything for 15 days.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Start with full access to EmTape. During the trial, all available features are
              unlocked. After the trial, an active subscription is required to continue using
              the full app. Billing and cancellation are handled through the App Store or Google
              Play.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CONFIG.appStoreUrl}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-accent-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free trial
              </a>
              <Link
                href="/subscription"
                className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 text-base font-medium text-foreground hover:bg-background transition-colors"
              >
                Learn about subscriptions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Trust Section */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-600">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your calculations stay yours.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            EmTape is designed as a calculator, not an advertising platform. We do not sell your
            data. We do not use third-party ad tracking. We use Sentry only to understand crashes
            and app performance issues, and RevenueCat only to manage subscriptions and purchase
            status.
          </p>
          <div className="mt-9">
            <Link
              href="/privacy"
              className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 text-base font-medium text-foreground hover:bg-surface transition-colors"
            >
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-surface border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need help?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Visit Support for subscription help, restore purchase guidance, app issues, and
              contact information.
            </p>
            <div className="mt-9">
              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-7 py-3.5 text-base font-semibold text-background shadow-sm hover:bg-foreground/90 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
