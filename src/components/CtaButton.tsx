import type { ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "outline" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-brand-foreground hover:bg-brand-strong",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-strong",
  outline:
    "border border-foreground/25 text-foreground hover:border-brand hover:text-brand-strong",
  light: "bg-dark-foreground text-dark hover:bg-surface",
};

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function CtaButton({
  href,
  variant = "whatsapp",
  children,
  className = "",
}: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.43 15.1L2 22l5.05-1.32A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3 .78.8-2.92-.2-.3a8.2 8.2 0 1 1 6.88 3.76Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.09-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31c-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.54.12.16 1.72 2.63 4.17 3.69 1.55.67 2.15.73 2.92.62.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
