"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wordmark from "./Wordmark";
import { nav } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-700 ease-luxe ${
          scrolled
            ? "bg-ivory/85 backdrop-blur-md shadow-[0_1px_0_rgba(36,31,26,0.06)] py-3"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-12">
          <Wordmark />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="link-underline text-[0.72rem] text-ink/80 hover:text-ink"
                  style={active ? { color: "var(--ink)" } : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-outline ml-2 !px-7 !py-3.5">
              Inquire
            </Link>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`block h-px w-7 bg-ink transition-transform duration-500 ease-luxe ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-7 bg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-7 bg-ink transition-transform duration-500 ease-luxe ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu — rendered OUTSIDE the fixed header on purpose.
          The header is position:fixed and gains backdrop-blur on scroll; a
          position:fixed child of a fixed + backdrop-filter ancestor is no
          longer sized to the viewport in iOS WebKit (Instagram in-app browser),
          which collapsed this overlay and let page content bleed through. As a
          top-level sibling its `fixed inset-0` covers the full viewport. Kept
          at z-40 (below the header's z-50) so the close button stays clickable. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ivory px-8 pt-32 lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-ink/10 py-4 font-serif text-3xl text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <Link href="/contact" className="btn btn-solid w-full">
                Inquire About Your Date
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
