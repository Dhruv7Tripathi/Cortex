"use client"

import { useEffect, useRef } from "react"
// import { motion } from "framer-motion"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import {
  Apple,
  Github,
  Slack,
  Twitter,
  MessageCircle,
  Cloud,
  Globe,
  Share2,
} from "lucide-react"

const icons = [
  { Icon: Apple, color: "text-neutral-900 dark:text-white" },
  { Icon: Github, color: "text-neutral-800 dark:text-neutral-100" },
  { Icon: Slack, color: "text-[#4A154B]" },
  { Icon: Twitter, color: "text-[#1DA1F2]" },
  { Icon: MessageCircle, color: "text-[#22C55E]" },
  { Icon: Cloud, color: "text-[#38BDF8]" },
  { Icon: Globe, color: "text-[#A855F7]" },
  { Icon: Share2, color: "text-[#F97316]" },
]

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    icons.forEach(({ Icon, color }, index) => {
      const orbit = (index % 3) + 1
      const radius = orbit * 110
      const duration = 15 + index * 2

      gsap.to(iconRefs.current[index], {
        rotation: 360,
        transformOrigin: "center center",
        duration: duration,
        ease: "none",
        repeat: -1,
      })

      // animate position using onUpdate to compute x/y (gsap expects numeric values for x/y)
      gsap.to(iconRefs.current[index], {
        duration: duration,
        ease: "none",
        repeat: -1,
        onUpdate: function () {
          const progress = this.progress()
          const angle = progress * 360
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          gsap.set(iconRefs.current[index], { x, y })
        },
      })
    })

    return () => {
      icons.forEach((_, index) => {
        gsap.killTweensOf(iconRefs.current[index])
      })
    }
  }, [])

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center py-32 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      {/* Orbital background */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
          {/* Concentric circles */}
          {[1, 2, 3].map((circle) => (
            <div
              key={circle}
              className="absolute rounded-full border border-neutral-200 dark:border-neutral-800"
              style={{
                width: `${circle * 33}%`,
                height: `${circle * 33}%`,
              }}
            />
          ))}

          {/* Orbiting Icons */}
          {icons.map(({ Icon, color }, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) iconRefs.current[index] = el
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className={`p-3 rounded-xl border shadow-lg backdrop-blur-sm
                    bg-white dark:bg-neutral-900
                    border-neutral-200 dark:border-neutral-800
                    ${color}`}
                  style={{
                    transform: `translateX(${110}px)`,
                  }}
                >
                  <Icon size={28} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-neutral-900 dark:text-white">
          Connect your Current Stack
          <br className="hidden md:block" />
          and Start Automating
        </h2>

        <Button
          size="lg"
          className="px-10 py-7 text-lg font-semibold rounded-full shadow-2xl transition-all
            bg-neutral-900 text-white hover:bg-neutral-800
            dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200"
        >
          Start Building for Free
        </Button>
      </div>
    </section>
  )
}
