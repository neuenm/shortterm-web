import type { Locale } from "@/lib/site";

// A paragraph, or a bulleted list. Inline markup (rendered by components/rich-text.tsx):
// **bold** and [text](href), where an href starting with "/" is a page of this site (localized)
// and anything else opens in a new tab.
export type GuideBlock = string | { items: string[] };

export type GuideSection = {
  // The section's #anchor, the same in every language.
  id: string;
  heading: string;
  body: GuideBlock[];
};

export type GuideContent = {
  title: string;
  // The meta description and the guide's card on /guides.
  description: string;
  intro: string[];
  sections: GuideSection[];
  // Official pages the guide relies on, shown at the end.
  sources: { label: string; url: string }[];
};

export type Guide = {
  // The address (/guides/<slug>), in English for every language.
  slug: string;
  audience: "guest" | "host";
  // ISO dates. Bump `updated` whenever the content changes: it's the date the page shows and
  // what the sitemap and the Article structured data report.
  published: string;
  updated: string;
} & Record<Locale, GuideContent>;
