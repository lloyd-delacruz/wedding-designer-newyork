import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bridal Design",
  description:
    "A portfolio of bespoke bridal and wedding design by Jude Jowilson — Classic Romance, Modern Elegance, Timeless New York and Refined & Intimate.",
  alternates: { canonical: "/bridal" },
};

const collections = [
  {
    title: "Classic Romance",
    img: "/images/bridal-classic.jpg",
    alt: "Bride in an off-the-shoulder gown holding a soft bouquet in natural light",
    body: "Soft, flowing silhouettes and unhurried light. A timeless register for the couple who wants their day to feel warm, generous and a little old-world.",
    tags: ["Soft palettes", "Garden florals", "Candlelight"],
  },
  {
    title: "Modern Elegance",
    img: "/images/bridal-modern.jpg",
    alt: "Bride in a fitted open-back gown beside a sculptural floral arrangement",
    body: "Clean lines, sculptural florals and a confident sense of restraint. Architectural design for the couple drawn to the contemporary and the precise.",
    tags: ["Monochrome", "Sculptural form", "Negative space"],
  },
  {
    title: "Timeless New York",
    img: "/images/bridal-newyork.jpg",
    alt: "Bride before a fireplace framed by abundant white florals in a New York townhouse",
    body: "The city as backdrop. Grand townhouse rooms, abundant white florals and the unmistakable romance of Manhattan, composed with editorial poise.",
    tags: ["Townhouse venues", "Abundant florals", "City light"],
  },
  {
    title: "Refined & Intimate",
    img: "/images/bridal-intimate.jpg",
    alt: "Bride in a veil and open-back gown bathed in soft window light",
    body: "Smaller guest lists, deeper detail. For couples who want every element considered and every moment close — a celebration measured in feeling, not scale.",
    tags: ["Private dinners", "Heirloom detail", "Quiet luxury"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bridal Design — Jude Jowilson",
  url: `${site.url}/bridal`,
  hasPart: collections.map((c) => ({
    "@type": "ImageObject",
    name: c.title,
    contentUrl: `${site.url}${c.img}`,
  })),
};

export default function BridalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Portfolio"
        title="Designs That"
        titleItalic="Tell Your Story"
        lede="Four worlds we return to, each one shaped entirely around the couple. Consider them a beginning — never a menu."
      />

      <section className="bg-cream px-6 pb-8 pt-4 md:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-24 py-16 md:gap-36 md:py-24">
          {collections.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={c.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  direction={flip ? "left" : "right"}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal direction={flip ? "right" : "left"} delay={0.1}>
                  <div className="max-w-lg">
                    <span className="font-serif text-3xl text-gold/70">
                      0{i + 1}
                    </span>
                    <h2 className="mt-3 font-serif text-[clamp(2rem,3.4vw,2.8rem)] text-ink">
                      {c.title}
                    </h2>
                    <p className="lede mt-5 text-[1.02rem]">{c.body}</p>
                    <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
                      {c.tags.map((t) => (
                        <li
                          key={t}
                          className="border border-ink/15 px-4 py-1.5 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="link-underline mt-9 inline-block">
                      Inquire about this style
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
