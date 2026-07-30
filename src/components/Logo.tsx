import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoMark from "./LogoMark";
import { site } from "@/lib/site";

interface LogoProps {
  className?: string;
}

/** Wordmark used in the navbar and footer, both of which sit on dark. */
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-brand transition-transform group-hover:scale-105">
        <LogoMark className="h-5 w-5" />
      </span>
      <span className="font-display text-base font-bold leading-tight text-white sm:text-lg">
        Elite <span className="text-brand-400">Motors</span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-navy-400">
          {site.city}
        </span>
      </span>
    </Link>
  );
}
