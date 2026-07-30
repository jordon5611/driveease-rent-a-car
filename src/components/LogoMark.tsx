interface LogoMarkProps {
  className?: string;
}

/**
 * The Elite Motors "E", drawn as three stacked bars. Solid shapes with no fine
 * detail keep it readable all the way down to a 16px favicon, and currentColor
 * lets it sit on any background.
 */
export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <rect x="4" y="4.8" width="16" height="3.6" rx="1.8" />
      <rect x="4" y="10.2" width="10.8" height="3.6" rx="1.8" />
      <rect x="4" y="15.6" width="16" height="3.6" rx="1.8" />
    </svg>
  );
}
