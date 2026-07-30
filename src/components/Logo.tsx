import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/** Wordmark used in the navbar and footer. */
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Orange Rent Car Services home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand font-display text-lg font-bold text-white shadow-brand transition-transform group-hover:scale-105">
        O
      </span>
      <span className="font-display text-base font-bold leading-tight text-white sm:text-lg">
        Orange <span className="text-brand-400">Rent Car</span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-navy-400">
          Services
        </span>
      </span>
    </Link>
  );
}
