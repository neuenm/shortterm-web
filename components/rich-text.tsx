import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

// The guides' inline markup: **bold** and [text](href). An href starting with "/" is a page of this
// site and goes through the localized Link (so /rooms/brisbane becomes /es/rooms/brisbane on the
// Spanish guide); anything else is an outside page, opened in a new tab.
const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
const LINK_CLASS = "font-semibold text-primary hover:underline";

export default function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const [, bold, label, href] = match;
    if (bold !== undefined) {
      nodes.push(
        <strong key={index} className="font-semibold text-ink">
          {bold}
        </strong>,
      );
    } else if (href.startsWith("/")) {
      nodes.push(
        <Link key={index} href={href} className={LINK_CLASS}>
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {label}
        </a>,
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
