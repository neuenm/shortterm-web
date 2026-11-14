import Image from "next/image";

type PhoneMockupProps = {
  /** A real capture of the app, from public/app-screens/<locale>/. They're made by the app
   * repo's marketing/ pipeline (marketing/README.md), not by hand. */
  src: string;
  alt: string;
  /** For the one above the fold, so it isn't lazy-loaded after the page paints. */
  eager?: boolean;
  className?: string;
};

export default function PhoneMockup({ src, alt, eager = false, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[1320/2868] w-56 shrink-0 overflow-hidden rounded-[2.25rem] border-[6px] border-ink bg-cream shadow-xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="224px"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="object-cover object-top"
      />
      {/* Dynamic Island, sized off the 6.9" iPhone the captures come from. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[5px] z-10 h-[18px] w-[61px] -translate-x-1/2 rounded-full bg-ink"
      />
    </div>
  );
}
