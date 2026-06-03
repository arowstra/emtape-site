import type { Metadata } from "next";
import Link from "next/link";
import ScreenshotPhone from "@/components/ScreenshotPhone";
import DownloadActions from "@/components/DownloadActions";
import { CONFIG } from "@/lib/config";
import { SCREENSHOTS } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Subscription and trial",
  description:
    "Understand EMTape trial access, subscription handling, restore purchases, and plan management.",
};

function PlanCard({
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

export default function SubscriptionPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.88fr]">
        <div>
          <div className="section-kicker">Plan details</div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Clear subscription language for what the app already shows.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            EMTape is positioned around saved calculations, templates, folders, export tools, and
            settings-based control. The current build shows a {CONFIG.featuredPlanName.toLowerCase()}
            plan, restore purchases, and unlimited saved histories, tape rows per history, and folders.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <PlanCard title={`${CONFIG.trialDays}-day trial`}>
              <p>
                New users may receive a {CONFIG.trialDays}-day trial before subscription access rules
                apply.
              </p>
              <p>
                The exact store flow, pricing, and renewal terms shown at checkout control the purchase.
              </p>
            </PlanCard>

            <PlanCard title="Current in-app plan view">
              <p>
                The settings screen currently shows a <strong>{CONFIG.featuredPlanName}</strong> plan
                and highlights unlimited saved histories, tape rows, and folders.
              </p>
            </PlanCard>

            <PlanCard title="Store-managed billing">
              <p>
                Apple App Store and Google Play handle billing, renewals, cancellations, and refund
                rules for their respective purchases.
              </p>
              <p>Deleting EMTape does not automatically cancel a subscription.</p>
            </PlanCard>

            <PlanCard title="Restore purchases">
              <p>
                If you reinstall the app or move to a new device, use the restore purchases option in
                settings so EMTape can re-check your store entitlement.
              </p>
            </PlanCard>
          </div>

          <div className="mt-10">
            <DownloadActions />
          </div>

          <p className="mt-5 text-sm leading-7 text-muted">
            If store links are not live on this site yet, use support to request access or ask about
            rollout timing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <ScreenshotPhone
            src={SCREENSHOTS.settingsPlanLegal.src}
            alt={SCREENSHOTS.settingsPlanLegal.alt}
            caption="The plan area shows current plan, restore purchases, and support plus legal links."
          />
          <ScreenshotPhone
            src={SCREENSHOTS.documentsHome.src}
            alt={SCREENSHOTS.documentsHome.alt}
            caption="The workspace also surfaces the current plan status near the top of the app."
          />
        </div>
      </div>

      <div className="mt-14 rounded-[2rem] border border-border/70 bg-surface p-8 shadow-[0_18px_50px_rgba(19,33,63,0.08)] md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">Need help with a subscription issue?</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          If purchase access, renewals, or restore flow do not look right, start on the support page
          and include your device, app version, and the store you used.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/support"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            Go to support
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
          >
            Read terms of use
          </Link>
        </div>
      </div>
    </div>
  );
}
