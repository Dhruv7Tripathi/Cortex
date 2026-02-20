"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Themetoggle } from "./ui/themetoggle"
import Image from "next/image"
import { Menu } from "lucide-react"
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
  const [, setIsProductOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  return (
    <nav
      className={cn(
        "w-full transition-all border-b-2 dark:border-neutral-900 border-neutral-200 duration-300 bg-white dark:bg-black backdrop-blur-md  left-0 right-0 z-50",
      )}
    >

      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center py-2.5 sm:py-4">
        {/* Left: Logo and Nav */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/" className="flex space-x-1.5 sm:space-x-2 items-center">
            <Image
              width={500}
              height={500}
              src={"/logo.png"}
              alt="Cortex Logo"
              quality={100}
              priority={true}
              className="h-8 w-8 sm:h-9 sm:w-9 dark:invert-0 invert  lg:h-10 lg:w-10 flex-shrink-0 rounded-xl object-cover"
            />
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black dark:text-white">Cortex</h3>
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center px-4 xl:px-8 text-sm font-semibold space-x-4 xl:space-x-6 text-neutral-800 dark:text-neutral-200">
          {/* Products Dropdown */}
          <div className="relative z-50" onMouseEnter={() => setIsProductOpen(true)}>
            <button
              ref={buttonRef}
              className="flex items-center gap-1 font-semibold hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
            >
              Products
            </button>
          </div>

          <a
            href="/pricing"
            className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
            onMouseEnter={() => setIsProductOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
            onMouseEnter={() => setIsProductOpen(false)}
          >
            FAQs
          </a>
          <a
            href="#"
            className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
            onMouseEnter={() => setIsProductOpen(false)}
          >
            Blog
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center ml-auto space-x-1.5 sm:space-x-2 md:space-x-3">

          <Themetoggle />
          <button className="dark:bg-neutral-100 font-semibold ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-900 text-neutral-50 dark:text-neutral-900 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-3 rounded-lg hover:bg-white dark:hover:bg-white dark:hover:text-black  hover:text-black border border-neutral-200 dark:border-neutral-950 hover:border-white dark:hover:border-black transition-colors duration-300 text-xs sm:text-sm">
            Start Building
          </button>
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden p-1.5 sm:p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] md:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Products Section */}
                <div className="space-y-3 ml-1.5 sm:ml-2">
                  <h3 className="font-semibold  text-base sm:text-lg">Products</h3>
                  {products.map((product, idx) => (
                    <a
                      key={idx}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pl-3 sm:pl-4 space-y-1 hover:bg-neutral-100 dark:hover:bg-neutral-900 p-2 rounded-lg transition"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <div className="font-medium text-sm sm:text-base">{product.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{product.description}</div>
                    </a>
                  ))}
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-2 pt-4 border-t">
                  <a
                    href="#pricing"
                    className="block py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#faq"
                    className="block py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    FAQ
                  </a>
                  <a
                    href="#blog"
                    className="block py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Blog
                  </a>
                </div>

                {/* Mobile Login Button - Only show on small devices where desktop login is hidden */}
                <div className="pt-4 border-t md:hidden">
                  <button className="w-full py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base">
                    Login
                  </button>
                </div>

                {/* Mobile GitHub Link - Only show on very small devices */}

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}