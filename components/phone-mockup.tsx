type PhoneMockupProps = {
  variant: "listing" | "chat";
  className?: string;
};

export default function PhoneMockup({ variant, className = "" }: PhoneMockupProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[9/19] w-56 shrink-0 overflow-hidden rounded-[2.25rem] border-[6px] border-ink bg-cream shadow-xl ${className}`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink" />
      {variant === "listing" ? <ListingScreen /> : <ChatScreen />}
    </div>
  );
}

function ListingScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="relative aspect-[4/3] w-full shrink-0 bg-gradient-to-br from-primary via-primary-light to-secondary">
        <span className="absolute right-3 top-8 flex h-7 w-7 items-center justify-center rounded-full bg-cream/90 text-accent">
          <HeartIcon />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="h-3 w-3/4 rounded-full bg-ink/15" />
        <div className="h-2.5 w-1/2 rounded-full bg-ink/10" />
        <div className="mt-1 flex gap-2">
          <span className="h-5 w-16 rounded-full bg-warm-gray" />
          <span className="h-5 w-14 rounded-full bg-warm-gray" />
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="h-4 w-20 rounded-full bg-secondary/40" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-cream">
            <ChatIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4 pt-9">
      <div className="flex items-center gap-2 border-b border-ink/5 pb-3">
        <span className="h-8 w-8 rounded-full bg-secondary" />
        <div className="flex flex-col gap-1.5">
          <div className="h-2.5 w-20 rounded-full bg-ink/15" />
          <div className="h-2 w-12 rounded-full bg-success/40" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2">
        <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-warm-gray px-3 py-2">
          <div className="h-2 w-24 rounded-full bg-ink/20" />
        </div>
        <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm bg-primary px-3 py-2">
          <div className="h-2 w-16 rounded-full bg-cream/70" />
        </div>
        <div className="max-w-[60%] rounded-2xl rounded-bl-sm bg-warm-gray px-3 py-2">
          <div className="h-2 w-20 rounded-full bg-ink/20" />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-warm-gray px-3 py-2">
        <div className="h-2 flex-1 rounded-full bg-ink/10" />
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-cream">
          <SendIcon />
        </span>
      </div>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 20.3 4.9 13.4C2.7 11.3 2.7 8 4.9 6c2-1.8 4.9-1.4 6.6.5l.5.6.5-.6c1.7-1.9 4.6-2.3 6.6-.5 2.2 2 2.2 5.3 0 7.4L12 20.3z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4 5h16v10H9l-4 4v-4H4z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}
