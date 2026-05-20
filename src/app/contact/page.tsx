import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Begin the conversation with Jude Jowilson, luxury wedding designer in New York. Tell us about your celebration and we will reply personally.",
  alternates: { canonical: "/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Jude Jowilson",
  url: `${site.url}/contact`,
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Inquiries"
        title="Begin the"
        titleItalic="Conversation"
        lede="We accept a limited number of weddings each season. Share a little about your day — there are no wrong answers."
      />

      <section className="bg-cream px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1}>
            <aside className="lg:border-l lg:border-ink/10 lg:pl-16">
              <div className="space-y-12">
                <div>
                  <h2 className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-deep">
                    The Atelier
                  </h2>
                  <address className="lede mt-4 text-[1rem] not-italic">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postal}
                  </address>
                </div>
                <div>
                  <h2 className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-deep">
                    Direct
                  </h2>
                  <p className="lede mt-4 text-[1rem]">
                    <a href={`mailto:${site.email}`} className="link-underline">
                      {site.email}
                    </a>
                    <br />
                    <a href={site.phoneHref} className="link-underline mt-2 inline-block">
                      {site.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <h2 className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-deep">
                    Studio Hours
                  </h2>
                  <p className="lede mt-4 text-[1rem]">
                    Monday&ndash;Friday · 10am&ndash;6pm
                    <br />
                    Consultations by appointment
                  </p>
                </div>
                <div>
                  <h2 className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-deep">
                    Social
                  </h2>
                  <p className="lede mt-4 flex gap-6 text-[1rem]">
                    <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
                      Instagram
                    </a>
                    <a href={site.social.pinterest} target="_blank" rel="noopener noreferrer" className="link-underline">
                      Pinterest
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
