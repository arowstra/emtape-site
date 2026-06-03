import Link from "next/link";
import { CONFIG } from "@/lib/config";

function isLiveUrl(url: string) {
  return /^https?:\/\//.test(url);
}

function StoreButton({ href, label, hint }: { href: string; label: string; hint: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-slate-900/10 bg-white px-5 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-md dark:border-white/10 dark:bg-slate-950"
    >
      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted">{hint}</span>
      <span className="mt-1 block text-sm font-semibold text-foreground">{label}</span>
    </a>
  );
}

export default function DownloadActions() {
  const appStoreReady = isLiveUrl(CONFIG.appStoreUrl);
  const googlePlayReady = isLiveUrl(CONFIG.googlePlayUrl);

  if (!appStoreReady && !googlePlayReady) {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/subscription"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          See plan details
        </Link>
        <Link
          href="/support"
          className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface dark:border-white/10 dark:bg-slate-950"
        >
          Request access or support
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {appStoreReady ? (
        <StoreButton href={CONFIG.appStoreUrl} label="App Store" hint="Download on the" />
      ) : null}
      {googlePlayReady ? (
        <StoreButton href={CONFIG.googlePlayUrl} label="Google Play" hint="Get it on" />
      ) : null}
    </div>
  );
}
