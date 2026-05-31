import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: `Terms of Use — ${CONFIG.appName}`,
  description: "Read the terms governing your use of the EmTape calculator app.",
  openGraph: {
    title: `Terms of Use — ${CONFIG.appName}`,
    description: "Read the terms governing your use of the EmTape calculator app.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms of Use — ${CONFIG.appName}`,
    description: "Read the terms governing your use of the EmTape calculator app.",
  },
};

const toc = [
  { id: "what-emtape-does", label: "1. What EmTape Does" },
  { id: "accuracy", label: "2. Accuracy of Calculations" },
  { id: "free-trial", label: "3. Free Trial and Subscription" },
  { id: "auto-renewal", label: "4. Auto-Renewal" },
  { id: "refunds", label: "5. Refunds" },
  { id: "restore", label: "6. Restore Purchases" },
  { id: "license", label: "7. License to Use the App" },
  { id: "privacy", label: "8. Privacy" },
  { id: "updates", label: "9. App Updates and Changes" },
  { id: "availability", label: "10. Availability" },
  { id: "no-advice", label: "11. No Professional Advice" },
  { id: "ip", label: "12. Intellectual Property" },
  { id: "user-data", label: "13. User Data and Local Content" },
  { id: "termination", label: "14. Termination" },
  { id: "disclaimer", label: "15. Disclaimer of Warranties" },
  { id: "liability", label: "16. Limitation of Liability" },
  { id: "governing-law", label: "17. Governing Law" },
  { id: "changes", label: "18. Changes to These Terms" },
  { id: "contact", label: "19. Contact" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use" toc={toc}>
      <div className="mb-10 text-sm text-muted space-y-1">
        <p><strong>Effective Date:</strong> {CONFIG.launchDate}</p>
        <p><strong>App Name:</strong> {CONFIG.appName}</p>
        <p><strong>Contact:</strong> {CONFIG.supportEmail}</p>
      </div>

      <p className="mb-8 text-muted">
        These Terms of Use govern your access to and use of EmTape, a calculator and paper
        tape productivity mobile application.
      </p>
      <p className="mb-8 text-muted">
        By downloading, accessing, or using EmTape, you agree to these Terms. If you do not
        agree, do not use the app.
      </p>

      <h2 id="what-emtape-does" className="text-2xl font-semibold mt-12 mb-4">
        1. What EmTape Does
      </h2>
      <p className="mb-6 text-muted">
        EmTape is a calculator app designed to help users perform arithmetic calculations,
        review calculation steps, continue calculations from results, and manage calculator
        tape/history features where available.
      </p>
      <p className="mb-6 text-muted">
        EmTape may also include finance-related calculator tools, templates, formatting
        options, and customization features.
      </p>
      <p className="mb-6 text-muted">
        EmTape is a utility app. It is not a bank, financial institution, accounting firm, tax
        advisor, investment advisor, legal advisor, or payment service.
      </p>

      <h2 id="accuracy" className="text-2xl font-semibold mt-12 mb-4">
        2. Accuracy of Calculations
      </h2>
      <p className="mb-6 text-muted">
        We work to make EmTape accurate and reliable, but you are responsible for reviewing
        and verifying important calculations.
      </p>
      <p className="mb-4 text-muted">
        You should not rely solely on EmTape for high-risk decisions, including but not
        limited to:
      </p>
      <ul className="mb-6 text-muted">
        <li>Financial decisions</li>
        <li>Tax filings</li>
        <li>Legal obligations</li>
        <li>Medical decisions</li>
        <li>Engineering or safety-critical calculations</li>
        <li>Business-critical reporting</li>
      </ul>
      <p className="mb-6 text-muted">Always verify important results independently.</p>

      <h2 id="free-trial" className="text-2xl font-semibold mt-12 mb-4">
        3. Free Trial and Subscription
      </h2>
      <p className="mb-6 text-muted">
        EmTape may offer a 15-day free trial.
      </p>
      <p className="mb-6 text-muted">
        During the free trial, all available app features may be unlocked. After the trial
        ends, an active subscription is required to continue using the full app.
      </p>
      <p className="mb-6 text-muted">
        Subscription terms, renewal, cancellation, and billing are handled by Apple App Store
        or Google Play, depending on where you purchased or downloaded the app.
      </p>
      <p className="mb-6 text-muted">
        By starting a free trial or subscription, you agree to the pricing, billing period,
        renewal terms, and cancellation rules shown at the time of purchase.
      </p>

      <h2 id="auto-renewal" className="text-2xl font-semibold mt-12 mb-4">
        4. Auto-Renewal
      </h2>
      <p className="mb-6 text-muted">
        Subscriptions may automatically renew unless cancelled before the renewal date
        according to the rules of the app store where the purchase was made.
      </p>
      <p className="mb-4 text-muted">You can manage or cancel your subscription through:</p>
      <ul className="mb-6 text-muted">
        <li>Apple App Store account settings for iOS purchases</li>
        <li>Google Play subscriptions settings for Android purchases</li>
      </ul>
      <p className="mb-6 text-muted">
        Deleting the app does not automatically cancel your subscription.
      </p>

      <h2 id="refunds" className="text-2xl font-semibold mt-12 mb-4">
        5. Refunds
      </h2>
      <p className="mb-6 text-muted">
        Refunds are handled by Apple App Store or Google Play according to their policies.
      </p>
      <p className="mb-6 text-muted">
        We do not directly process app store payments and may not be able to issue refunds
        directly.
      </p>

      <h2 id="restore" className="text-2xl font-semibold mt-12 mb-4">
        6. Restore Purchases
      </h2>
      <p className="mb-6 text-muted">
        If you reinstall the app or change devices, you may be able to restore purchases using
        the restore purchase option inside EmTape, where supported.
      </p>
      <p className="mb-6 text-muted">
        Purchase restoration depends on the app store account used for the original purchase
        and the availability of store purchase records.
      </p>

      <h2 id="license" className="text-2xl font-semibold mt-12 mb-4">
        7. License to Use the App
      </h2>
      <p className="mb-6 text-muted">
        We grant you a limited, non-exclusive, non-transferable, revocable license to use
        EmTape for personal or internal business use, subject to these Terms.
      </p>
      <p className="mb-4 text-muted">You may not:</p>
      <ul className="mb-6 text-muted">
        <li>Copy, modify, reverse engineer, or redistribute the app</li>
        <li>Use the app to violate laws or regulations</li>
        <li>Attempt to bypass subscription, trial, or entitlement controls</li>
        <li>Interfere with the app&apos;s operation or security</li>
        <li>Use the app in a way that damages EmTape, users, or service providers</li>
      </ul>

      <h2 id="privacy" className="text-2xl font-semibold mt-12 mb-4">
        8. Privacy
      </h2>
      <p className="mb-6 text-muted">
        Your use of EmTape is also governed by our Privacy Policy.
      </p>
      <p className="mb-6 text-muted">
        The Privacy Policy explains what limited information we collect and how we use services
        such as RevenueCat and Sentry.
      </p>

      <h2 id="updates" className="text-2xl font-semibold mt-12 mb-4">
        9. App Updates and Changes
      </h2>
      <p className="mb-6 text-muted">
        We may update, improve, modify, suspend, or discontinue parts of EmTape at any time.
      </p>
      <p className="mb-6 text-muted">
        Some features may change over time. We may add, remove, rename, redesign, or adjust
        features to improve the app, comply with platform rules, fix bugs, or support
        subscriptions.
      </p>

      <h2 id="availability" className="text-2xl font-semibold mt-12 mb-4">
        10. Availability
      </h2>
      <p className="mb-6 text-muted">
        We aim to keep EmTape reliable, but we do not guarantee that the app will always be
        available, error-free, or compatible with every device or operating system version.
      </p>
      <p className="mb-6 text-muted">
        Some features may require internet access, including subscription validation, restore
        purchase, and crash/error reporting.
      </p>
      <p className="mb-6 text-muted">
        Core calculator functions may work offline where supported, but subscription status
        checks may require internet access from time to time.
      </p>

      <h2 id="no-advice" className="text-2xl font-semibold mt-12 mb-4">
        11. No Professional Advice
      </h2>
      <p className="mb-6 text-muted">
        EmTape may include finance-related calculators or templates, but these are provided
        for general calculation convenience only.
      </p>
      <p className="mb-6 text-muted">
        EmTape does not provide financial, investment, accounting, tax, legal, or professional
        advice.
      </p>
      <p className="mb-6 text-muted">
        You are responsible for how you interpret and use calculation results.
      </p>

      <h2 id="ip" className="text-2xl font-semibold mt-12 mb-4">
        12. Intellectual Property
      </h2>
      <p className="mb-6 text-muted">
        EmTape, including its name, design, interface, features, branding, graphics, text, and
        software, is owned by us or our licensors and is protected by applicable intellectual
        property laws.
      </p>
      <p className="mb-6 text-muted">
        You may not use EmTape branding, screenshots, or materials in a misleading way without
        permission.
      </p>

      <h2 id="user-data" className="text-2xl font-semibold mt-12 mb-4">
        13. User Data and Local Content
      </h2>
      <p className="mb-6 text-muted">
        Any calculation entries, tape history, preferences, or settings stored locally on your
        device remain your responsibility.
      </p>
      <p className="mb-6 text-muted">
        You are responsible for backing up important information where applicable. We are not
        responsible for loss of local data caused by device loss, deletion, app uninstall,
        operating system changes, or technical failure.
      </p>

      <h2 id="termination" className="text-2xl font-semibold mt-12 mb-4">
        14. Termination
      </h2>
      <p className="mb-6 text-muted">
        We may suspend or terminate access to EmTape if you violate these Terms, misuse the
        app, attempt to bypass subscription systems, or use the app unlawfully.
      </p>
      <p className="mb-6 text-muted">
        You may stop using EmTape at any time. If you have an active subscription, you must
        cancel it through the app store where it was purchased.
      </p>

      <h2 id="disclaimer" className="text-2xl font-semibold mt-12 mb-4">
        15. Disclaimer of Warranties
      </h2>
      <p className="mb-6 text-muted">
        EmTape is provided &quot;as is&quot; and &quot;as available.&quot;
      </p>
      <p className="mb-6 text-muted">
        To the maximum extent permitted by law, we disclaim all warranties, whether express
        or implied, including warranties of accuracy, reliability, fitness for a particular
        purpose, merchantability, and non-infringement.
      </p>

      <h2 id="liability" className="text-2xl font-semibold mt-12 mb-4">
        16. Limitation of Liability
      </h2>
      <p className="mb-6 text-muted">
        To the maximum extent permitted by law, we will not be liable for indirect, incidental,
        special, consequential, exemplary, or punitive damages, including loss of profits,
        data, business, or goodwill arising from your use of EmTape.
      </p>
      <p className="mb-6 text-muted">
        Our total liability for any claim related to EmTape will be limited to the amount you
        paid for the app or subscription during the period allowed by applicable law.
      </p>

      <h2 id="governing-law" className="text-2xl font-semibold mt-12 mb-4">
        17. Governing Law
      </h2>
      <p className="mb-6 text-muted">
        These Terms are governed by the laws of {CONFIG.governingJurisdiction}, without
        regard to conflict of law principles.
      </p>
      <p className="mb-6 text-muted">
        If required by consumer protection law in your location, you may also have rights
        under the laws of your country or region.
      </p>

      <h2 id="changes" className="text-2xl font-semibold mt-12 mb-4">
        18. Changes to These Terms
      </h2>
      <p className="mb-6 text-muted">
        We may update these Terms from time to time. If we make material changes, we will
        update the effective date and may provide additional notice where appropriate.
      </p>
      <p className="mb-6 text-muted">
        Your continued use of EmTape after changes become effective means you accept the
        updated Terms.
      </p>

      <h2 id="contact" className="text-2xl font-semibold mt-12 mb-4">
        19. Contact
      </h2>
      <p className="mb-4 text-muted">For questions about these Terms, contact:</p>
      <p className="mb-6 font-semibold">{CONFIG.supportEmail}</p>
    </LegalPageLayout>
  );
}
