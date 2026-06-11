import { MandalaMark } from "@/components/common/MandalaMark";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { useI18n } from "@/i18n";
import type { View } from "@/App";

type LandingPageProps = {
  onNavigate: (view: View) => void;
};

export function LandingPage({ onNavigate }: LandingPageProps) {
  const { t } = useI18n();

  const tools: {
    view: View;
    href: string;
    titleKey: string;
    descKey: string;
    icon: "panchang" | "kundali" | "muhurta" | "transits" | "frequency";
    badge?: string;
  }[] = [
    {
      view: "panchang",
      href: "/panchang",
      titleKey: "nav_panchang",
      descKey: "landing_feature_panchang_desc",
      icon: "panchang",
      badge: t("landing_popular"),
    },
    {
      view: "kundali",
      href: "/kundali",
      titleKey: "nav_kundali",
      descKey: "landing_feature_kundali_desc",
      icon: "kundali",
    },
    {
      view: "muhurta",
      href: "/muhurta",
      titleKey: "nav_muhurta",
      descKey: "landing_feature_muhurta_desc",
      icon: "muhurta",
    },
    {
      view: "transits",
      href: "/transits",
      titleKey: "nav_transits",
      descKey: "landing_feature_transits_desc",
      icon: "transits",
    },
    {
      view: "frequency",
      href: "/frequency",
      titleKey: "nav_frequency",
      descKey: "landing_feature_frequency_desc",
      icon: "frequency",
    },
  ];

  const onHeroClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate("panchang");
  };

  const steps = [
    { titleKey: "landing_step_1_title", descKey: "landing_step_1_desc" },
    { titleKey: "landing_step_2_title", descKey: "landing_step_2_desc" },
    { titleKey: "landing_step_3_title", descKey: "landing_step_3_desc" },
  ];

  return (
    <section data-testid="landing-page" className="pt-4 sm:pt-6 pb-10 space-y-10 sm:space-y-12">
      {/* Hero */}
      <div className="card p-6 sm:p-8 lg:p-10 text-center">
        <div className="flex justify-center mb-4">
          <MandalaMark size={48} />
        </div>
        <p className="eyebrow-accent">{t("landing_eyebrow")}</p>
        <h1 className="heading-page mt-2 max-w-2xl mx-auto">{t("landing_title")}</h1>
        <p className="mt-3 text-body text-ink-soft max-w-xl mx-auto leading-relaxed">
          {t("landing_subtitle")}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/panchang"
            data-testid="landing-cta-panchang"
            onClick={onHeroClick}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-md bg-saffron text-white font-semibold text-meta no-underline hover:bg-saffron-dark focus:outline-hidden focus:ring-2 focus:ring-saffron/40 transition-colors w-full sm:w-auto"
          >
            {t("landing_cta_panchang")}
          </a>
        </div>
        <p className="mt-3 text-mini text-ink-muted">{t("landing_cta_panchang_sub")}</p>
      </div>

      {/* Tool grid */}
      <div>
        <div className="mb-5 sm:mb-6 text-center sm:text-start">
          <h2 className="text-lead font-semibold text-ink">{t("landing_tools_title")}</h2>
          <p className="mt-1 text-meta text-ink-soft">{t("landing_tools_sub")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <FeatureCard
              key={tool.view}
              view={tool.view}
              href={tool.href}
              title={t(tool.titleKey)}
              description={t(tool.descKey)}
              badge={tool.badge}
              openLabel={t("landing_open_tool")}
              icon={tool.icon}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="card p-6 sm:p-8">
        <h2 className="text-lead font-semibold text-ink text-center sm:text-start">
          {t("landing_how_title")}
        </h2>
        <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <li key={step.titleKey} className="flex gap-4 md:flex-col md:gap-3">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full bg-saffron/15 text-saffron font-bold text-lead shrink-0"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-body text-ink">{t(step.titleKey)}</h3>
                <p className="mt-1 text-meta text-ink-soft leading-relaxed">{t(step.descKey)}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 pt-5 border-t border-parchment-200 text-center text-meta text-ink-soft">
          {t("landing_free")}
        </p>
      </div>
    </section>
  );
}
