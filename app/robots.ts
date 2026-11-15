import type { MetadataRoute } from "next";
import { WEB_BASE_URL } from "@/lib/site";

// Everything is crawlable, listing pages included: they carry noindex themselves, and a crawler
// has to read them to see it and to follow their links to the area pages. Blocking them here
// would hide the noindex and leave their URLs in results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${WEB_BASE_URL}/sitemap.xml`,
  };
}
