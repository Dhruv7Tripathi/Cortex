"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import React, { useState, useEffect } from "react";

type EventCardProps = {
  firstEvent?: string;
  firstEventTime?: string;
  secondEvent?: string;
  secondEventTime?: string;
  cardTitle?: string;
  cardDescription?: string;
};

const EventCard = ({
  firstEvent = "Solana Meet: BLR",
  firstEventTime = "8:30–11PM",
  secondEvent = "UX Testing Slot",
  secondEventTime = "5:30–8:30PM",
  cardTitle = "Event Timeline",
  cardDescription = "Visualize and navigate your daily flow with beautifully animated, color-coded time blocks.",
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg">("lg");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize("sm");
      else if (width < 1024) setScreenSize("md");
      else setScreenSize("lg");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getResponsiveValues = () => {
    switch (screenSize) {
      case "sm":
        return {
          containerWidth: 280,
          containerHeight: 200,
          gridWidth: 450,
          gridHeight: 240,
          calendarTransform: "translateY(-50px) translateX(-170px)",
          firstEventPosition: { left: 60, top: 60 },
          secondEventPosition: { left: 200, top: 120 },
          eventWidth: 120,
          gridCols: 7,
          gridItems: 28,
          cellSize: 60,
        };
      case "md":
        return {
          containerWidth: 340,
          containerHeight: 240,
          gridWidth: 560,
          gridHeight: 280,
          calendarTransform: "translateY(-60px) translateX(-210px)",
          firstEventPosition: { left: 70, top: 70 },
          secondEventPosition: { left: 260, top: 140 },
          eventWidth: 128,
          gridCols: 8,
          gridItems: 32,
          cellSize: 70,
        };
      default:
        return {
          containerWidth: 380,
          containerHeight: 280,
          gridWidth: 687,
          gridHeight: 300,
          calendarTransform: "translateY(-70px) translateX(-255px)",
          firstEventPosition: { left: 84, top: 85 },
          secondEventPosition: { left: 320, top: 164 },
          eventWidth: 128,
          gridCols: 9,
          gridItems: 36,
          cellSize: 80,
        };
    }
  };

  const responsiveValues = getResponsiveValues();

  const calendarVariant: Variants = {
    open: {
      transform: responsiveValues.calendarTransform,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    close: {
      transform: "translateY(0px) translateX(0px)",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const firstTimeVariant: Variants = {
    open: {
      opacity: 0,
      y: 5,
      height: 0,
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, delay: 0.3 },
    },
  };

  const secondTimeVariant: Variants = {
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, delay: 0.3 },
    },
    close: {
      opacity: 0,
      y: 5,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[400px]"
    >
      <div className="relative overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            height: responsiveValues.containerHeight,
            width: responsiveValues.containerWidth,
          }}
        >
          <motion.div
            variants={calendarVariant}
            animate={isHovered ? "open" : "close"}
            className="absolute left-0 top-0"
            style={{
              height: responsiveValues.gridHeight,
              width: responsiveValues.gridWidth,
            }}
          >
            <CalendarGrid
              gridCols={responsiveValues.gridCols}
              gridItems={responsiveValues.gridItems}
              cellSize={responsiveValues.cellSize}
            />

            {/* First Event */}
            <div
              className="absolute flex min-h-8 items-center rounded-sm bg-gradient-to-r from-green-600 to-green-400 p-1"
              style={{
                left: responsiveValues.firstEventPosition.left,
                top: responsiveValues.firstEventPosition.top,
                width: responsiveValues.eventWidth,
              }}
            >
              <div className="flex flex-col px-2 text-white text-xs">
                <p>{firstEvent}</p>
                <motion.p
                  variants={firstTimeVariant}
                  animate={isHovered ? "open" : "close"}
                  className="overflow-hidden text-[11px]"
                >
                  {firstEventTime}
                </motion.p>
              </div>
            </div>

            {/* Second Event */}
            <div
              className="absolute flex min-h-8 items-center rounded-sm bg-neutral-400 dark:bg-neutral-900 p-1"
              style={{
                left: responsiveValues.secondEventPosition.left,
                top: responsiveValues.secondEventPosition.top,
                width: responsiveValues.eventWidth,
              }}
            >
              <div className="flex flex-col px-2 text-white text-xs">
                <p>{secondEvent}</p>
                <motion.p
                  variants={secondTimeVariant}
                  animate={isHovered ? "open" : "close"}
                  className="overflow-hidden text-[11px]"
                >
                  {secondEventTime}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <div className="absolute bottom-4 left-0 w-full px-4">
        <h3 className="text-sm font-semibold text-primary">{cardTitle}</h3>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          {cardDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default EventCard;

type CalendarGridProps = {
  gridCols: number;
  gridItems: number;
  cellSize: number;
};

const CalendarGrid = ({
  gridCols,
  gridItems,
  cellSize,
}: CalendarGridProps) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${gridCols}, ${cellSize}px)`,
      }}
    >
      {Array.from({ length: gridItems }).map((_, i) => (
        <div
          key={i}
          className="border border-neutral-200 dark:border-neutral-800 text-neutral-400 text-[10px] flex items-end p-1"
          style={{ height: cellSize }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

const ContainerMask = () => {
  return (
    <>
      {/* Bottom fade */}
      <div className={cn(
        "absolute bottom-0 left-0 w-full",
        "[background-image:linear-gradient(to_top,theme(colors.neutral.100)_40%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_top,theme(colors.neutral.950)_40%,transparent_100%)]",
        // Responsive height
        "h-[80px] sm:h-[100px] lg:h-[120px]"
      )} />

      {/* Left fade */}
      <div className={cn(
        "absolute left-0 top-0 h-full",
        "[background-image:linear-gradient(to_right,theme(colors.neutral.100)_20%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_right,theme(colors.neutral.950)_20%,transparent_100%)]",
        // Responsive width
        "w-[20px] sm:w-[25px] lg:w-[30px]"
      )} />

      {/* Right fade */}
      <div className={cn(
        "absolute right-0 top-0 h-full",
        "[background-image:linear-gradient(to_left,theme(colors.neutral.100)_20%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_left,theme(colors.neutral.950)_20%,transparent_100%)]",
        // Responsive width
        "w-[20px] sm:w-[25px] lg:w-[30px]"
      )} />

      {/* Top fade */}
      <div className={cn(
        "absolute right-0 top-0 w-full",
        "[background-image:linear-gradient(to_bottom,theme(colors.neutral.100)_20%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_bottom,theme(colors.neutral.950)_20%,transparent_100%)]",
        // Responsive height
        "h-[20px] sm:h-[25px] lg:h-[30px]"
      )} />
    </>
  );
};