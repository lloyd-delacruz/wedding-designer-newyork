import Reveal from "@/components/Reveal";

const logos = [
  { name: "VOGUE", className: "font-serif text-2xl md:text-[1.7rem] font-medium tracking-[0.14em]" },
  { name: "BRIDES", className: "font-serif text-xl md:text-2xl tracking-[0.3em]" },
  { name: "Style Me Pretty", className: "font-serif text-lg md:text-xl italic tracking-wide" },
  { name: "the knot", className: "font-sans text-lg md:text-xl lowercase tracking-[0.2em]" },
  { name: "BAZAAR", className: "font-serif text-xl md:text-2xl tracking-[0.34em]" },
  { name: "INSIDE WEDDINGS", className: "font-serif text-base md:text-lg tracking-[0.28em]" },
];

export default function PressLogos() {
  return (
    <section className="border-y border-ink/[0.08] bg-bone px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow mb-12 text-center">As Featured In</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-20">
            {logos.map((logo) => (
              <li
                key={logo.name}
                className={`${logo.className} cursor-default text-ink/35 transition-colors duration-500 ease-luxe hover:text-ink/70`}
              >
                {logo.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
