import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t border-neutral-200 dark:border-neutral-800">

      <div className="
        max-w-7xl mx-auto 
        relative
        px-4 sm:px-6
        md:mx-4 md:px-0
        md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
        lg:mx-8 xl:mx-28
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900
        py-12 sm:py-16 lg:py-10 
        grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12
      ">

        {/* Left column */}
        <div className="lg:col-span-4 ml-6 space-y-5 sm:space-y-4">
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

          <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed max-w-sm">
            Cortex is a modern project management tool designed for
            high-performance teams. Built for speed and collaboration.
          </p>

          <div className="flex w-full sm:w-auto items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
      w-full sm:w-44
      px-4 py-2.5
      text-sm
      rounded-sm
      bg-transparent
      border border-neutral-300 dark:border-neutral-700
      text-black dark:text-white
      placeholder:text-neutral-500
      focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600
    "
            />

            <Button
              className="
      px-4 py-1.5
      rounded-sm
      bg-neutral-200 dark:bg-white
      text-black dark:text-black
      hover:bg-neutral-300 dark:hover:bg-neutral-700
      text-sm font-medium
    "
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="lg:col-span-8 flex mr-8 justify-end items-end">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 ">

            {/* Product */}
            <div>
              <h4 className="text-neutral-500 font-medium mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-1 ]">
                {["Agent Builder", "Simulation", "Integrations", "Multi Agent", "Workflow API"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-neutral-500 font-medium mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-1">
                {["Sign In", "About", "Contact", "Pricing", "Docs"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-neutral-500 font-medium mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-1">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="
          max-w-7xl mx-auto
          relative
          px-4 sm:px-6
          md:mx-4 md:px-0
          md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
          lg:mx-8 xl:mx-28
          lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900
          py-5 sm:py-6 
          flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 
          text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-center sm:text-left
        ">

          <p className="ml-4">© {new Date().getFullYear()} Cortex. All rights reserved.</p>

          <p className="flex items-center mr-8 gap-2">
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