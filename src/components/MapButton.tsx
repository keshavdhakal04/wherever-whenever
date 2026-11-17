import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface MapButtonProps {
  href: string | null;
  app: "Apple Maps" | "Google Maps";
  icon: LucideIcon;
  variant: "solid" | "outline";
}

const BASE =
  "group relative flex min-h-14 w-full items-center justify-between gap-4 rounded-[3px] px-5 text-[0.9375rem] font-medium tracking-[0.01em] " +
  "transition-[background-color,border-color,color,transform] duration-300 ease-out " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze sm:w-auto sm:min-w-[17rem]";

const VARIANTS = {
  solid:
    "border border-charcoal bg-charcoal text-ivory hover:-translate-y-px hover:bg-[#3a3a35] active:translate-y-0 active:bg-black",
  outline:
    "border border-charcoal/35 text-charcoal hover:-translate-y-px hover:border-charcoal hover:bg-sand active:translate-y-0 active:bg-[#dfdacf]",
} as const;

export function MapButton({ href, app, icon: Icon, variant }: MapButtonProps) {
  const content = (
    <>
      <span className="flex items-center gap-3">
        <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
        Open in {app}
      </span>
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </>
  );

  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        className={`${BASE} cursor-not-allowed border border-charcoal/20 text-charcoal/40`}
      >
        {content}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${BASE} ${VARIANTS[variant]}`}>
      {content}
    </a>
  );
}
