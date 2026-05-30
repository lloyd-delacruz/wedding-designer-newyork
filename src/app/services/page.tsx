import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full wedding design, creative direction, floral and tablescape design, and destination celebrations — bespoke services from New York Atelier.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    n: "01",
    title: "Full Design & Planning",
    body: "End to end, from the first mood to the final candle. Concept, design, production, logistics and on-the-day direction — held entirely by us so you can be fully present.",
  },
  {
    n: "02",
    title: "Creative Direction",
    body: "For couples with a team in place who need a singular vision. We define the aesthetic world and direct every collaborator toward one coherent, elevated whole.",
  },
  {
    n: "03",
    title: "Floral & Tablescape",
    body: "Sculptural arrangements, considered linens, bespoke place settings. The intimate, tactile layer of the day — designed and styled down to the smallest detail.",
  },
  {
    n: "04",
    title: "Destination Weddings",
    body: "New York hearts, anywhere in the world. We design and produce celebrations abroad with trusted partners and the same uncompromising standard of care.",
  },
];

const process = [
  { n: "01", title: "Discovery", body: "An unhurried conversation about you, your story and the feeling you want to create." },
  { n: "02", title: "Design", body: "A bespoke concept — palette, structure, florals and detail — rendered so you can see the day before it arrives." },
  { n: "03", title: "Refinement", body: "We source, sample and edit, shaping every element until nothing is left to chance." },
  { n: "04", title: "Celebration", body: "On the day, we direct quietly in the background so you experience only the joy of it." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Luxury Wedding Design",
  provider: { "@type": "LocalBusiness", name: site.name, areaServed: "New York, NY" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Design Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.body },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="What We Offer"
        title="A Single Standard,"
        titleItalic="Quietly Held"
        lede="We take on a small number of weddings each year. Every engagement, whatever its scope, receives the same devotion."
      />

      {/* Services list */}
      <section className="bg-cream px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="border-t border-ink/[0.1]">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="group grid grid-cols-1 gap-4 border-b border-ink/[0.1] py-10 md:grid-cols-12 md:gap-8 md:py-14">
                  <div className="md:col-span-1">
                    <span className="font-serif text-2xl text-gold">{s.n}</span>
                  </div>
                  <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.4rem)] text-ink md:col-span-4">
                    {s.title}
                  </h2>
                  <p className="lede text-[1.02rem] md:col-span-7">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ivory px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mb-16 text-center">
              <p className="eyebrow mb-5">The Experience</p>
              <h2 className="display text-ink text-[clamp(2rem,4vw,3.2rem)]">
                From first hello to <span className="italic text-cocoa">last dance</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-serif text-5xl text-sand">{p.n}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ink">{p.title}</h3>
                  <p className="lede mt-3 text-[0.96rem]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-cream px-6 py-20 text-center md:px-12 md:py-28">
        <Reveal>
          <p className="lede mx-auto max-w-xl text-[1.05rem]">
            Investment for full design begins at $75,000. Every proposal is prepared
            individually, following our first conversation.
          </p>
          <Link href="/contact" className="btn btn-solid mt-10">
            Request the Brochure
          </Link>
        </Reveal>
      </section>
    </>
  );
}
