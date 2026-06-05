import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how EMTape handles local calculation data, subscriptions, exports, backups, support requests, and limited diagnostic processing.",
};

const toc = [
  { id: "scope", label: "1. Scope" },
  { id: "app-data", label: "2. Data You Create in EMTape" },
  { id: "service-data", label: "3. Subscription, Support, and Diagnostics" },
  { id: "exports", label: "4. Exports, Backups, and Sharing" },
  { id: "use", label: "5. How We Use Information" },
  { id: "advertising", label: "6. No Sale of Data or Ad Tracking" },
  { id: "retention", label: "7. Retention and Your Controls" },
  { id: "children", label: "8. Children's Privacy" },
  { id: "international", label: "9. International Processing" },
  { id: "changes", label: "10. Changes to This Policy" },
  { id: "contact", label: "11. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" toc={toc}>
      <div className="mb-10 space-y-1 text-sm text-muted">
        <p>
          <strong>Effective date:</strong> {CONFIG.launchDate}
        </p>
        <p>
          <strong>Product:</strong> {CONFIG.appName}
        </p>
        <p>
          <strong>Owner:</strong> {CONFIG.ownerLegalName}
        </p>
        <p>
          <strong>Contact:</strong> {CONFIG.supportEmail}
        </p>
      </div>

      <p className="mb-8 text-muted">
        EMTape is designed as a calculator workspace, not an advertising platform. This policy
        explains how we handle information connected to the mobile app and this website.
      </p>

      <h2 id="scope" className="mt-12 mb-4 text-2xl font-semibold">
        1. Scope
      </h2>
      <p className="mb-6 text-muted">
        This policy applies to the EMTape website and the EMTape mobile app, including saved
        calculation documents, templates, folders, settings, export options, subscription access,
        support contacts, and other app features made available in the current product.
      </p>

      <h2 id="app-data" className="mt-12 mb-4 text-2xl font-semibold">
        2. Data You Create in EMTape
      </h2>
      <p className="mb-6 text-muted">
        EMTape is built around calculation content you create. Depending on how you use the app,
        that may include:
      </p>
      <ul className="mb-6 text-muted">
        <li>Calculation documents and tape rows</li>
        <li>Totals, expressions, notes, and titles</li>
        <li>Templates, categories, and default values</li>
        <li>Folders, pin status, sort and filter state</li>
        <li>Appearance, keypad, currency, and export settings</li>
        <li>Header and footer text used for export output</li>
      </ul>
      <p className="mb-6 text-muted">
        Based on the current product settings, this app data is primarily stored locally on your
        device. The app settings currently indicate local SQLite storage for app data.
      </p>
      <p className="mb-6 text-muted">
        We do not describe your calculations as advertising inventory and we do not sell your
        calculation history to data brokers.
      </p>

      <h2 id="service-data" className="mt-12 mb-4 text-2xl font-semibold">
        3. Subscription, Support, and Diagnostics
      </h2>
      <p className="mb-6 text-muted">
        To operate paid access, restore purchases, support requests, and app reliability, limited
        service-related information may be processed.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">Subscription and purchase state</h3>
      <p className="mb-6 text-muted">
        Subscription billing is handled by the app store where the purchase is made. We may use
        subscription infrastructure such as RevenueCat to validate entitlements, determine trial or
        plan status, and restore access after reinstall or device changes.
      </p>
      <p className="mb-6 text-muted">
        This may involve identifiers associated with the app install or store purchase, product and
        entitlement status, purchase dates, renewal state, and related subscription metadata.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">Support requests</h3>
      <p className="mb-6 text-muted">
        If you email support, we receive the information you choose to send, such as your email
        address, device details, screenshots, and the contents of your message.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">Crash and diagnostic information</h3>
      <p className="mb-6 text-muted">
        We may use diagnostic tooling such as Sentry to understand crashes, app errors, and
        performance issues. This can include technical information like app version, device model,
        operating system version, timestamps, and error traces needed to fix the product.
      </p>
      <p className="mb-6 text-muted">
        We do not intend to send full calculation history, passwords, payment card numbers, or
        private financial records to diagnostic tools.
      </p>

      <h2 id="exports" className="mt-12 mb-4 text-2xl font-semibold">
        4. Exports, Backups, and Sharing
      </h2>
      <p className="mb-6 text-muted">
        EMTape includes export and backup-related settings. When you choose to export, back up,
        restore, print, or share content, the app may create files or pass content to locations,
        apps, or services you select through your device operating system.
      </p>
      <p className="mb-6 text-muted">
        Those destinations are governed by the privacy and security rules of the platform or service
        you choose. You should review those providers separately if you rely on them for storage or
        sharing.
      </p>

      <h2 id="use" className="mt-12 mb-4 text-2xl font-semibold">
        5. How We Use Information
      </h2>
      <p className="mb-4 text-muted">We use limited information to:</p>
      <ul className="mb-6 text-muted">
        <li>Provide the calculator workspace and settings you choose</li>
        <li>Validate subscription access and restore purchases</li>
        <li>Respond to support requests</li>
        <li>Diagnose crashes, bugs, and performance issues</li>
        <li>Maintain security, reliability, and legal compliance</li>
      </ul>
      <p className="mb-6 text-muted">
        We do not use your data to build third-party ad profiles.
      </p>

      <h2 id="advertising" className="mt-12 mb-4 text-2xl font-semibold">
        6. No Sale of Data or Ad Tracking
      </h2>
      <p className="mb-6 text-muted">
        We do not sell personal information. We do not position EMTape as an ad-supported tracking
        product. We do not intentionally use third-party advertising networks to monetize your
        calculation history.
      </p>

      <h2 id="retention" className="mt-12 mb-4 text-2xl font-semibold">
        7. Retention and Your Controls
      </h2>
      <p className="mb-6 text-muted">
        App content stored locally generally remains on your device until you edit it, export it,
        back it up, clear it, or remove the app, subject to your device and platform behavior.
      </p>
      <p className="mb-6 text-muted">
        Subscription records, support emails, and technical diagnostics may be retained only as long
        as needed to provide the service, handle support, comply with legal obligations, resolve
        disputes, or improve reliability.
      </p>
      <p className="mb-6 text-muted">You can typically control data by:</p>
      <ul className="mb-6 text-muted">
        <li>Managing settings and local app content on your device</li>
        <li>Using in-app restore or backup controls where available</li>
        <li>Managing subscriptions through your app store account</li>
        <li>Contacting us about support or privacy questions</li>
      </ul>

      <h2 id="children" className="mt-12 mb-4 text-2xl font-semibold">
        8. Children&apos;s Privacy
      </h2>
      <p className="mb-6 text-muted">
        EMTape is a general utility app and is not directed specifically to children under 13. If
        you believe a child has provided personal information to us directly through support or
        another channel, contact us so we can review the request.
      </p>

      <h2 id="international" className="mt-12 mb-4 text-2xl font-semibold">
        9. International Processing
      </h2>
      <p className="mb-6 text-muted">
        Service providers involved in subscriptions, diagnostics, communications, or website hosting
        may process information in countries outside your own. By using EMTape, you understand that
        these limited data flows may occur as part of operating the service.
      </p>

      <h2 id="changes" className="mt-12 mb-4 text-2xl font-semibold">
        10. Changes to This Policy
      </h2>
      <p className="mb-6 text-muted">
        We may update this policy from time to time as the product changes, as store rules change,
        or as legal requirements evolve. When material changes are made, we will update the effective
        date and may provide additional notice where appropriate.
      </p>

      <h2 id="contact" className="mt-12 mb-4 text-2xl font-semibold">
        11. Contact
      </h2>
      <p className="mb-4 text-muted">
        For privacy questions, support requests, or data-related enquiries, contact:
      </p>
      <p className="mb-6 font-semibold">{CONFIG.supportEmail}</p>
    </LegalPageLayout>
  );
}
