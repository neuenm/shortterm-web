import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { absoluteUrl, jsonLd } from "@/lib/site";

export type Crumb = { label: string; href: string };

// The visible trail ("Home › Rooms › Brisbane") plus its BreadcrumbList structured data, which is
// what Google shows instead of the raw URL under the result. The last crumb is the current page.
export default async function Breadcrumbs({ items, locale }: { items: Crumb[]; locale: string }) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const trail: Crumb[] = [{ label: t("home"), href: "/" }, ...items];
  const itemListElement = await Promise.all(
    trail.map(async (crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: await absoluteUrl(locale, crumb.href),
    })),
  );

  return (
    <nav aria-label={t("breadcrumbLabel")} className="text-sm text-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement }),
        }}
      />
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-ink">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link href={crumb.href} className="hover:text-primary">
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true">›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
