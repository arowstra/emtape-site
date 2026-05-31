import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: `Privacy Policy — ${CONFIG.appName}`,
  description:
    "Learn how EmTape handles subscription data through RevenueCat and crash diagnostics through Sentry.",
  openGraph: {
    title: `Privacy Policy — ${CONFIG.appName}`,
    description:
      "Learn how EmTape handles subscription data through RevenueCat and crash diagnostics through Sentry.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy — ${CONFIG.appName}`,
    description:
      "Learn how EmTape handles subscription data through RevenueCat and crash diagnostics through Sentry.",
  },
};

const toc = [
  { id: "information-we-collect", label: "1. Information We Collect" },
  { id: "information-we-do-not-collect", label: "2. Information We Do Not Collect" },
  { id: "how-we-use-information", label: "3. How We Use Information" },
  { id: "subscription-and-payment", label: "4. Subscription and Payment Processing" },
  { id: "third-party-services", label: "5. Third-Party Services We Use" },
  { id: "sharing", label: "6. Sharing of Information" },
  { id: "data-retention", label: "7. Data Retention" },
  { id: "your-choices", label: "8. Your Choices and Controls" },
  { id: "childrens-privacy", label: "9. Children's Privacy" },
  { id: "international", label: "10. International Data Processing" },
  { id: "security", label: "11. Security" },
  { id: "no-advertising", label: "12. No Advertising Tracking" },
  { id: "changes", label: "13. Changes to This Privacy Policy" },
  { id: "contact", label: "14. Contact Us" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" toc={toc}>
      <div className="mb-10 text-sm text-muted space-y-1">
        <p><strong>Effective Date:</strong> {CONFIG.launchDate}</p>
        <p><strong>App Name:</strong> {CONFIG.appName}</p>
        <p><strong>Website:</strong> {CONFIG.websiteUrl}</p>
        <p><strong>Contact:</strong> {CONFIG.supportEmail}</p>
      </div>

      <p className="mb-8 text-muted">
        This Privacy Policy explains how EmTape collects, uses, discloses, and protects
        information when you use the EmTape mobile application and related website.
      </p>

      <p className="mb-8 text-muted">
        EmTape is a calculator and paper tape productivity app. We believe your calculations
        should remain private. We do not sell your personal data, we do not use advertising
        trackers, and we do not collect your calculation contents for marketing.
      </p>

      <h2 id="information-we-collect" className="text-2xl font-semibold mt-12 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-6 text-muted">
        EmTape is designed to collect as little information as possible.
      </p>
      <p className="mb-6 text-muted">
        We may collect or process the following limited categories of information:
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">1.1 Purchase and Subscription Information</h3>
      <p className="mb-4 text-muted">
        EmTape uses RevenueCat to manage subscriptions, free trial status, purchase validation,
        entitlement access, and purchase restoration.
      </p>
      <p className="mb-4 text-muted">RevenueCat may process information such as:</p>
      <ul className="mb-6 text-muted">
        <li>App user identifier or anonymous customer identifier</li>
        <li>Subscription status</li>
        <li>Product identifier</li>
        <li>Purchase date</li>
        <li>Expiration date</li>
        <li>Renewal status</li>
        <li>Trial status</li>
        <li>Store receipt or purchase token</li>
        <li>App platform, such as iOS or Android</li>
        <li>Country or region information provided by the app store where applicable</li>
      </ul>
      <p className="mb-6 text-muted">
        We use this information only to determine whether you have access to EmTape&apos;s paid
        features, free trial, or subscription.
      </p>
      <p className="mb-6 text-muted">
        We do not receive or store your full credit card number, bank account details, or
        payment card security code. Payment processing is handled by Apple App Store or Google
        Play, depending on where you downloaded the app.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">1.2 Crash, Error, and Diagnostic Information</h3>
      <p className="mb-4 text-muted">
        EmTape uses Sentry to help us detect crashes, errors, bugs, performance issues, and
        stability problems.
      </p>
      <p className="mb-4 text-muted">Sentry may process diagnostic information such as:</p>
      <ul className="mb-6 text-muted">
        <li>App version</li>
        <li>Device model</li>
        <li>Operating system version</li>
        <li>Error logs</li>
        <li>Crash reports</li>
        <li>Performance information</li>
        <li>Time of error</li>
        <li>Screen or app area where an error occurred</li>
        <li>Technical breadcrumbs leading to a crash</li>
        <li>Network or device metadata such as IP address where automatically processed by the service</li>
      </ul>
      <p className="mb-6 text-muted">
        We use this information only to fix bugs, improve app stability, improve performance,
        and protect the reliability of the app.
      </p>
      <p className="mb-6 text-muted">
        We do not intentionally send calculator tape contents, calculation history, PIN codes,
        passwords, payment card details, or sensitive personal information to Sentry.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">1.3 Information You Provide When Contacting Support</h3>
      <p className="mb-4 text-muted">
        If you contact us by email or through a support link, we may receive the information
        you choose to provide, such as:
      </p>
      <ul className="mb-6 text-muted">
        <li>Your email address</li>
        <li>Your name, if included</li>
        <li>Your message</li>
        <li>Screenshots or files you choose to send</li>
        <li>Details about the issue you are reporting</li>
      </ul>
      <p className="mb-6 text-muted">
        We use this information only to respond to your request and provide support.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">1.4 Information Stored Locally on Your Device</h3>
      <p className="mb-4 text-muted">
        Some information may be stored locally on your device to make the app work properly.
        This may include:
      </p>
      <ul className="mb-6 text-muted">
        <li>Calculator history</li>
        <li>Tape entries</li>
        <li>App preferences</li>
        <li>Theme settings</li>
        <li>Currency symbol settings</li>
        <li>Local security settings</li>
        <li>Other app settings</li>
      </ul>
      <p className="mb-6 text-muted">
        Local data is generally stored on your device and is not sold or used for advertising.
        If you delete the app, local data may be deleted depending on your device settings and
        operating system behavior.
      </p>

      <h2 id="information-we-do-not-collect" className="text-2xl font-semibold mt-12 mb-4">
        2. Information We Do Not Collect
      </h2>
      <p className="mb-4 text-muted">EmTape does not intentionally collect:</p>
      <ul className="mb-6 text-muted">
        <li>Your contacts</li>
        <li>Your photos or videos</li>
        <li>Your precise GPS location</li>
        <li>Your microphone recordings</li>
        <li>Your camera content</li>
        <li>Your messages</li>
        <li>Your bank login details</li>
        <li>Your card number</li>
        <li>Your PIN code</li>
        <li>Your biometric data</li>
        <li>Your calculation content for advertising</li>
        <li>Your calculation history for resale</li>
        <li>Advertising identifiers for tracking</li>
        <li>Data for third-party ad networks</li>
      </ul>

      <h2 id="how-we-use-information" className="text-2xl font-semibold mt-12 mb-4">
        3. How We Use Information
      </h2>
      <p className="mb-4 text-muted">
        We use the limited information described above to:
      </p>
      <ul className="mb-6 text-muted">
        <li>Provide access to free trial and subscription features</li>
        <li>Validate purchases</li>
        <li>Restore purchases</li>
        <li>Prevent subscription errors</li>
        <li>Fix crashes and bugs</li>
        <li>Improve app performance and reliability</li>
        <li>Respond to support requests</li>
        <li>Maintain app security</li>
        <li>Comply with legal, platform, and App Store requirements</li>
      </ul>
      <p className="mb-6 text-muted">
        We do not use your information to build advertising profiles.
      </p>

      <h2 id="subscription-and-payment" className="text-2xl font-semibold mt-12 mb-4">
        4. Subscription and Payment Processing
      </h2>
      <p className="mb-6 text-muted">
        EmTape subscriptions are processed by Apple App Store or Google Play.
      </p>
      <p className="mb-6 text-muted">
        We do not directly process your payment card information. Your purchase, renewal,
        cancellation, and refund rights are handled by the app store where you made the
        purchase.
      </p>
      <p className="mb-6 text-muted">
        RevenueCat helps us verify your subscription status and determine whether your app
        access should be active.
      </p>

      <h2 id="third-party-services" className="text-2xl font-semibold mt-12 mb-4">
        5. Third-Party Services We Use
      </h2>
      <p className="mb-6 text-muted">
        EmTape uses the following service providers:
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">RevenueCat</h3>
      <p className="mb-4 text-muted">Purpose:</p>
      <ul className="mb-6 text-muted">
        <li>Subscription management</li>
        <li>Purchase validation</li>
        <li>Free trial and entitlement status</li>
        <li>Restore purchases</li>
      </ul>

      <h3 className="text-lg font-semibold mt-8 mb-3">Sentry</h3>
      <p className="mb-4 text-muted">Purpose:</p>
      <ul className="mb-6 text-muted">
        <li>Crash reporting</li>
        <li>Error monitoring</li>
        <li>Performance diagnostics</li>
        <li>App stability improvement</li>
      </ul>
      <p className="mb-6 text-muted">
        These providers may process data according to their own privacy and security practices.
        We use them only for the limited purposes described in this Privacy Policy.
      </p>

      <h2 id="sharing" className="text-2xl font-semibold mt-12 mb-4">
        6. Sharing of Information
      </h2>
      <p className="mb-6 text-muted">We do not sell your personal information.</p>
      <p className="mb-4 text-muted">
        We may share limited information only in these cases:
      </p>
      <ul className="mb-6 text-muted">
        <li>With RevenueCat for subscription management</li>
        <li>With Sentry for crash/error diagnostics</li>
        <li>With Apple or Google as part of app store purchase processing</li>
        <li>If required by law, regulation, legal process, or government request</li>
        <li>To protect the rights, safety, and security of EmTape, users, or others</li>
        <li>In connection with a business transfer such as merger, acquisition, or sale of assets, if applicable</li>
      </ul>

      <h2 id="data-retention" className="text-2xl font-semibold mt-12 mb-4">
        7. Data Retention
      </h2>
      <p className="mb-6 text-muted">
        We keep information only for as long as needed for the purposes described in this
        Privacy Policy.
      </p>
      <p className="mb-6 text-muted">
        Subscription-related records may be retained as needed to verify purchase status,
        restore purchases, comply with app store rules, resolve disputes, and meet legal or
        accounting obligations.
      </p>
      <p className="mb-6 text-muted">
        Crash and diagnostic data is retained for a limited period as configured in Sentry and
        used to investigate and fix technical issues.
      </p>
      <p className="mb-6 text-muted">
        Support emails may be retained for as long as needed to resolve your request and
        maintain support records.
      </p>

      <h2 id="your-choices" className="text-2xl font-semibold mt-12 mb-4">
        8. Your Choices and Controls
      </h2>
      <p className="mb-4 text-muted">You can:</p>
      <ul className="mb-6 text-muted">
        <li>Cancel subscriptions through Apple App Store or Google Play</li>
        <li>Restore purchases inside the app where supported</li>
        <li>Delete local app data by using app settings where available or deleting the app</li>
        <li>Contact us to request help with privacy-related questions</li>
        <li>Contact us to request deletion of support communications or data associated with your request, where legally and technically possible</li>
      </ul>
      <p className="mb-6 text-muted">
        Because some purchase records are controlled by Apple, Google, or RevenueCat, we may
        not be able to delete all app store transaction records directly, but we can guide you
        to the correct platform process.
      </p>

      <h2 id="childrens-privacy" className="text-2xl font-semibold mt-12 mb-4">
        9. Children&apos;s Privacy
      </h2>
      <p className="mb-6 text-muted">
        EmTape is a general utility calculator app and is not directed to children under 13.
      </p>
      <p className="mb-6 text-muted">
        We do not knowingly collect personal information from children under 13. If you believe
        a child has provided us with personal information, please contact us and we will take
        appropriate steps to delete it where required.
      </p>

      <h2 id="international" className="text-2xl font-semibold mt-12 mb-4">
        10. International Data Processing
      </h2>
      <p className="mb-6 text-muted">
        Our service providers may process information in countries other than your country of
        residence. These countries may have data protection laws that differ from those in your
        location.
      </p>
      <p className="mb-6 text-muted">
        By using EmTape, you understand that limited technical and subscription-related
        information may be processed by our service providers for the purposes described in
        this Privacy Policy.
      </p>

      <h2 id="security" className="text-2xl font-semibold mt-12 mb-4">
        11. Security
      </h2>
      <p className="mb-6 text-muted">
        We take reasonable steps to protect information processed through EmTape. However, no
        method of electronic transmission or storage is completely secure. We cannot guarantee
        absolute security.
      </p>
      <p className="mb-6 text-muted">
        We aim to minimize the information we collect so that unnecessary personal data is not
        processed.
      </p>

      <h2 id="no-advertising" className="text-2xl font-semibold mt-12 mb-4">
        12. No Advertising Tracking
      </h2>
      <p className="mb-6 text-muted">
        EmTape does not use third-party advertising networks, behavioral advertising trackers,
        or data brokers.
      </p>
      <p className="mb-6 text-muted">We do not sell personal information.</p>

      <h2 id="changes" className="text-2xl font-semibold mt-12 mb-4">
        13. Changes to This Privacy Policy
      </h2>
      <p className="mb-6 text-muted">
        We may update this Privacy Policy from time to time. If we make material changes, we
        will update the effective date and may provide additional notice where appropriate.
      </p>
      <p className="mb-6 text-muted">
        Your continued use of EmTape after an update means you accept the updated Privacy
        Policy.
      </p>

      <h2 id="contact" className="text-2xl font-semibold mt-12 mb-4">
        14. Contact Us
      </h2>
      <p className="mb-4 text-muted">
        For privacy questions, support requests, or data-related requests, contact us at:
      </p>
      <p className="mb-6 font-semibold">{CONFIG.supportEmail}</p>
    </LegalPageLayout>
  );
}
