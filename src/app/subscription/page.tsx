import type { Metadata } from "next";
import Link from "next/link";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Subscriptions — ${CONFIG.appName}`,
  description:
    "Learn about EmTape's 15-day free trial, subscription plans, cancellation, and restore purchase.",
  openGraph: {
    title: `Subscriptions — ${CONFIG.appName}`,
    description:
      "Learn about EmTape's 15-day free trial, subscription plans, cancellation, and restore purchase.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Subscriptions — ${CONFIG.appName}`,
    description:
      "Learn about EmTape's 15-day free trial, subscription plans, cancellation, and restore purchase.",
  },
};

function SubscriptionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-surface border border-border/60 p-6 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight mb-4">{title}</h2>
      <div className="text-sm leading-relaxed text-muted space-y-3">{children}</div>
    </div>
  );
}

export default function SubscriptionPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Subscriptions</h1>
        <p className="mt-4 text-lg text-muted">
          Full access during your free trial. Subscription required after trial.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        <SubscriptionCard title="15-Day Free Trial">
          <p>
            New users get a 15-day free trial. During the trial, everything is unlocked and the
            full app experience is available.
          </p>
          <p>
            There are no confusing &quot;Pro features during trial&quot; restrictions. All available
            features are included.
          </p>
        </SubscriptionCard>

        <SubscriptionCard title="Subscription Required After Trial">
          <p>
            After the 15-day free trial ends, an active subscription is required to continue
            using the full app.
          </p>
          <p>
            Subscription management, billing, cancellation, refunds, and renewals are handled
            by Apple App Store and/or Google Play, depending on where you downloaded the app.
          </p>
        </SubscriptionCard>

        <SubscriptionCard title="RevenueCat">
          <p>
            RevenueCat is used only to manage subscriptions, entitlement status, purchase
            validation, and purchase restoration.
          </p>
          <p>
            RevenueCat does not process your payment directly. All payments are handled by
            Apple or Google.
          </p>
        </SubscriptionCard>

        <SubscriptionCard title="Cancel Anytime">
          <p>
            You can cancel your subscription at any time through your app store account
            settings.
          </p>
          <p>
            <strong>iOS:</strong> Settings → Apple ID → Subscriptions → EmTape → Cancel
            Subscription.
          </p>
          <p>
            <strong>Android:</strong> Google Play → Payments & subscriptions → Subscriptions →
            EmTape → Cancel Subscription.
          </p>
        </SubscriptionCard>

        <SubscriptionCard title="Restore Purchase">
          <p>
            If you reinstall the app or switch devices, you can restore your purchase inside
            EmTape where supported.
          </p>
          <p>
            Make sure you are signed in with the same Apple ID or Google account used for the
            original purchase.
          </p>
        </SubscriptionCard>

        <SubscriptionCard title="Refunds">
          <p>
            Refunds are handled by Apple App Store or Google Play according to their respective
            policies.
          </p>
          <p>
            We do not directly process app store payments and may not be able to issue refunds
            directly.
          </p>
        </SubscriptionCard>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p className="text-muted mb-6">
          Have questions? Visit our{" "}
          <Link
            href="/support"
            className="text-accent hover:text-accent-hover underline underline-offset-3"
          >
            Support page
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-accent hover:text-accent-hover underline underline-offset-3"
          >
            contact us
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CONFIG.appStoreUrl}
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-7 py-3.5 text-base font-semibold text-background shadow-sm hover:bg-foreground/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the App Store
          </a>
          <a
            href={CONFIG.googlePlayUrl}
            className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 text-base font-medium text-foreground hover:bg-surface transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
