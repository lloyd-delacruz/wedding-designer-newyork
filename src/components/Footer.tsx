import Link from "next/link";
import Wordmark from "./Wordmark";
import { nav, site } from "@/lib/site";

function Instagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}
function Pinterest() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.6a9.4 9.4 0 0 0-3.43 18.15c-.08-.77-.15-1.95.03-2.79.16-.74 1.05-4.7 1.05-4.7s-.27-.54-.27-1.33c0-1.25.72-2.18 1.62-2.18.76 0 1.13.57 1.13 1.26 0 .77-.49 1.91-.74 2.97-.21.9.45 1.62 1.33 1.62 1.6 0 2.83-1.69 2.83-4.12 0-2.15-1.55-3.66-3.76-3.66-2.56 0-4.07 1.92-4.07 3.91 0 .77.3 1.6.67 2.05a.27.27 0 0 1 .06.26c-.07.28-.22.9-.25 1.02-.04.16-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-5.41 5.91-5.41 3.1 0 5.51 2.21 5.51 5.16 0 3.08-1.94 5.56-4.64 5.56-.9 0-1.76-.47-2.05-1.03l-.56 2.13c-.2.78-.75 1.76-1.12 2.36A9.4 9.4 0 1 0 12 2.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-[#a89c89]">
      {/* Pre-footer CTA strip */}
      <div className="border-b border-white/10 px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-gold-soft mb-3">Inquiries</p>
            <h2 className="font-serif text-3xl leading-tight text-cream md:text-[2.6rem]">
              Tell us about your celebration.
            </h2>
          </div>
          <Link href="/contact" className="btn btn-ghost-light flex-shrink-0">
            Begin the Conversation
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-12 md:py-20">
        <div className="col-span-2 md:col-span-4">
          <Wordmark light />
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-white/60">
            A New York atelier designing bespoke, editorial celebrations — composed with
            restraint, intention, and quiet luxury.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/55 transition-colors duration-500 ease-luxe hover:border-white/40 hover:text-cream"
            >
              <Instagram />
            </a>
            <a
              href={site.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/55 transition-colors duration-500 ease-luxe hover:border-white/40 hover:text-cream"
            >
              <Pinterest />
            </a>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h3 className="mb-5 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-white/80">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-light text-white/50 transition-colors duration-300 hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-white/80">
            Atelier
          </h3>
          <address className="space-y-3 text-sm font-light not-italic leading-relaxed text-white/50">
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </p>
            <p>
              <a href={site.phoneHref} className="transition-colors duration-300 hover:text-cream">
                {site.phone}
              </a>
              <br />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-300 hover:text-cream"
              >
                {site.email}
              </a>
            </p>
            <p className="text-white/55">By appointment only</p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 text-[0.7rem] tracking-wide text-white/55 sm:flex-row">
          <span>© {year} Jude Jowilson. All rights reserved.</span>
          <div className="flex gap-7">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-cream">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-cream">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
