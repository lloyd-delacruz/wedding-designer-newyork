import Link from "next/link";

export default function Wordmark({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="New York Atelier — Wedding Designer, New York. Home"
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span
        className={`font-serif text-[1.35rem] md:text-[1.6rem] tracking-[0.16em] ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        NEW YORK ATELIER
      </span>
      <span
        className={`mt-1.5 font-sans text-[0.5rem] md:text-[0.55rem] font-light uppercase tracking-[0.42em] ${
          light ? "text-cream/60" : "text-muted"
        }`}
      >
        Wedding Designer&nbsp;·&nbsp;New York
      </span>
    </Link>
  );
}
