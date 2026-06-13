import type { Metadata } from "next";
import ScreenshotPhone from "@/components/ScreenshotPhone";
import { CONFIG } from "@/lib/config";
import { SCREENSHOTS } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EmTape for product questions, support requests, subscription help, and privacy-related enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="section-kicker">Contact</div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Contact the team behind EmTape.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Use email for support requests, subscription questions, privacy enquiries, or rollout
            questions about the EmTape calculator app and website.
          </p>

          <div className="mt-8 rounded-[2rem] border border-border/70 bg-surface p-8 shadow-[0_18px_50px_rgba(19,33,63,0.08)] md:p-10">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Support email
            </div>
            <a
              href={`mailto:${CONFIG.supportEmail}`}
              className="mt-3 inline-block text-2xl font-semibold tracking-tight text-foreground underline underline-offset-4"
            >
              {CONFIG.supportEmail}
            </a>
            <p className="mt-5 text-sm leading-7 text-muted">
              Please include your device, app version, store platform, and a short explanation of the
              issue or request.
            </p>
          </div>

          <ul className="mt-8 space-y-3 text-sm leading-7 text-muted">
            <li>Good to include: screenshots, screen recordings, document or template names, and export setting details.</li>
            <li>Do not include: passwords, payment card numbers, PIN codes, or sensitive financial records.</li>
            <li>For legal or privacy questions, say whether your question is about the website or the mobile app.</li>
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <ScreenshotPhone
            src={SCREENSHOTS.actionsMenu.src}
            alt={SCREENSHOTS.actionsMenu.alt}
            caption="The app includes export, duplicate, move, save as template, pin, and delete controls."
          />
          <ScreenshotPhone
            src={SCREENSHOTS.settingsPlanLegal.src}
            alt={SCREENSHOTS.settingsPlanLegal.alt}
            caption="Support, privacy, and terms are also reachable from inside the app settings."
          />
        </div>
      </div>
    </div>
  );
}
