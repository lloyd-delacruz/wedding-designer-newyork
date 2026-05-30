import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on design, florals and the art of the celebration from the New York Atelier.",
  alternates: { canonical: "/journal" },
};

const featured = {
  category: "Design Notes",
  title: "The Quiet Power of an Edited Wedding",
  excerpt:
    "Why the most memorable celebrations are defined not by what they include, but by what they have the confidence to leave out.",
  date: "May 2026",
  read: "6 min read",
  img: "/images/bridal-newyork.jpg",
  alt: "Bride before a fireplace framed by abundant white florals",
};

const posts = [
  {
    category: "Florals",
    title: "Building a Sculptural Arrangement",
    excerpt: "How we compose florals that read as architecture — structure, restraint and a single line of movement.",
    date: "Apr 2026",
    read: "4 min",
    img: "/images/cta-floral.jpg",
    alt: "Sculptural white floral arrangement on a pedestal",
  },
  {
    category: "Real Weddings",
    title: "An Intimate Townhouse Celebration",
    excerpt: "Forty guests, one grand SoHo room and a dinner that felt like the warmest evening of a lifetime.",
    date: "Mar 2026",
    read: "5 min",
    img: "/images/bridal-classic.jpg",
    alt: "Bride in an off-the-shoulder gown holding a bouquet",
  },
  {
    category: "The City",
    title: "Designing With the New York Skyline",
    excerpt: "Letting the city do the work — framing, light and the romance of a view earned at golden hour.",
    date: "Feb 2026",
    read: "4 min",
    img: "/images/skyline.jpg",
    alt: "New York skyline through tall studio windows",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "The New York Atelier Journal",
  url: `${site.url}/journal`,
  blogPost: [featured, ...posts].map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    image: `${site.url}${p.img}`,
    author: { "@type": "Organization", name: site.name },
  })),
};

export default function JournalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="The Journal"
        title="Notes From the"
        titleItalic="Atelier"
        lede="Thoughts on design, florals and the slow craft of the celebration."
      />

      {/* Featured */}
      <section className="bg-cream px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Link href="/journal" className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[5/4] overflow-hidden bg-sand">
                <Image
                  src={featured.img}
                  alt={featured.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1100ms] ease-luxe group-hover:scale-[1.05]"
                />
              </div>
              <div>
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-deep">
                  {featured.category} · {featured.read}
                </p>
                <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight text-ink">
                  {featured.title}
                </h2>
                <p className="lede mt-5 max-w-lg text-[1.05rem]">{featured.excerpt}</p>
                <span className="link-underline mt-8 inline-block">Read the story</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ivory px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-14 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Link href="/journal" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1100ms] ease-luxe group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-5 font-sans text-[0.6rem] uppercase tracking-[0.28em] text-gold-deep">
                  {p.category} · {p.date}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">{p.title}</h3>
                <p className="lede mt-3 text-[0.96rem]">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
