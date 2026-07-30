import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/**
 * Dark banner used at the top of inner pages, matching the home page hero.
 */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-14 pt-28 sm:pb-20 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-navy opacity-50 [background-size:48px_48px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-navy-400"
        >
          <Link href="/" className="transition-colors hover:text-brand-400">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-navy-300">{eyebrow}</span>
        </nav>

        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-300">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
