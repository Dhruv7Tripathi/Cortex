"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

export default function BrandGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isUserHovering, setIsUserHovering] = useState(false);

  // Auto-cycle through brands
  useEffect(() => {
    if (isUserHovering) return;

    let current = 0;
    const interval = setInterval(() => {
      setActiveIndex(current);
      current = (current + 1) % brands.length;
    }, 1900);

    return () => clearInterval(interval);
  }, [isUserHovering]);

  return (
    <section>
      <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-12 sm:py-16 lg:py-20">
        <p className="text-center dark:text-neutral-100 text-neutral-900 text-xs font-bold tracking-[0.2em] uppercase mb-8 sm:mb-10 lg:mb-12 px-4">
          Trusted by fast growing startups
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-200 dark:border-neutral-900 overflow-hidden mx-4 sm:mx-6 lg:mx-0"
          onMouseEnter={() => {
            setIsUserHovering(true);
            setActiveIndex(null);
          }}
          onMouseLeave={() => {
            setIsUserHovering(false);
          }}
        >
          {brands.map((brand, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={brand}
                animate={{
                  filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                  opacity: isActive ? 1 : 0.5,
                  backgroundColor: isActive
                    ? "var(--hover-bg)"
                    : "var(--default-bg)",
                }}
                whileHover={{
                  filter: "grayscale(0%)",
                  opacity: 1,
                  backgroundColor: "var(--hover-bg)",
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => !isUserHovering && setActiveIndex(null)}
                className={`
                  flex items-center justify-center p-8 sm:p-10 lg:p-14
                  border-neutral-200 dark:border-neutral-800
                  border-b border-r
                  cursor-default
                  [--default-bg:theme(colors.white)] dark:[--default-bg:theme(colors.black)]
                  [--hover-bg:theme(colors.neutral.50)] dark:[--hover-bg:theme(colors.neutral.900)]
                  [&:last-child]:border-b-0
                  sm:[&:nth-child(2n)]:border-r-0
                  sm:[&:nth-child(n+7)]:border-b-0
                  lg:[&:nth-child(2n)]:border-r
                  lg:[&:nth-child(4n)]:border-r-0
                  lg:[&:nth-child(n+5)]:border-b-0
                  lg:[&:nth-child(n+7)]:border-b
                `}
              >
                <motion.span
                  animate={{
                    scale: isActive ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white select-none"
                >
                  {brand}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}