import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 md:px-12 md:py-32">
      {/* Oversized faded JJ watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 select-none font-serif font-light leading-none text-sand/60"
        style={{ fontSize: "clamp(16rem, 38vw, 40rem)" }}
      >
        NY
      </span>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">The Atelier</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-ink text-[clamp(2.3rem,5vw,3.6rem)]">
            Intentional Design.
            <br />
            <span className="italic text-cocoa">Personal Approach.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lede mx-auto mt-8 max-w-prose2 text-[1.05rem]">
            Every celebration begins with a conversation. We design a singular world around
            you — the textures, the light, the quiet details no one else would think of —
            so the day feels unmistakably, entirely yours.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link href="/about" className="btn btn-solid mt-11">
            Discover the Atelier
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
