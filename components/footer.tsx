import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Left column: Branding */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex flex-col space-y-4 lg:max-w-sm">
            <Link href="/" className="flex space-x-2 items-center">
              <Image
                width={40}
                height={40}
                src={"/logo.png"}
                alt="Cortex Logo"
                quality={100}
                priority={true}
                className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 dark:invert-0 invert rounded-xl object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">Cortex</h3>
            </Link>
            <p className="text-neutral-800 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              Cortex is a modern project management tool designed for high-performance teams. Built for speed and collaboration.
            </p>
          </div>
          <Button className="dark:bg-neutral-100 bg-neutral-900 text-white dark:text-black hover:bg-neutral-950 dark:hover:bg-neutral-50 rounded-lg px-6 font-semibold">
            Start building
          </Button>
        </div>

        {/* Product column */}
        <div className=" md:col-span-8 ml-24 px-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-neutral-500 font-medium mb-6">Product</h4>
            <ul className="space-y-4">
              {["Agent Builder", "Simulation", "Integrations", "Multi Agent", "Workflow API"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-neutral-500 font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              {["Sign In", "About", "Contact", "Pricing", "Careers", "Docs", "Changelog", "Glossary"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-neutral-500 font-medium mb-6">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        {/* Newsletter column */}

      </div>
    </footer>
  )
}
