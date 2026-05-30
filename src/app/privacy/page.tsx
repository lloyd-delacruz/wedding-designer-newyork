import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How New York Atelier collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy" titleItalic="Policy" />
      <section className="bg-cream px-6 py-16 md:px-12 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-prose2 space-y-6 text-[1.02rem] font-light leading-[1.85] text-cocoa">
            <p>
              We collect only the information you choose to share through our inquiry form
              and correspondence — your name, contact details and the particulars of your
              celebration. We use it solely to respond to you and, should we work together,
              to design and deliver your wedding.
            </p>
            <p>
              We never sell or rent your information. We share it only with the trusted
              partners essential to your celebration, and only as needed. Imagery from your
              wedding is published only with your written consent.
            </p>
            <p>
              You may request access to, correction of, or deletion of your information at
              any time by writing to{" "}
              <a href="mailto:hello@newyorkatelier.com" className="link-underline">
                hello@newyorkatelier.com
              </a>
              .
            </p>
            <p className="text-muted">Last updated May 2026.</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
