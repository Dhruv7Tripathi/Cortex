"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Themetoggle } from "./ui/themetoggle"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    title: "Cortex Temp — UI Template",
    href: "#uitemplate",
    src: "https://layrdui.in/products/linear.png",
    description: "A clean, responsive Next.js + Tailwind template designed for fast product launches and consistent UI.",
  },
  {
    title: "Cortex Temp — Docs Kit",
    href: "#docskit",
    src: "https://layrdui.in/products/polar-auth.png",
    description: "Documentation and component guidelines for shipping polished docs, changelogs, and marketing pages quickly.",
  },
  {
    title: "Cortex Temp — Blog Starter",
    href: "#blogstarter",
    src: "https://layrdui.in/products/linear1.png",
    description: "Content-first blog layout with MDX support, SEO optimizations, and ready-to-use post templates.",
  },
  {
    title: "Cortex Temp — Dashboard",
    href: "#dashboard",
    src: "https://layrdui.in/products/linear2.png",
    description: "Admin and analytics dashboard patterns with reusable components for monitoring and insights.",
  },
]

export const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  return (
    <nav
      className={cn(
        "w-full transition-all border-b-2 dark:border-neutral-900 border-neutral-200 duration-300 bg-white dark:bg-black backdrop-blur-md left-0 right-0 z-50",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-3 lg:py-4">

          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2">
              <Image
                width={500}
                height={500}
                src={"/logo.png"}
                alt="Cortex Logo"
                quality={100}
                priority={true}
                className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 dark:invert-0 invert flex-shrink-0 rounded-xl object-cover"
              />
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-black dark:text-white whitespace-nowrap">
                Cortex
              </h3>
            </Link>
          </div>

          {/* Center: Desktop Nav — only on lg+ */}
          <div className="hidden lg:flex items-center space-x-1 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            {/* Products Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button className="flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950 transition-colors">
                Products
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isProductOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl p-2 z-50">
                  {products.map((product, idx) => (
                    <a
                      key={idx}
                      href={product.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800 mt-0.5">
                        <Image
                          src={product.src}
                          alt={product.title}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-sm text-neutral-900 dark:text-neutral-100 truncate">
                          {product.title}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-2 leading-relaxed">
                          {product.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/pricing"
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950 transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950 transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Themetoggle />

            {/* CTA Button — hidden on very small, visible from sm */}
            <button className="hidden sm:inline-flex items-center dark:bg-neutral-100 font-semibold ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-900 text-neutral-50 dark:text-neutral-900 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2 rounded-lg hover:bg-neutral-700 dark:hover:bg-white dark:hover:text-black hover:text-white border border-neutral-200 dark:border-neutral-950 transition-colors duration-200 text-xs sm:text-sm whitespace-nowrap">
              Start Building
            </button>

            {/* Hamburger — hidden on lg+ */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-1.5 sm:p-2 h-8 w-8 sm:h-9 sm:w-9"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[260px] sm:w-[300px] md:w-[360px] overflow-y-auto">
                <SheetHeader className="text-left">
                  <SheetTitle className="text-base sm:text-lg font-semibold">Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col mt-6 space-y-1">

                  <div className="sm:hidden pb-4 border-b mb-3">
                    <button className="w-full dark:bg-neutral-100 font-semibold ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-900 text-neutral-50 dark:text-neutral-900 py-2.5 rounded-lg text-sm transition-colors duration-200">
                      Start Building
                    </button>
                  </div>

                  {/* Products Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-semibold text-sm sm:text-base text-left transition-colors"
                    >
                      Products
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-neutral-500 transition-transform duration-200",
                          isMobileProductsOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {isMobileProductsOpen && (
                      <div className="mt-1 ml-3 space-y-1 border-l-2 border-neutral-100 dark:border-neutral-800 pl-3">
                        {products.map((product, idx) => (
                          <a
                            key={idx}
                            href={product.href}
                            className="block py-2 px-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            <div className="font-medium text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                              {product.title}
                            </div>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                              {product.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Nav Links */}
                  <a
                    href="/pricing"
                    className="block py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#faq"
                    className="block py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    FAQs
                  </a>
                  <a
                    href="#blog"
                    className="block py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Blog
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  )
}