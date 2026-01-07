"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import TextShimmer from "./ui/text-shimmer"
const HeroSection = () => {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black min-h-screen font-sans selection:bg-orange-500/30">
      <motion.section
        className="flex flex-col items-center pt-20 pb-16 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <TextShimmer className="text-orange-600 text-sm font-medium mb-6 tracking-wide uppercase">
          For fast moving engineering teams.
        </TextShimmer>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
          The fastest way to ship AI-powered  <span className="text-orange-600">products</span>
        </h1>

        <p className="dark:text-neutral-200 text-neutral-800 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            size="lg"
            className="dark:bg-white bg-black dark:text-black text-white hover:bg-neutral-200 px-8 py-6 text-lg font-semibold rounded-full transition-all"
          >
            Start building
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-800 dark:text-white text-black dark:hover:bg-neutral-900 hover:bg-neutral-100 px-8 py-6 text-lg font-semibold rounded-full transition-all bg-transparent"
          >
            View pricing
          </Button>
        </div>

        <div className="flex items-center gap-3 dark:text-neutral-100 text-neutral-900  text-sm font-medium">
          <div className="flex dark:text-white text-black">
            {"★★★★★".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
          <span className="h-4 w-[1px] bg-neutral-800 mx-2" />
          <span>Innovative AI solution 2025 by</span>
          <span className="dark:text-neutral-100 text-neutral-900 font-bold">Dhruv</span>
        </div>
      </motion.section>

      <div className="relative max-w-6xl mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-2 shadow-2xl shadow-orange-950/20">
          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-[#fcfcfc] aspect-[16/10]">
            <Image
              src="/clean-dark-dashboard-with-sidebar-and-charts.jpg"
              alt="Nodus Dashboard Preview"
              width={1280}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default HeroSection
