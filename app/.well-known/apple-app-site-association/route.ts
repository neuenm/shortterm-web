import { NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

// Listing pages open in the app. With `localePrefix: "as-needed"` a listing lives at
// `/listing/<id>` in the default locale and at `/<locale>/listing/<id>` in every other one (what
// a Spanish visitor copies from the address bar), so both forms are listed. Android's twin is the
// app's `app.json` `intentFilters`, which needs the same prefixes.
const LISTING_PATHS = ["/listing/*", ...routing.locales.map((locale) => `/${locale}/listing/*`)];

export function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "VND9R25496.com.neuenm.shortterm",
          paths: LISTING_PATHS,
        },
      ],
    },
  });
}
