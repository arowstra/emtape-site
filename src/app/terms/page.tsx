import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms for using EMTape, including calculator accuracy, subscriptions, exports, backups, and acceptable use.",
};

const toc = [
  { id: "service", label: "1. What EMTape Is" },
  { id: "trial-and-plan", label: "2. Trial, Subscription, and Billing" },
  { id: "accuracy", label: "3. Accuracy and Professional Judgment" },
  { id: "content", label: "4. Your Documents, Templates, and Local Data" },
  { id: "exports", label: "5. Exports, Sharing, and Backups" },
  { id: "acceptable-use", label: "6. Acceptable Use" },
  { id: "updates", label: "7. Product Updates and Availability" },
  { id: "ownership", label: "8. Intellectual Property" },
  { id: "disclaimer", label: "9. Disclaimer and Limitation of Liability" },
  { id: "law", label: "10. Governing Law" },
  { id: "changes", label: "11. Changes to These Terms" },
  { id: "contact", label: "12. Contact" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use" toc={toc}>
      <div className="mb-10 space-y-1 text-sm text-muted">
        <p>
          <strong>Effective date:</strong> {CONFIG.launchDate}
        </p>
        <p>
          <strong>Product:</strong> {CONFIG.appName}
        </p>
        <p>
          <strong>Operator:</strong> {CONFIG.companyLegalName}
        </p>
        <p>
          <strong>Contact:</strong> {CONFIG.supportEmail}
        </p>
      </div>

      <p className="mb-8 text-muted">
        These Terms of Use govern your use of the EMTape website and mobile app. By downloading,
        accessing, or using EMTape, you agree to these terms.
      </p>

      <h2 id="service" className="mt-12 mb-4 text-2xl font-semibold">
        1. What EMTape Is
      </h2>
      <p className="mb-6 text-muted">
        EMTape is a calculator workspace built around tape-style calculations, saved documents,
        templates, folders, finance shortcuts, export controls, and product settings.
      </p>
      <p className="mb-6 text-muted">
        EMTape is not a bank, accounting firm, tax adviser, legal service, investment platform, or
        payment processor. It is a software tool for calculation and organization.
      </p>

      <h2 id="trial-and-plan" className="mt-12 mb-4 text-2xl font-semibold">
        2. Trial, Subscription, and Billing
      </h2>
      <p className="mb-6 text-muted">
        EMTape may offer a {CONFIG.trialDays}-day trial and may require an active subscription after
        that period for continued access to certain features or the full product experience.
      </p>
      <p className="mb-6 text-muted">
        The current app build shows a {CONFIG.featuredPlanName.toLowerCase()} plan, but pricing,
        renewal periods, taxes, storefront wording, and final purchase terms are controlled by the
        app store where you subscribe.
      </p>
      <p className="mb-6 text-muted">
        Billing, renewals, cancellation, and refunds are handled by Apple App Store or Google Play
        for their respective purchases. Deleting the app does not automatically cancel a subscription.
      </p>
      <p className="mb-6 text-muted">
        If you reinstall the app or change devices, you may need to use the restore purchases option
        in settings so the app can re-check your entitlement.
      </p>

      <h2 id="accuracy" className="mt-12 mb-4 text-2xl font-semibold">
        3. Accuracy and Professional Judgment
      </h2>
      <p className="mb-6 text-muted">
        We work to make EMTape reliable, but you remain responsible for reviewing and confirming
        important calculations before acting on them.
      </p>
      <p className="mb-4 text-muted">
        Do not rely on EMTape alone for high-risk decisions such as:
      </p>
      <ul className="mb-6 text-muted">
        <li>Tax reporting or statutory filings</li>
        <li>Legal obligations or compliance calculations</li>
        <li>Medical, engineering, or safety-critical work</li>
        <li>Large financial transactions or investment decisions</li>
      </ul>
      <p className="mb-6 text-muted">
        EMTape may include finance templates and shortcut tools, but it does not provide accounting,
        tax, legal, or investment advice.
      </p>

      <h2 id="content" className="mt-12 mb-4 text-2xl font-semibold">
        4. Your Documents, Templates, and Local Data
      </h2>
      <p className="mb-6 text-muted">
        You are responsible for the calculations, titles, notes, templates, folders, export text,
        and other content you create in EMTape.
      </p>
      <p className="mb-6 text-muted">
        App content is primarily stored locally on your device based on the current product settings.
        You are responsible for maintaining your own copies of important data through backup or export
        features where available.
      </p>

      <h2 id="exports" className="mt-12 mb-4 text-2xl font-semibold">
        5. Exports, Sharing, and Backups
      </h2>
      <p className="mb-6 text-muted">
        EMTape includes export and backup-related controls. When you choose to export, share, print,
        or back up content, you are responsible for the destination, the recipients, and the handling
        of the resulting files.
      </p>
      <p className="mb-6 text-muted">
        We are not responsible for losses caused by third-party storage, message apps, printers,
        device settings, or accidental sharing choices made by the user.
      </p>

      <h2 id="acceptable-use" className="mt-12 mb-4 text-2xl font-semibold">
        6. Acceptable Use
      </h2>
      <p className="mb-4 text-muted">You may not:</p>
      <ul className="mb-6 text-muted">
        <li>Reverse engineer, copy, resell, or redistribute EMTape except where law requires otherwise</li>
        <li>Try to bypass trial, subscription, purchase, or entitlement controls</li>
        <li>Use EMTape in violation of law or to harm other people or systems</li>
        <li>Interfere with the website, app stability, or service infrastructure</li>
      </ul>

      <h2 id="updates" className="mt-12 mb-4 text-2xl font-semibold">
        7. Product Updates and Availability
      </h2>
      <p className="mb-6 text-muted">
        We may add, remove, rename, redesign, or suspend features at any time. This includes app
        settings, templates, finance shortcuts, export styles, subscription presentation, and website
        content.
      </p>
      <p className="mb-6 text-muted">
        We do not guarantee uninterrupted availability or compatibility with every operating system
        version, device, or region.
      </p>

      <h2 id="ownership" className="mt-12 mb-4 text-2xl font-semibold">
        8. Intellectual Property
      </h2>
      <p className="mb-6 text-muted">
        EMTape, including its name, logo, interface, branding, code, graphics, and written content,
        is owned by {CONFIG.companyLegalName} or its licensors and is protected by applicable law.
      </p>

      <h2 id="disclaimer" className="mt-12 mb-4 text-2xl font-semibold">
        9. Disclaimer and Limitation of Liability
      </h2>
      <p className="mb-6 text-muted">
        EMTape is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the fullest extent allowed by
        law. We disclaim warranties of merchantability, fitness for a particular purpose, accuracy,
        and non-infringement.
      </p>
      <p className="mb-6 text-muted">
        To the fullest extent permitted by law, {CONFIG.companyLegalName} is not liable for indirect,
        incidental, special, or consequential loss arising from use of the site or app, including
        loss of data, profit, business interruption, or incorrect decisions made from calculations.
      </p>

      <h2 id="law" className="mt-12 mb-4 text-2xl font-semibold">
        10. Governing Law
      </h2>
      <p className="mb-6 text-muted">
        These terms are governed by the laws of {CONFIG.governingJurisdiction}, without regard to
        conflict of law rules, subject to any mandatory consumer rights that apply where you live.
      </p>

      <h2 id="changes" className="mt-12 mb-4 text-2xl font-semibold">
        11. Changes to These Terms
      </h2>
      <p className="mb-6 text-muted">
        We may update these terms as the product, legal requirements, or store rules change. If we
        make material changes, we will update the effective date and may provide additional notice.
      </p>

      <h2 id="contact" className="mt-12 mb-4 text-2xl font-semibold">
        12. Contact
      </h2>
      <p className="mb-4 text-muted">Questions about these terms can be sent to:</p>
      <p className="mb-6 font-semibold">{CONFIG.supportEmail}</p>
    </LegalPageLayout>
  );
}
