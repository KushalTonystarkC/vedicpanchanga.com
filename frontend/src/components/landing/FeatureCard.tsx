import { MandalaMark } from "@/components/common/MandalaMark";
import type { View } from "@/App";

type FeatureCardProps = {
  view: View;
  href: string;
  title: string;
  description: string;
  badge?: string;
  openLabel: string;
  icon: "panchang" | "kundali" | "muhurta" | "transits" | "frequency";
  onNavigate: (view: View) => void;
};

function FeatureIcon({ kind }: { kind: FeatureCardProps["icon"] }) {
  const cls = "text-saffron";
  switch (kind) {
    case "panchang":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={cls}
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <circle cx="12" cy="15" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "kundali":
      return <MandalaMark size={28} />;
    case "muhurta":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={cls}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "transits":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={cls}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
          <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "frequency":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={cls}
          aria-hidden="true"
        >
          <path d="M4 12h2l2-6 4 12 2-6h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function FeatureCard({
  view,
  href,
  title,
  description,
  badge,
  openLabel,
  icon,
  onNavigate,
}: FeatureCardProps) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <a
      href={href}
      data-testid={`landing-card-${view}`}
      onClick={onClick}
      className="card card-lift group flex flex-col gap-3 p-5 sm:p-6 no-underline text-ink hover:border-saffron/40 focus:outline-hidden focus:ring-2 focus:ring-saffron/30 min-h-[140px]"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-md bg-saffron/10 shrink-0"
          aria-hidden="true"
        >
          <FeatureIcon kind={icon} />
        </div>
        {badge && (
          <span className="text-micro font-semibold uppercase tracking-wide text-saffron bg-saffron/10 px-2 py-0.5 rounded-sm shrink-0">
            {badge}
          </span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lead text-ink group-hover:text-saffron transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-meta text-ink-soft leading-relaxed">{description}</p>
      </div>
      <span className="text-meta font-semibold text-saffron inline-flex items-center gap-1.5 mt-auto">
        {openLabel}
        <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
