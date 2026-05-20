import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Selected press and features for Jude Jowilson, luxury wedding designer in New York — Vogue, Brides, Style Me Pretty, The Knot, Harper's Bazaar and more.",
  alternates: { canonical: "/press" },
};

const logos = [
  { name: "VOGUE", className: "font-serif text-2xl md:text-[1.7rem] font-medium tracking-[0.14em]" },
  { name: "BRIDES", className: "font-serif text-xl md:text-2xl tracking-[0.3em]" },
  { name: "Style Me Pretty", className: "font-serif text-lg md:text-xl italic tracking-wide" },
  { name: "the knot", className: "font-sans text-lg md:text-xl lowercase tracking-[0.2em]" },
  { name: "BAZAAR", className: "font-serif text-xl md:text-2xl tracking-[0.34em]" },
  { name: "INSIDE WEDDINGS", className: "font-serif text-base md:text-lg tracking-[0.28em]" },
];

const features = [
  {
    pub: "Vogue Weddings",
    year: "2025",
    quote: "A New York designer redefining quiet luxury, one impossibly considered celebration at a time.",
  },
  {
    pub: "Harper's Bazaar",
    year: "2024",
    quote: "Restraint as a love language — Jowilson's weddings feel less designed than discovered.",
  },
  {
    pub: "Brides",
    year: "2024",
    quote: "The detail is staggering, yet nothing shouts. This is what modern bridal elegance looks like.",
  },
  {
    pub: "Inside Weddings",
    year: "2023",
    quote: "An atelier for couples who want their day to feel like the truest version of themselves.",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="In the Press"
        title="Recognised for the"
        titleItalic="Quiet Details"
        lede="A selection of features from the publications we are proud to be part of."
      />

      {/* Logo row */}
      <section className="border-y border-ink/[0.08] bg-bone px-6 py-14 md:px-12 md:py-16">
        <ul className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-16">
          {logos.map((l) => (
            <li key={l.name} className={`${l.className} text-ink/40`}>
              {l.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Feature quotes */}
      <section className="bg-cream px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="border-t border-ink/[0.1]">
            {features.map((f, i) => (
              <Reveal key={f.pub} delay={i * 0.06}>
                <figure className="grid grid-cols-1 gap-5 border-b border-ink/[0.1] py-12 md:grid-cols-12 md:gap-8 md:py-16">
                  <figcaption className="md:col-span-4">
                    <p className="font-serif text-2xl text-ink">{f.pub}</p>
                    <p className="mt-2 font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-deep">
                      {f.year}
                    </p>
                  </figcaption>
                  <blockquote className="md:col-span-8">
                    <p className="font-serif text-[clamp(1.4rem,2.6vw,2rem)] font-light italic leading-snug text-cocoa">
                      &ldquo;{f.quote}&rdquo;
                    </p>
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
