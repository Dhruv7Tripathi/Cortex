// "use client"

// import Link from "next/link"
// import { footerLinks } from "@/contants"
// import Image from "next/image"
// import { SiDiscord, SiGithub, SiLinkedin, SiX } from "react-icons/si"

// export default function Footer() {
//   return (
//     <div>
//       <footer className="relative border-t border-neutral-200 dark:border-neutral-800/50 bg-white dark:bg-black dark:text-neutral-50 text-neutral-900 overflow-hidden">
//         <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

//           {/* Main Footer Content */}
//           <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16">

//             {/* Branding & Description */}
// <div className="flex flex-col space-y-4 lg:max-w-sm">
//   <Link href="/" className="flex space-x-2 items-center">
//     <Image
//       width={40}
//       height={40}
//       src={"/logo.png"}
//       alt="Linear Logo"
//       quality={100}
//       priority={true}
//       className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 dark:invert-0 invert rounded-xl object-cover"
//     />
//     <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">Cortex</h3>
//   </Link>
//   <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
//     Linear is a modern project management tool designed for high-performance teams. Built for speed and collaboration.
//   </p>
// </div>

//             {/* Footer Links */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

//               {/* Pages */}
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-3 sm:mb-4">Pages</h3>
//                 <ul className="space-y-2 sm:space-y-3">
//                   {footerLinks.pages.map((link, index) => (
//                     <li key={`pages-${index}`}>
//                       <Link
//                         href={link.href}
//                         className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm sm:text-base"
//                       >
//                         {link.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Register */}
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-3 sm:mb-4">Register</h3>
//                 <ul className="space-y-2 sm:space-y-3">
//                   {footerLinks.register.map((link, index) => (
//                     <li key={`register-${index}`}>
//                       <Link
//                         href={link.href}
//                         className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm sm:text-base"
//                       >
//                         {link.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Social Links & Status */}
//       <div className="flex flex-col sm:flex-row border-t border-neutral-200 dark:border-neutral-900 justify-between items-center px-4 sm:px-6 lg:px-12 py-4 sm:py-6 gap-4 sm:gap-0">

//         {/* Social Links */}
//         <div className="flex space-x-6 sm:space-x-8 text-xl sm:text-2xl text-gray-500 dark:text-gray-400">
//           <Link
//             href="https://discord.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Discord"
//             className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
//           >
//             <SiDiscord size={20} className="sm:w-[22px] sm:h-[22px]" />
//           </Link>
//           <Link
//             href="https://github.com/dhruv7tripathi"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//             className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
//           >
//             <SiGithub size={20} className="sm:w-[22px] sm:h-[22px]" />
//           </Link>
//           <Link
//             href="https://x.com/dhruvtripathi77"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="X"
//             className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
//           >
//             <SiX size={20} className="sm:w-[22px] sm:h-[22px]" />
//           </Link>
//           <Link
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
//           >
//             <SiLinkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
//           </Link>
//         </div>

//         {/* Status Indicator */}
//         <div className="flex items-center space-x-2">
//           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
//           <h1 className="text-green-600 text-xs sm:text-sm font-medium">All Systems Operational</h1>
//         </div>
//       </div>

//       {/* Legal Links */}
//       <div className='flex flex-col space-x-4 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 border-t border-neutral-200 dark:border-neutral-900 py-3 sm:py-4'>
//         <Link
//           href={"#"}
//           className='text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200'
//         >
//           Terms of Services
//         </Link>
//         <span className='hidden sm:block dark:bg-white bg-black w-1.5 h-1.5 rounded-full' />
//         <Link
//           href={"#"}
//           className='text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200'
//         >
//           Privacy Policy
//         </Link>
//       </div>
//     </div>
//   )
// }
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-zinc-900">
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
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              Cortex is a modern project management tool designed for high-performance teams. Built for speed and collaboration.
            </p>
          </div>
          <p className="text-zinc-400 max-w-xs leading-relaxed">Manage and simulate agentic workflows</p>
          <Button className="bg-white text-black hover:bg-zinc-200 rounded-lg px-6 font-semibold">
            Start building
          </Button>
        </div>

        {/* Product column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-zinc-500 font-medium mb-6">Product</h4>
          <ul className="space-y-4">
            {["Agent Builder", "Simulation", "Integrations", "Multi Agent", "Workflow API"].map((item) => (
              <li key={item}>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-zinc-500 font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            {["Sign In", "About", "Contact", "Pricing", "Careers", "Docs", "Changelog", "Glossary"].map((item) => (
              <li key={item}>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-zinc-500 font-medium mb-6">Legal</h4>
          <ul className="space-y-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-zinc-500 font-medium mb-6">Newsletter</h4>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-zinc-900 border-none rounded-lg py-3 px-4 text-sm focus:ring-1 focus:ring-zinc-700 outline-none"
            />
            <button className="absolute right-2 top-1.5 p-1.5 bg-white text-black rounded-md hover:bg-zinc-200 transition-colors">
              <Send size={14} />
            </button>
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed mt-4">
            Get the latest product news and behind the scenes updates.
          </p>
        </div>
      </div>
    </footer>
  )
}
