import type { Metadata } from "next";
import Link from "next/link";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Support — ${CONFIG.appName}`,
  description: "Get help with EmTape subscriptions, restore purchase, free trial, and app issues.",
  openGraph: {
    title: `Support — ${CONFIG.appName}`,
    description: "Get help with EmTape subscriptions, restore purchase, free trial, and app issues.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Support — ${CONFIG.appName}`,
    description: "Get help with EmTape subscriptions, restore purchase, free trial, and app issues.",
  },
};

function SupportCard({
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

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">EmTape Support</h1>
        <p className="mt-4 text-lg text-muted">
          Need help with EmTape? We are here to help.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        <SupportCard title="Restore Purchase">
          <p>
            If you already subscribed and the app does not recognize your access, open EmTape
            and tap <strong>Restore Purchase</strong> where available.
          </p>
          <p>
            Make sure you are signed in with the same Apple ID or Google account used for the
            original purchase.
          </p>
        </SupportCard>

        <SupportCard title="Cancel Subscription">
          <p>
            Subscriptions are managed by Apple App Store or Google Play. Deleting the app does
            not cancel your subscription.
          </p>
          <p>
            <strong>For iPhone or iPad:</strong>
            <br />
            Open Settings → Apple ID → Subscriptions → EmTape → Cancel Subscription.
          </p>
          <p>
            <strong>For Android:</strong>
            <br />
            Open Google Play → Payments & subscriptions → Subscriptions → EmTape → Cancel
            Subscription.
          </p>
        </SupportCard>

        <SupportCard title="Free Trial">
          <p>
            EmTape may offer a 15-day free trial. During the trial, all available features are
            unlocked.
          </p>
          <p>
            After the trial, an active subscription is required to continue using the full app.
          </p>
        </SupportCard>

        <SupportCard title="App Issues">
          <p>
            If the app crashes, freezes, or behaves unexpectedly, update to the latest version
            and restart your device.
          </p>
          <p>If the issue continues, contact support.</p>
        </SupportCard>

        <SupportCard title="Privacy Questions">
          <p>
            Read our{" "}
            <Link href="/privacy" className="text-accent hover:text-accent-hover underline underline-offset-3">
              Privacy Policy
            </Link>{" "}
            to understand how EmTape uses RevenueCat for subscriptions and Sentry for
            crash/error diagnostics.
          </p>
        </SupportCard>
      </div>

      <div className="mx-auto max-w-2xl rounded-2xl bg-surface border border-border/60 p-8 md:p-10 text-center">
        <h2 className="text-xl font-semibold tracking-tight mb-3">Contact Support</h2>
        <p className="text-muted mb-6">
          Email:{" "}
          <a
            href={`mailto:${CONFIG.supportEmail}`}
            className="text-accent hover:text-accent-hover underline underline-offset-3 font-medium"
          >
            {CONFIG.supportEmail}
          </a>
        </p>
        <p className="text-sm text-muted mb-6">
          When contacting support, include:
        </p>
        <ul className="text-sm text-muted space-y-2 mb-8 inline-block text-left">
          <li>• Your device type</li>
          <li>• App version</li>
          <li>• iOS or Android version</li>
          <li>• Description of the issue</li>
          <li>• Screenshot if helpful</li>
        </ul>
        <p className="text-xs text-muted">
          Do not send sensitive information such as card numbers, passwords, PINs, or private
          financial records.
        </p>
      </div>
    </div>
  );
}
