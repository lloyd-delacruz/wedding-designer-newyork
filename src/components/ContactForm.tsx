"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const field =
  "w-full border-0 border-b border-ink/20 bg-transparent pb-3 pt-2 font-sans text-[16px] font-light text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-gold-deep focus:outline-none focus:ring-0";
const labelCls = "block font-sans text-[0.62rem] uppercase tracking-[0.24em] text-muted";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[420px] flex-col items-start justify-center"
          >
            <span className="rule-gold mb-6" />
            <h2 className="font-serif text-3xl text-ink md:text-4xl">Thank you.</h2>
            <p className="lede mt-4 max-w-md text-[1.02rem]">
              Your note has reached the atelier. We reply to every inquiry personally,
              usually within two business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className={labelCls}>
                Your name *
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="partner" className={labelCls}>
                Partner&rsquo;s name
              </label>
              <input id="partner" name="partner" type="text" className={field} />
            </div>
            <div>
              <label htmlFor="email" className={labelCls}>
                Email *
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor="phone" className={labelCls}>
                Phone
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
            </div>
            <div>
              <label htmlFor="date" className={labelCls}>
                Wedding date
              </label>
              <input id="date" name="date" type="text" placeholder="Approximate is fine" className={field} />
            </div>
            <div>
              <label htmlFor="guests" className={labelCls}>
                Estimated guests
              </label>
              <input id="guests" name="guests" type="text" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="venue" className={labelCls}>
                Venue or location
              </label>
              <input id="venue" name="venue" type="text" placeholder="Even a city or a dream" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelCls}>
                Tell us about your celebration *
              </label>
              <textarea id="message" name="message" rows={4} required className={`${field} resize-none`} />
            </div>
            <div className="sm:col-span-2 mt-2">
              <button type="submit" className="btn btn-solid w-full sm:w-auto">
                Send Your Inquiry
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
