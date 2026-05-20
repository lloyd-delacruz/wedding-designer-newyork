import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  titleItalic,
  lede,
}: {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory px-6 pb-16 pt-36 text-center md:px-12 md:pb-24 md:pt-48">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow">{eyebrow}</span>
            <span className="rule-gold rotate-180" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display text-ink text-[clamp(2.6rem,6vw,4.6rem)]">
            {title}
            {titleItalic ? (
              <>
                {" "}
                <span className="italic text-cocoa">{titleItalic}</span>
              </>
            ) : null}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={0.16}>
            <p className="lede mx-auto mt-7 max-w-prose2 text-[1.05rem]">{lede}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
