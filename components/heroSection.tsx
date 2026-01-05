"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Button as B2 } from "./ui/moving-border"
import TextShimmer from "./ui/text-shimmer"
import SelectedBrands from "./brands"

const HeroSection = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-900">
      <motion.section
        className="flex items-center min-h-[calc(60vh)] mb-12 sm:mb-16 md:mb-20 lg:mb-24 justify-center text-black dark:text-white"
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 lg:px-8">
          <TextShimmer
            spread={1.2}
            className="text-green-600 text-sm ">For fast moving engineering teams</TextShimmer>
          {/* <h1>For fast moving engineering teams</h1> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-sans font-bold">
            Build the future with Linear
          </h1>
          <p className="max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px] mx-auto font-semibold text-neutral-800 dark:text-neutral-300 text-sm sm:text-base md:text-lg">
            A modern, sleek, and responsive landing page template built with Next.js and Tailwind CSS. Perfect for
            startups and SaaS products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 md:mt-12 gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-black text-base dark:bg-neutral-50 dark:text-neutral-950 text-white px-6 py-3 font-semibold rounded-lg transition duration-300 w-full sm:w-auto min-w-[180px]"
            >
              Start Building
            </Button>
            <Button
              size="lg"
              className="text-base rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:bg-black text-neutral-900 dark:text-neutral-100 flex items-center w-full sm:w-auto min-w-[180px]"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </motion.section>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-2xl sm:rounded-3xl w-full max-w-[320px] h-[200px] sm:max-w-[600px] sm:h-[375px] md:max-w-[900px] md:h-[560px] lg:max-w-[1200px] lg:h-[750px] xl:max-w-[1300px] xl:h-[800px] bg-neutral-900/60 backdrop-blur-md mx-auto mt-6 sm:mt-8 overflow-hidden">
          <Image
            src="/dash.png"
            alt="AI-powered SaaS Dashboard"
            fill
            className="rounded-2xl sm:rounded-3xl object-cover"
            priority
            quality={100}
          />
          <div className="absolute bottom-0 left-0 h-[120px] sm:h-[240px] md:h-[360px] lg:h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
        </div>
        <SelectedBrands />
      </div>

      <div className="opacity-10 mb-5" />
    </div>
  )
}

export default HeroSection
