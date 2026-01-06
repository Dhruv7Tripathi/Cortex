"use client"

import { motion } from "framer-motion"
import { Zap, GitBranch, Reply as Deploy } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Design your Workflow",
    description: "A drag-and-drop interface to create, connect, and configure agents into logical workflows",
  },
  {
    icon: GitBranch,
    title: "Connect your Tools",
    description: "Agents operate independently and coordinate tasks to complete all complex goals together",
  },
  {
    icon: Deploy,
    title: "Deploy & Scale",
    description: "Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions",
  },
]

const integrations = [
  { name: "Slack", label: "#standups", connected: true },
  { name: "Anthropic", label: "", connected: false },
  { name: "Claude 4", label: "", connected: false },
  { name: "Meta", label: "", connected: true },
  { name: "Llama 2", label: "", connected: false },
  { name: "OpenAI", label: "", connected: false },
  { name: "Text Generator", label: "", connected: true },
  { name: "Code Generator", label: "", connected: false },
]

export default function IntegrationsSection() {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <p className="text-orange-500 font-medium mb-4">How it works</p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Integrates easily</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Features */}
        <div className="space-y-0">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 ${index !== features.length - 1 ? "border-b border-zinc-800" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Right Column - Integration Grid */}
        <div className="relative">
          {/* SVG Lines for connections */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ filter: "drop-shadow(0 0 20px rgba(249, 115, 22, 0.1))" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(249, 115, 22, 0.3)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.2)" />
              </linearGradient>
            </defs>
            {/* Connecting lines */}
            <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
            <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
            <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
            <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
          </svg>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className={`p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 ${integration.connected
                      ? "border-blue-500/50 bg-blue-500/5 hover:border-blue-500 hover:bg-blue-500/10"
                      : "border-zinc-700/50 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-900/50"
                    }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{integration.name}</span>
                    {integration.connected && (
                      <span className="text-xs px-2 py-1 rounded border border-blue-500/50 text-blue-400 bg-blue-500/10">
                        Connected
                      </span>
                    )}
                  </div>
                  {integration.label && <p className="text-gray-400 text-xs">{integration.label}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
