import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Contact — ${CONFIG.appName}`,
  description: "Contact EmTape support for help, privacy questions, and subscription issues.",
  openGraph: {
    title: `Contact — ${CONFIG.appName}`,
    description: "Contact EmTape support for help, privacy questions, and subscription issues.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact — ${CONFIG.appName}`,
    description: "Contact EmTape support for help, privacy questions, and subscription issues.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact EmTape</h1>
        <p className="mt-4 text-lg text-muted">
          For support, privacy questions, subscription issues, or general enquiries, contact us
          at:
        </p>
        <div className="mt-8">
          <a
            href={`mailto:${CONFIG.supportEmail}`}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-accent-hover transition-colors"
          >
            {CONFIG.supportEmail}
          </a>
        </div>
        <p className="mt-8 text-sm text-muted">
          Please do not include sensitive information such as payment card numbers, passwords,
          PIN codes, or private financial records.
        </p>
      </div>
    </div>
  );
}
