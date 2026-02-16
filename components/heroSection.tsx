"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import TextShimmer from "./ui/text-shimmer"
import Link from "next/link"
export default function HeroSection() {
  return (
    <div className="relative
        min-h-screen
        px-4 sm:px-6
        
        md:mx-4 md:px-0
        md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
        
        lg:mx-8 xl:mx-28
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900">

      <div className="dark:bg-black  bg-white dark:text-white text-black  font-sans selection:bg-orange-500/30">
        <motion.section
          className="flex flex-col  items-center pt-20 pb-16 px-4 text-center"
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
              className="dark:bg-white bg-black dark:text-black text-white hover:bg-neutral-950 px-8 py-6 text-lg font-semibold rounded-full transition-all"
            >
              Start building
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-800 dark:text-white text-black dark:hover:bg-neutral-900 hover:bg-neutral-50 px-8 py-6 text-lg font-semibold rounded-full transition-all bg-transparent"
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
            <Link
              href="https://layrdui.in"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-neutral-100 text-neutral-900 font-bold">LayrdUI</Link>
          </div>
        </motion.section>

        <div className="relative max-w-6xl mx-auto px-4 pb-24">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-2 shadow-2xl shadow-orange-950/20">
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-[#fcfcfc] aspect-[16/10]">
              <Image
                src="/dashboard.png"
                alt="Cortex Dashboard Preview"
                width={1280}
                height={800}
                className="w-full h-full dark:invert object-cover"
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

