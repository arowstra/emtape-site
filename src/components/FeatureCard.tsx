import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  eyebrow?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  eyebrow,
}: FeatureCardProps) {
  return (
    <div className="card-surface group rounded-[1.75rem] p-6 md:p-7 transition-all hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(19,33,63,0.16)]">
      {eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </div>
      ) : null}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-7 text-muted">{description}</p>
    </div>
  );
}
