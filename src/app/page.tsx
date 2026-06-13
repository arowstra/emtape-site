import type { Metadata } from "next";
import Link from "next/link";
import DownloadActions from "@/components/DownloadActions";
import FeatureCard from "@/components/FeatureCard";
import ScreenshotPhone from "@/components/ScreenshotPhone";
import BrandMark from "@/components/BrandMark";
import { CONFIG } from "@/lib/config";
import { SCREENSHOTS } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Calculator documents and finance templates",
  description:
    "EmTape is a tape-first calculator workspace with saved documents, reusable templates, finance shortcuts, export controls, and privacy-aware settings.",
  openGraph: {
    title: `${CONFIG.appName} | Calculator documents and finance templates`,
    description:
      "EmTape is a tape-first calculator workspace with saved documents, reusable templates, finance shortcuts, export controls, and privacy-aware settings.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONFIG.appName} | Calculator documents and finance templates`,
    description:
      "EmTape is a tape-first calculator workspace with saved documents, reusable templates, finance shortcuts, export controls, and privacy-aware settings.",
  },
};

const featureCards = [
  {
    eyebrow: "Workspace",
    title: "Save calculations as real documents",
    description:
      "Keep a searchable list of calculations, folders, pinned work, recent items, and trash instead of losing context after every total.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h6" />
      </svg>
    ),
  },
  {
    eyebrow: "Tape",
    title: "Work line by line, not result by result",
    description:
      "Edit rows, continue from totals, handle positive and negative balances, and keep the full working visible while you type.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 6h13" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M3 6h.01" />
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
      </svg>
    ),
  },
  {
    eyebrow: "Templates",
    title: "Turn recurring math into reusable layouts",
    description:
      "Build templates for sales, budgets, rent, debt repayment, salaries, and other repeat calculations so you can start from structure instead of blank tape.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h10" />
        <path d="M18 16v4" />
        <path d="M16 18h4" />
      </svg>
    ),
  },
  {
    eyebrow: "Finance",
    title: "Jump into common money tools fast",
    description:
      "Open shortcuts for discount, tax, markup, profit margin, commission, percentage change, split payment, and loan-style calculations from inside the calculator flow.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    eyebrow: "Export",
    title: "Control how polished results leave the app",
    description:
      "Choose PDF style, include or hide expressions, set header and footer text, and manage backup and restore from one export settings area.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    ),
  },
  {
    eyebrow: "Privacy",
    title: "Keep settings, permissions, and legal controls visible",
    description:
      "Theme, density, keypad behavior, storage, privacy options, subscriptions, restore purchases, and legal documents all live in the app settings instead of being hidden.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
];

