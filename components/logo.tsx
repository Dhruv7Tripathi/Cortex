"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const brands = [
  "Attention",
  "Bill",
  "Hippocratic AI",
  "Replicate",
  "Granola",
  "Primer",
  "Bridge",
  "incident.io",
];

export default function TrustedBrands() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % brands.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const visibleBrands = [
    brands[index],
    brands[(index + 1) % brands.length],
  ];

  return (
    <section>
      <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-20">
        <p className="text-center dark:text-neutral-100 text-neutral-900 text-xs font-bold tracking-[0.2em] uppercase mb-12">
          Trusted by fast growing startups
        </p>

        <div className="relative h-24 overflow-hidden border border-neutral-200 dark:border-neutral-900 max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            >
              {visibleBrands.map((brand) => (
                <span
                  key={brand}
                  className="text-lg font-bold text-neutral-900 dark:text-white"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
