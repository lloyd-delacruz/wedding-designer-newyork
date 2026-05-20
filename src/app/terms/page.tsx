import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms governing use of the Jude Jowilson website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of" titleItalic="Use" />
      <section className="bg-cream px-6 py-16 md:px-12 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-prose2 space-y-6 text-[1.02rem] font-light leading-[1.85] text-cocoa">
            <p>
              This website and its contents are the property of Jude Jowilson. All
              photography, text and design are protected by copyright and may not be
              reproduced without written permission.
            </p>
            <p>
              Information on this site is provided for general guidance. Pricing and
              availability are confirmed individually following an inquiry, and any
              engagement is governed by a separate written agreement.
            </p>
            <p>
              By using this site you agree to these terms. Questions may be directed to{" "}
              <a href="mailto:info@judejowilson.com" className="link-underline">
                info@judejowilson.com
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
