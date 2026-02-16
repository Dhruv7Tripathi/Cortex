'use client'
import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Themetoggle } from './ui/themetoggle';
const menuItems = [
  { name: 'Products', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQs', href: '/#' },
  { name: 'Blogs', href: '/#' },
]

const Navbar2 = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 bg-background/50 max-w-7xl rounded-2xl border backdrop-blur-lg lg:px-5 px-6 transition-all duration-300 ', isScrolled && 'bg-background/50 max-w-7xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Cortex Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full dark:invert-0 invert object-cover lg:h-10 lg:w-10 md:h-10 md:w-10 sm:h-8 sm:w-8"
                  priority
                />
              </Link>

              <h3 className="text-xl font-bold ml-4 mt-1 text-black dark:text-white">Cortex</h3>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-black dark:text-white hover:text-accent-foreground block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-white hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "flex flex-col items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit",

                )}
              >
                <Themetoggle />
                {/* <Button
                  asChild
                  // variant="outline"
                  size="sm"
                  className={cn()}>*/}
                <Link href="/signin">
                  <button className="dark:bg-neutral-100 font-semibold ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-900 text-neutral-50 dark:text-neutral-900 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-3 rounded-lg  dark:hover:bg-white dark:hover:text-black  border border-neutral-200 dark:border-neutral-950 hover:border-white dark:hover:border-black transition-colors duration-300 text-xs sm:text-sm">
                    Start Building
                  </button>
                </Link>

                {/* </Button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar2