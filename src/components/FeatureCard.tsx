import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl bg-surface p-6 md:p-7 border border-border/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
