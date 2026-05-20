import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const cards = [
  {
    title: "Classic Romance",
    img: "/images/bridal-classic.jpg",
    alt: "Bride in an off-the-shoulder gown holding a soft bouquet in airy natural light",
    href: "/bridal",
  },
  {
    title: "Modern Elegance",
    img: "/images/bridal-modern.jpg",
    alt: "Bride in a fitted open-back gown beside a sculptural floral arrangement",
    href: "/bridal",
  },
  {
    title: "Timeless New York",
    img: "/images/bridal-newyork.jpg",
    alt: "Bride before a fireplace framed by abundant white florals in a New York townhouse",
    href: "/bridal",
  },
  {
    title: "Refined & Intimate",
    img: "/images/bridal-intimate.jpg",
    alt: "Bride in a veil and open-back gown bathed in soft window light",
    href: "/bridal",
  },
];

export default function FeaturedBridal() {
  return (
    <section className="bg-ivory px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <Reveal>
            <p className="eyebrow mb-5">Featured Bridal</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-ink text-[clamp(2.2rem,4.6vw,3.5rem)]">
              Designs That <span className="italic text-cocoa">Tell Your Story</span>
            </h2>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={i * 0.1} amount={0.15}>
              <Link href={card.href} className="group block">
                <div className="relative aspect-[46/76] overflow-hidden bg-sand">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 24vw"
                    className="object-cover transition-transform duration-[1100ms] ease-luxe group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-700 ease-luxe group-hover:bg-ink/[0.06]" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-[1.45rem] font-medium tracking-wide text-ink">
                    {card.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 font-sans text-[0.62rem] uppercase tracking-[0.28em] text-muted transition-colors duration-500 group-hover:text-gold-deep">
                    View Gallery
                    <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
