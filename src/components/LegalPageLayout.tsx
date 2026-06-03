import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
  toc?: { id: string; label: string }[];
}

export default function LegalPageLayout({ title, children, toc }: LegalPageLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="prose max-w-none rounded-[2rem] border border-border/70 bg-surface px-6 py-8 shadow-[0_18px_50px_rgba(19,33,63,0.08)] md:px-10 md:py-12">
          <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {children}
        </article>

        {toc && toc.length > 0 ? (
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[1.75rem] border border-border/70 bg-surface p-6 shadow-[0_12px_40px_rgba(19,33,63,0.08)]">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                On this page
              </h2>
              <nav className="flex flex-col gap-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
