import type { Metadata } from "next";
import Link from "next/link";
import ScreenshotPhone from "@/components/ScreenshotPhone";
import { CONFIG } from "@/lib/config";
import { SCREENSHOTS } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with EmTape documents, templates, subscriptions, restore purchase, export, backups, and app issues.",
};

function SupportCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface rounded-[1.75rem] p-6 md:p-7">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-muted">{children}</div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="section-kicker">Support</div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Help for the actual EmTape workflow.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Support covers saved documents, templates, finance tools, export options, backups,
            restore purchases, and subscription access. If something looks wrong in the workspace,
            the tape, or settings, this is the right place to start.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <SupportCard title="Restore purchase">
              <p>
                Open the plan area in settings and use <strong>Restore purchases</strong> if EmTape
                does not recognize your access after reinstalling or switching devices.
              </p>
              <p>
                Make sure you are signed in with the same Apple ID or Google account used for the
                original purchase.
              </p>
            </SupportCard>

            <SupportCard title="Manage plan">
              <p>
                Billing, cancellation, renewals, and refunds are handled by the app store where you
                bought the subscription.
              </p>
              <p>
                Deleting the app does not cancel a subscription. Use your store subscription settings
                to manage it.
              </p>
            </SupportCard>

            <SupportCard title="Templates and documents">
              <p>
                If a template or saved calculation is not behaving as expected, include the template
                name, the document title, and a screenshot of the affected rows when you contact us.
              </p>
            </SupportCard>

            <SupportCard title="Export and backups">
              <p>
                Export settings, header and footer text, and backup and restore options are grouped
                under settings. If a PDF or backup issue appears, tell us which output style and
                toggles were active.
              </p>
            </SupportCard>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <ScreenshotPhone
            src={SCREENSHOTS.settingsPlanLegal.src}
            alt={SCREENSHOTS.settingsPlanLegal.alt}
            caption="Plan limits, manage plan, restore purchases, export tools, and version details are visible in settings."
          />
          <ScreenshotPhone
            src={SCREENSHOTS.settingsExport.src}
            alt={SCREENSHOTS.settingsExport.alt}
            caption="Calculation, keypad, and export controls live together in settings."
          />
        </div>
      </div>

      <div className="mt-14 rounded-[2rem] border border-border/70 bg-surface p-8 shadow-[0_18px_50px_rgba(19,33,63,0.08)] md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">Contact support</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          Email{" "}
          <a
            href={`mailto:${CONFIG.supportEmail}`}
            className="font-semibold text-accent underline underline-offset-4"
          >
            {CONFIG.supportEmail}
          </a>{" "}
          and include the issue, your device, your app version, and a screenshot or screen recording if
          it helps explain the problem.
        </p>

        <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
          <li>Do include the document or template name if the problem is tied to saved work.</li>
          <li>Do mention whether the issue is in documents, templates, tape editing, export, or plan management.</li>
          <li>Do not send passwords, card numbers, or sensitive financial records.</li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${CONFIG.supportEmail}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            Email support
          </a>
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
          >
            Review privacy details
          </Link>
        </div>
      </div>
    </div>
  );
}
