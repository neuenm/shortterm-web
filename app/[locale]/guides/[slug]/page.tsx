import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs";
import GetAppBand from "@/components/get-app-band";
import Icon from "@/components/listing-icons";
import { SectionHeader } from "@/components/listing-ui";
import RichText from "@/components/rich-text";
import { Link } from "@/i18n/navigation";
import { areaHref } from "@/lib/areas";
import { FEATURED_CITY_SLUGS, getCityContent } from "@/lib/cities";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/format";
import { GUIDES, getGuide, guideContent, guideHref } from "@/lib/guides";
import { absoluteUrl, jsonLd, pageAlternates, WEB_BASE_URL } from "@/lib/site";

// Every guide is known at build time, so all of them are prerendered and anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/guides/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const content = guideContent(guide, locale);
  const href = guideHref(slug);
  const title = `${content.title} | ShortTerm`;
  return {
    title,
    description: content.description,
    alternates: await pageAlternates(locale, href),
    openGraph: {
      type: "article",
      title: content.title,
      description: content.description,
      url: await absoluteUrl(locale, href),
      publishedTime: guide.published,
      modifiedTime: guide.updated,
    },
    twitter: { title: content.title, description: content.description },
  };
}

export default async function GuidePage({ params }: PageProps<"/[locale]/guides/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const guide = getGuide(slug);
  if (!guide) notFound();

  const t = await getTranslations("guides");
  const tNav = await getTranslations("nav");
  const content = guideContent(guide, locale);
  const href = guideHref(slug);
  const otherGuides = GUIDES.filter((other) => other.slug !== slug);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.description,
    inLanguage: locale,
    datePublished: guide.published,
    dateModified: guide.updated,
    mainEntityOfPage: await absoluteUrl(locale, href),
    image: `${WEB_BASE_URL}/og-${locale}.png`,
    author: { "@type": "Organization", name: "ShortTerm", url: WEB_BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "ShortTerm",
      logo: { "@type": "ImageObject", url: `${WEB_BASE_URL}/isotipo.png` },
    },
  };

  return (
    <div className="w-full bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(article) }} />
      <article className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-10">
        <header className="flex flex-col gap-4">
          <Breadcrumbs
            items={[
              { label: tNav("guides"), href: "/guides" },
              { label: content.title, href },
            ]}
            locale={locale}
          />
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{content.title}</h1>
          <p className="text-sm text-muted">
            {t("updated", { date: formatDate(guide.updated, locale, FULL_DATE_FORMAT) })}
          </p>
          <div className="flex flex-col gap-3 text-lg text-ink/80">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </header>

        <nav aria-label={t("tableOfContents")} className="rounded-2xl bg-warm-gray p-5">
          <p className="font-bold text-ink">{t("tableOfContents")}</p>
          <ol className="mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-sm">
            {content.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-ink hover:text-primary">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {content.sections.map((section) => (
          <section key={section.id} id={section.id} className="flex scroll-mt-8 flex-col gap-3">
            <h2 className="text-2xl font-extrabold text-ink">{section.heading}</h2>
            {section.body.map((block, index) =>
              typeof block === "string" ? (
                <p key={index} className="text-muted">
                  <RichText text={block} />
                </p>
              ) : (
                <ul key={index} className="flex list-disc flex-col gap-2 pl-5 text-muted">
                  {block.items.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}

        <footer className="flex flex-col gap-3 rounded-2xl border border-ink/10 p-5 text-sm text-muted">
          {content.sources.length > 0 ? (
            <>
              <p className="font-bold text-ink">{t("sources")}</p>
              <ul className="flex flex-col gap-1.5">
                {content.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <p>{t("sourcesNote")}</p>
        </footer>

        <section className="flex flex-col gap-4">
          <SectionHeader icon="place" title={t("citiesTitle")} />
          <ul className="flex flex-wrap gap-2">
            {FEATURED_CITY_SLUGS.map((citySlug) => (
              <li key={citySlug}>
                <Link
                  href={areaHref(citySlug)}
                  className="inline-flex rounded-full bg-warm-gray px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-primary"
                >
                  {getCityContent(citySlug, locale)?.name ?? citySlug}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <SectionHeader icon="article" title={t("moreGuides")} />
          <ul className="flex flex-col gap-2">
            {otherGuides.map((other) => (
              <li key={other.slug}>
                <Link
                  href={guideHref(other.slug)}
                  className="flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  {guideContent(other, locale).title}
                  <Icon name="chevronRight" className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <GetAppBand locale={locale} medium="guide" />
      </article>
    </div>
  );
}
