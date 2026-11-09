import { headers } from "next/headers";

export type Platform = "ios" | "android" | "other";

// Picks which store a visitor is sent to. iPadOS Safari reports a desktop (Mac) user agent,
// so it lands on "other" and gets both badges, which is fine.
export async function getPlatform(): Promise<Platform> {
  const userAgent = (await headers()).get("user-agent") ?? "";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return "other";
}
