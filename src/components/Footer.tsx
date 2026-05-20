import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* ---- Soft floral CTA band ---- */}
      <section className="relative isolate flex items-center justify-center overflow-hidden px-6 py-24 text-center md:py-32">
        <Image
          src="/images/footer-floral.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cream washes — soften the florals and keep the center legible */}
        <div className="absolute inset-0 bg-ivory/40" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_75%_at_50%_46%,rgba(248,244,237,0.78),rgba(248,244,237,0)_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.9rem,4.4vw,3.1rem)] font-normal leading-tight tracking-[0.01em] text-ink">
            Let&rsquo;s Create Something Beautiful
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-[0.95rem] font-light leading-relaxed text-muted">
            Now booking weddings and celebrations in New York and beyond.
          </p>
          <Link href="/contact" className="btn btn-solid mt-9">
            Inquire About Your Date
          </Link>
        </div>
      </section>

      {/* ---- Slim footer bar ---- */}
      <div className="border-t border-ink/10 bg-cream px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-sans text-[0.62rem] uppercase tracking-[0.26em] text-muted">
            © {year} Jude Jowilson. All Rights Reserved.
          </p>
          <nav aria-label="Social" className="flex items-center gap-5">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.62rem] uppercase tracking-[0.26em] text-muted transition-colors duration-500 ease-luxe hover:text-ink"
            >
              Instagram
            </a>
            <span className="h-3 w-px bg-ink/20" aria-hidden="true" />
            <a
              href={site.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.62rem] uppercase tracking-[0.26em] text-muted transition-colors duration-500 ease-luxe hover:text-ink"
            >
              Pinterest
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
