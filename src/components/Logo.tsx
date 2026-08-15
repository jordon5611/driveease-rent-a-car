import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

interface LogoProps {
  className?: string;
}

/** Wordmark used in the navbar and footer. */
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("group inline-flex items-center", className)}
    >
      <div className="relative h-12 w-48 transition-transform group-hover:scale-105">
        <Image
          src="/logo.png"
          alt={`${site.name} Logo`}
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