function SnapshotSection({
  kicker,
  title,
  body,
  bullets,
  primary,
  secondary,
  reverse = false,
}: {
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  primary: { src: (typeof SCREENSHOTS)[keyof typeof SCREENSHOTS]["src"]; alt: string; caption: string };
  secondary: { src: (typeof SCREENSHOTS)[keyof typeof SCREENSHOTS]["src"]; alt: string; caption: string };
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-24">
      <div className={`grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
        <div>
          <div className="section-kicker">{kicker}</div>
          <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{body}</p>
          <ul className="mt-8 space-y-3 text-sm leading-7 text-muted">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <ScreenshotPhone src={primary.src} alt={primary.alt} caption={primary.caption} />
          <ScreenshotPhone src={secondary.src} alt={secondary.alt} caption={secondary.caption} className="sm:mt-14" />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pb-18 pt-10 md:px-8 md:pb-26 md:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="section-kicker">
                <BrandMark size={24} />
                EmTape calculator app
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                The calculator that keeps the whole working, not just the answer.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                EmTape turns calculations into saved documents you can search, review, pin, reuse,
                export, and keep organized with folders, templates, finance tools, and settings that
                match real day-to-day money work.
              </p>

              <div className="mt-8">
                <DownloadActions />
              </div>

              <div className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-surface/90 px-4 py-3">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    Trial
                  </span>
                  <span className="mt-1 block">
                    {CONFIG.trialDays}-day full-access trial before subscription access rules apply.
                  </span>
                </div>
                <div className="rounded-2xl border border-border/70 bg-surface/90 px-4 py-3">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    Real product
                  </span>
                  <span className="mt-1 block">
                    Every preview on this page is from the current EmTape app build, not a fake mockup.
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ScreenshotPhone
                src={SCREENSHOTS.documentsHome.src}
                alt={SCREENSHOTS.documentsHome.alt}
                caption="Documents workspace with search, folders, pinned and recent filters."
                priority
              />
              <ScreenshotPhone
                src={SCREENSHOTS.tapeDebtRepayment.src}
                alt={SCREENSHOTS.tapeDebtRepayment.alt}
                caption="Editable tape with row-by-row finance calculations."
                className="sm:mt-16"
                priority
              />
              <ScreenshotPhone
                src={SCREENSHOTS.financeTools.src}
                alt={SCREENSHOTS.financeTools.alt}
                caption="Finance shortcuts open directly from the calculator keypad."
              />
              <ScreenshotPhone
                src={SCREENSHOTS.settingsAppearance.src}
                alt={SCREENSHOTS.settingsAppearance.alt}
                caption="Appearance, keypad, currency, and note styling live in settings."
                className="sm:-mt-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-surface rounded-[1.75rem] px-5 py-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Documents</div>
            <p className="mt-2 text-sm leading-7 text-muted">
              Save calculations as named records with visible totals, timestamps, line counts, and folder status.
            </p>
          </div>
          <div className="card-surface rounded-[1.75rem] px-5 py-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Templates</div>
            <p className="mt-2 text-sm leading-7 text-muted">
              Reuse debt repayment, daily sales, salary, rent, shopping, and custom layouts without rebuilding the tape.
            </p>
          </div>
          <div className="card-surface rounded-[1.75rem] px-5 py-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Settings</div>
            <p className="mt-2 text-sm leading-7 text-muted">
              Control theme, accent, export output, storage, subscription access, privacy, and legal surfaces from one place.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker">Why it is different</div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            EmTape behaves like a finance notebook wrapped around a calculator.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            The product is not just a keypad with a tiny history strip. It combines calculation tape,
            saved documents, reusable templates, finance shortcuts, export preferences, and subscription
            controls into one workflow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <SnapshotSection
        kicker="Workspace flow"
        title="Start from documents, not from an empty calculator every time."
        body="The home workspace already shows how EmTape is meant to be used: create a calculation, drop it into folders, search by title or totals, pin important work, and revisit saved histories instead of copying numbers into notes."
        bullets={[
          "Named calculations keep a visible total, timestamp, line count, and folder assignment.",
          "Search reaches titles, lines, expressions, and totals from the main workspace.",
          "Filters for all, pinned, recent, trash, and sort help when the notebook gets busy.",
        ]}
        primary={{
          src: SCREENSHOTS.documentsHome.src,
          alt: SCREENSHOTS.documentsHome.alt,
          caption: "Home workspace with search, folder filters, and quick actions.",
        }}
        secondary={{
          src: SCREENSHOTS.documentsList.src,
          alt: SCREENSHOTS.documentsList.alt,
          caption: "Document cards keep totals and tape length visible at a glance.",
        }}
      />

      <div className="border-y border-border/70 bg-surface/45">
        <SnapshotSection
          kicker="Tape editing"
          title="Keep the arithmetic visible while the keypad stays live."
          body="The main calculator screen is built around editable rows and running totals, which makes tasks like debt repayment, wages, deductions, and negative balances easier to reason through without restarting from scratch."
          bullets={[
            "Enter values line by line and see the running result update inside the same document.",
            "Use light or dark mode while keeping the tape readable and color-coded.",
            "Negative results are clearly emphasized instead of disappearing into a generic result bar.",
          ]}
          primary={{
            src: SCREENSHOTS.tapeDebtRepayment.src,
            alt: SCREENSHOTS.tapeDebtRepayment.alt,
            caption: "Debt repayment example with opening balance, payment, and interest.",
          }}
          secondary={{
            src: SCREENSHOTS.tapeNegativeTotal.src,
            alt: SCREENSHOTS.tapeNegativeTotal.alt,
            caption: "Negative totals stay obvious and editable inside the same tape.",
          }}
          reverse
        />
      </div>

      <SnapshotSection
        kicker="Reuse and shortcuts"
        title="Move fast with templates and finance tools built into the same app."
        body="Instead of forcing every workflow into raw arithmetic, EmTape lets you save structures as templates and then jump to money-specific helpers when discount, tax, margin, commission, split payment, or loan math comes up."
        bullets={[
          "Template categories already cover business, loans, budgeting, shopping, rent, and more.",
          "Custom templates can define rows, operators, defaults, and descriptions before saving.",
          "Finance shortcuts stay close to the keypad so you do not leave the calculation flow.",
        ]}
        primary={{
          src: SCREENSHOTS.templatesList.src,
          alt: SCREENSHOTS.templatesList.alt,
          caption: "Reusable template library with category filters and preview actions.",
        }}
        secondary={{
          src: SCREENSHOTS.createTemplate.src,
          alt: SCREENSHOTS.createTemplate.alt,
          caption: "Template builder for custom row structure and default values.",
        }}
      />

      <section className="border-y border-border/70 bg-[#13203f] text-white">
        <div className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="section-kicker border-white/15 bg-white/10 text-white">Settings and control</div>
              <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The settings area is part of the product story, not a forgotten afterthought.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
                Appearance, tape density, text size, keypad size, note styling, export defaults,
                storage, backup and restore, privacy links, support, current plan, restore purchases,
                and about screens are all visible in the current app build.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-sm leading-7 text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Pick theme, accent color, keypad size, currency symbol, decimal places, and note style.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Set PDF output style, choose whether to include expressions, and manage backup and restore.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Open privacy policy, terms, plan details, manage plan, and restore purchases from inside settings.
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ScreenshotPhone
                src={SCREENSHOTS.settingsAppearance.src}
                alt={SCREENSHOTS.settingsAppearance.alt}
                caption="Appearance and calculator behavior settings."
              />
              <ScreenshotPhone
                src={SCREENSHOTS.settingsExport.src}
                alt={SCREENSHOTS.settingsExport.alt}
                caption="Export defaults, footer text, and backup controls."
                className="sm:mt-14"
              />
              <ScreenshotPhone
                src={SCREENSHOTS.settingsPlanLegal.src}
                alt={SCREENSHOTS.settingsPlanLegal.alt}
                caption="Plan, privacy, legal, and restore purchase controls."
              />
              <ScreenshotPhone
                src={SCREENSHOTS.actionsMenu.src}
                alt={SCREENSHOTS.actionsMenu.alt}
                caption="Document actions include export, pin, folder moves, and save as template."
                className="sm:-mt-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border/70 bg-surface p-8 shadow-[0_18px_50px_rgba(19,33,63,0.08)] md:p-10">
            <div className="section-kicker">Plan and access</div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Subscription language that matches the app instead of vague marketing.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              The current build shows a {CONFIG.featuredPlanName.toLowerCase()} plan, restore purchases,
              unlimited saved histories, unlimited tape rows per history, and unlimited folders. EmTape
              also presents support, privacy, and legal links directly inside settings.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-surface-elevated px-5 py-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Trial</div>
                <p className="mt-2 text-sm leading-7 text-muted">
                  New users receive a {CONFIG.trialDays}-day trial with app access rules explained in-app and in the store flow.
                </p>
              </div>
              <div className="rounded-2xl bg-surface-elevated px-5 py-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Store billing</div>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Billing, cancellation, renewals, and refunds are governed by the app store where the purchase is made.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/subscription"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
              >
                Read subscription details
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
              >
                Review privacy policy
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <ScreenshotPhone
              src={SCREENSHOTS.settingsPlanLegal.src}
              alt={SCREENSHOTS.settingsPlanLegal.alt}
              caption="Current plan, restore purchases, support, privacy, and terms live inside settings."
            />
            <ScreenshotPhone
              src={SCREENSHOTS.darkTapeWages.src}
              alt={SCREENSHOTS.darkTapeWages.alt}
              caption="Dark mode stays polished for night use and finance-heavy sessions."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-surface/55">
        <div className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="section-kicker">Need help</div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Support, legal, and product details stay easy to find.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              The site now mirrors the actual product surfaces you shared, and the support and legal
              pages are aligned to the current build instead of generic app-site filler.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
            >
              Visit support
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
            >
              Contact {CONFIG.ownerLegalName}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
