"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Apple, Github, Slack, Twitter, MessageCircle, Cloud, Globe, Share2 } from "lucide-react"

const icons = [
  { Icon: Apple, color: "text-white" },
  { Icon: Github, color: "text-white" },
  { Icon: Slack, color: "text-white" },
  { Icon: Twitter, color: "text-white" },
  { Icon: MessageCircle, color: "text-white" },
  { Icon: Cloud, color: "text-white" },
  { Icon: Globe, color: "text-white" },
  { Icon: Share2, color: "text-white" },
]

export default function CTASection() {
  return (
    <section className="bg-black border-t-1 border-neutral-100 dark:border-neutral-900 py-32 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Orbital background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-full aspect-square max-w-4xl flex items-center justify-center">
          {/* Concentric Circles */}
          {[1, 2, 3].map((circle) => (
            <div
              key={circle}
              className="absolute border border-zinc-500 rounded-full"
              style={{
                width: `${circle * 33}%`,
                height: `${circle * 33}%`,
              }}
            />
          ))}

          {/* Orbiting Icons */}
          {icons.map(({ Icon, color }, index) => {
            const orbit = (index % 3) + 1
            const duration = 20 + index * 4
            const radius = orbit * 110 // distance from center

            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  className={`bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 backdrop-blur-sm shadow-lg ${color}`}
                  style={{
                    transform: `translateX(${radius}px)`,
                  }}
                >
                  <Icon size={24} />
                </div>
              </motion.div>
            )
          })}

        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
          Connect your Current Stack <br className="hidden md:block" /> and Start Automating
        </h2>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-zinc-200 px-10 py-7 text-lg font-semibold rounded-full shadow-2xl transition-all"
        >
          Start Building for Free
        </Button>
      </div>
    </section>
  )
}
