import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t border-neutral-200 dark:border-neutral-800">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Left column */}
        <div className="md:col-span-4 space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/logo.png"
              alt="Cortex Logo"
              priority
              className="rounded-xl object-cover"
            />
            <h3 className="text-xl font-bold">Cortex</h3>
          </Link>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-sm">
            Cortex is a modern project management tool designed for
            high-performance teams. Built for speed and collaboration.
          </p>

          <Button className="bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-90 rounded-lg px-6 font-semibold">
            Start building
          </Button>
        </div>

        {/* Links Section */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">

          {/* Product */}
          <div>
            <h4 className="text-neutral-500 font-medium mb-5">Product</h4>
            <ul className="space-y-3">
              {["Agent Builder", "Simulation", "Integrations", "Multi Agent", "Workflow API"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-neutral-500 font-medium mb-5">Company</h4>
            <ul className="space-y-3">
              {["Sign In", "About", "Contact", "Pricing", "Docs"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-neutral-500 font-medium mb-5">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">

          <p>© {new Date().getFullYear()} Cortex. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Made with <span className="animate-pulse">❤️</span> by
            <Link
              href="https://layrdui.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white font-medium"
            >
              LayrdUI
            </Link>
          </p>

        </div>
      </div>
    </footer>
  )
}
