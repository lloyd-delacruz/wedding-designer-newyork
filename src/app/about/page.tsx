import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Designer",
  description:
    "A New York atelier with over twenty years' experience creating custom evening gowns and wedding dresses — couture quality, hand-crafted in the USA, now a bridal collection in New York.",
  alternates: { canonical: "/about" },
};

const hallmarks = ["Couture quality", "Delicate embroidery", "Intricate draping", "Dramatic silhouettes"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About New York Atelier",
  url: `${site.url}/about`,
  about: {
    "@type": "Organization",
    name: site.name,
    description:
      "A New York atelier with over twenty years' experience creating custom-made evening gowns and wedding dresses. Couture quality, hand-crafted in the USA.",
    areaServed: { "@type": "Place", name: "New York, NY" },
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="The Designer"
        title="Two Decades in"
        titleItalic="Couture"
        lede="A New York atelier with over twenty years' experience creating custom-made evening gowns and wedding dresses."
      />

      {/* Journey */}
      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src="/images/skyline.jpg"
                alt="The New York skyline framed by tall studio windows"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="max-w-xl">
              <p className="eyebrow mb-6">The Journey</p>
              <h2 className="display text-ink text-[clamp(2rem,3.6vw,2.9rem)]">
                A New York <span className="italic text-cocoa">atelier.</span>
              </h2>
              <div className="lede mt-7 space-y-5 text-[1.02rem]">
                <p>
                  Our atelier was born from a lifelong love of fashion — a fascination with
                  fabric, form and the quiet craft of a well-made garment. It began with
                  custom eveningwear, made one piece at a time for clients who wanted
                  something entirely their own.
                </p>
                <p>
                  That work brought us to New York City, where the practice deepened into
                  couture-level bridal — and today, a full bridal collection designed and
                  hand-made under the New York Atelier name.
                </p>
              </div>
              <Link href="/bridal" className="link-underline mt-9 inline-block">
                View the collection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Aesthetic */}
      <section className="bg-ivory px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left" className="lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src="/images/bridal-modern.jpg"
                alt="A fitted, open-back couture gown beside a sculptural floral arrangement"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="max-w-xl">
              <p className="eyebrow mb-6">The Aesthetic</p>
              <h2 className="display text-ink text-[clamp(2rem,3.6vw,2.9rem)]">
                Hand-crafted, <span className="italic text-cocoa">in America.</span>
              </h2>
              <div className="lede mt-7 space-y-5 text-[1.02rem]">
                <p>
                  Our design aesthetic is sophisticated, classic with a modern approach and
                  exquisite attention to detail. Every gown is manufactured and hand-crafted
                  in the USA, using the finest fabrics and materials.
                </p>
                <p>
                  We specialize in couture quality with delicate embroideries, intricate
                  draping and dramatic silhouettes that define luxurious elegance.
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
                {hallmarks.map((h) => (
                  <li
                    key={h}
                    className="border border-ink/15 px-4 py-1.5 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* In Our Words */}
      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-8">In Our Words</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-serif text-[clamp(1.5rem,2.8vw,2.1rem)] font-light italic leading-snug text-cocoa">
              &ldquo;I&rsquo;ve always had this love for classic, timeless silhouettes that
              won&rsquo;t overshadow the woman in the dress, but instead naturally
              complement her beauty and radiance.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="lede mx-auto mt-9 max-w-prose2 space-y-5 text-left text-[1.02rem]">
              <p>
                With this collection, I played with the idea of adding a twist of romantic
                contradiction. I wanted to pay homage to old Hollywood glamour &mdash; my
                favorite iconic period &mdash; and mix it with exquisite architectural
                detail exuding modernity and sophistication. The embellishments are
                luxurious yet subtle, with some bodices sheer, yet tasteful.
              </p>
              <p>
                Lately, I&rsquo;ve been more and more injecting inspiration from my travels
                into my designs, adding something new, fresh, and a sense of soft adventure.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-10 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-gold-deep">
              New York Atelier &middot; Founder &amp; Designer
            </p>
          </Reveal>
        </div>
      </section>

      {/* New York statement */}
      <section className="bg-espresso px-6 py-24 text-center md:px-12 md:py-32">
        <Reveal>
          <p className="eyebrow !text-gold-soft mb-8">New York</p>
          <blockquote className="mx-auto max-w-4xl">
            <p className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-snug text-cream">
              &ldquo;New York has always been a big part of my brand &mdash; my perfect mix
              of classic style, chic elegance, and just the right dose of unexpectedness.
              No fuss, no frills, always a statement and never overlooked.&rdquo;
            </p>
            <footer className="mt-9 font-sans text-[0.65rem] uppercase tracking-[0.32em] text-gold-soft">
              New York Atelier
            </footer>
          </blockquote>
        </Reveal>
      </section>
    </>
  );
}
