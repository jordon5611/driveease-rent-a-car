interface LogoMarkProps {
  className?: string;
}

/**
 * A sleek, modern geometric monogram for "Elite Motors" (E & M intertwined).
 * Designed for a premium dark theme. 
 * Using a sharp, aggressive aesthetic that implies speed and luxury.
 */
export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Outer Shield/Hexagon base */}
      <path
        d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* The 'E' and 'M' geometric shapes inside */}
      <path
        d="M16 8L10 12V20L16 24V16L22 20V12L16 8Z"
        fill="currentColor"
      />
      <path
        d="M8 14V17H13V14H8Z"
        fill="currentColor"
      />
    </svg>
  );
}
