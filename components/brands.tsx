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

// Anti-diagonal pairs for a 4-col × 2-row grid
// Row 0: indices 0,1,2,3  |  Row 1: indices 4,5,6,7
// Anti-diagonal: col c (row 0) pairs with col (3-c) (row 1)
const DIAGONAL_PAIRS: number[][] = [
  [0, 7], // col 0 top  ↔  col 3 bottom
  [1, 6], // col 1 top  ↔  col 2 bottom
  [2, 5], // col 2 top  ↔  col 1 bottom
  [3, 4], // col 3 top  ↔  col 0 bottom
];

export default function BrandGrid() {
  const [activePairIndex, setActivePairIndex] = useState<number>(0);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const [manualActive, setManualActive] = useState<number | null>(null);

  useEffect(() => {
    if (isUserHovering) return;

    const interval = setInterval(() => {
      setActivePairIndex((prev) => (prev + 1) % DIAGONAL_PAIRS.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isUserHovering]);

  const activeSet = new Set<number>(
    isUserHovering
      ? manualActive !== null
        ? [manualActive]
        : []
      : DIAGONAL_PAIRS[activePairIndex]
  );

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
            setManualActive(null);
          }}
          onMouseLeave={() => {
            setIsUserHovering(false);
            setManualActive(null);
          }}
        >
          {brands.map((brand, index) => {
            const isActive = activeSet.has(index);

            return (
              <motion.div
                key={brand}
                animate={{
                  filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                  opacity: isActive ? 1 : 0.45,
                  backgroundColor: isActive
                    ? "var(--hover-bg)"
                    : "var(--default-bg)",
                }}
                whileHover={
                  isUserHovering
                    ? {
                      filter: "grayscale(0%)",
                      opacity: 1,
                      backgroundColor: "var(--hover-bg)",
                    }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                onHoverStart={() => isUserHovering && setManualActive(index)}
                onHoverEnd={() => isUserHovering && setManualActive(null)}
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
                  animate={{ scale: isActive ? 1.07 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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