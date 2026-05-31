import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
  toc?: { id: string; label: string }[];
}

export default function LegalPageLayout({ title, children, toc }: LegalPageLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <article className="prose max-w-none">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">{title}</h1>
          {children}
        </article>

        {toc && toc.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl bg-surface border border-border/60 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                On this page
              </h2>
              <nav className="flex flex-col gap-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm text-muted hover:text-foreground transition-colors py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
