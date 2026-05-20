import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaSection() {
  return (
    <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden px-6 py-28 md:px-12 md:py-36">
      {/* Soft floral backdrop */}
      <Image
        src="/images/cta-floral.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Cream wash for that soft, light editorial feel */}
      <div className="absolute inset-0 bg-ivory/[0.62]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/75 to-ivory/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,244,237,0.85)_0%,rgba(248,244,237,0.35)_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">Your Celebration Awaits</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-ink text-[clamp(2.6rem,6vw,4.8rem)]">
            Let&rsquo;s Create
            <br />
            <span className="italic text-cocoa">Something Beautiful</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lede mx-auto mt-8 max-w-xl text-[1.05rem]">
            We accept a limited number of weddings each season, ensuring every couple
            receives our full devotion. We would love to hear your story.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link href="/contact" className="btn btn-solid mt-11">
            Inquire Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
