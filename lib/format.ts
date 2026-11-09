// Mirrors the app's src/lib/date.ts: listing dates are plain `YYYY-MM-DD` columns, so they're
// parsed and formatted in UTC — otherwise the server's timezone can shift them by a day.
function parseISODate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function formatDate(
  value: string,
  locale: string,
  options: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(locale, { ...options, timeZone: "UTC" }).format(
    parseISODate(value),
  );
}

// Same formats as the app's formatListingAvailability (src/lib/listing-availability.ts).
export const START_DATE_FORMAT: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
export const FULL_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
