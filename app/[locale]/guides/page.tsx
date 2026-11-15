import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs";
import Icon from "@/components/listing-icons";
import { SectionHeader } from "@/components/listing-ui";
import { Link } from "@/i18n/navigation";
import { GUIDES, guideContent, guideHref, type Guide } from "@/lib/guides";
import { absoluteUrl, pageAlternates } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/guides">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides" });
  const title = t("indexMetadataTitle");
  const description = t("indexMetadataDescription");
  return {
    title,
    description,
    alternates: await pageAlternates(locale, "/guides"),
    openGraph: { title, description, url: await absoluteUrl(locale, "/guides") },
  };
}

function GuideCard({ guide, locale, readLabel }: { guide: Guide; locale: string; readLabel: string }) {
  const content = guideContent(guide, locale);
  return (
    <Link
      href={guideHref(guide.slug)}
      className="flex h-full flex-col gap-2 rounded-2xl bg-warm-gray p-5 transition-transform hover:-translate-y-0.5"
    >
      <span className="text-lg font-bold leading-6 text-ink">{content.title}</span>
      <span className="text-sm text-muted">{content.description}</span>
      <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-semibold text-primary">
        {readLabel}
        <Icon name="chevronRight" className="h-4 w-4" />
      </span>
    </Link>
  );
}

export default async function GuidesPage({ params }: PageProps<"/[locale]/guides">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("guides");
  const tNav = await getTranslations("nav");

  const groups = [
    { title: t("forGuests"), guides: GUIDES.filter((guide) => guide.audience === "guest") },
    { title: t("forHosts"), guides: GUIDES.filter((guide) => guide.audience === "host") },
  ];

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-10">
        <header className="flex flex-col gap-4">
          <Breadcrumbs items={[{ label: tNav("guides"), href: "/guides" }]} locale={locale} />
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{t("indexTitle")}</h1>
          <p className="text-muted">{t("indexIntro")}</p>
        </header>
        {groups.map((group) => (
          <section key={group.title} className="flex flex-col gap-4">
            <SectionHeader icon="article" title={group.title} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.guides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} locale={locale} readLabel={t("readGuide")} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
