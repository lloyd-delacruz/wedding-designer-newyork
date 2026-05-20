"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
  };

  return (
    <section
      ref={ref}
      className="relative grid min-h-[100svh] grid-cols-1 overflow-hidden bg-ivory lg:grid-cols-[44%_56%]"
    >
      {/* LEFT — editorial copy */}
      <div className="relative z-10 flex items-center px-6 pb-16 pt-32 sm:px-10 md:px-14 lg:pt-24 lg:pr-16 xl:pl-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-xl"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow">New York</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="display text-ink text-[clamp(2.9rem,6.4vw,5.4rem)]"
          >
            Designing
            <br />
            <em className="font-light italic text-cocoa">Unforgettable</em>
            <br />
            Celebrations
          </motion.h1>

          <motion.p
            variants={item}
            className="lede mt-8 max-w-md text-[1.02rem]"
          >
            Timeless design. Thoughtful detail. Effortless beauty — crafted for you and
            your most cherished moments.
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <Link href="/contact" className="btn btn-outline">
              Inquire About Your Date
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT — cinematic bridal image */}
      <div className="relative min-h-[58svh] overflow-hidden lg:min-h-full">
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Bride in a flowing gown standing before tall windows overlooking the New York skyline, beside a sculptural white floral arrangement"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover object-[60%_center]"
          />
        </motion.div>
        {/* Seam: soften the left edge into the cream panel on desktop */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-ivory to-transparent lg:block" />
        {/* Mobile legibility wash at top under the nav */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ivory/70 to-transparent lg:hidden" />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.35em] text-ink/50">
          Scroll
        </span>
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-9 w-px bg-gradient-to-b from-ink/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
