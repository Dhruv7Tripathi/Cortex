import ScrollNavbarWrapper from "@/components/navbar-wrapper";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import FAQ from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonial-section";
import BentoSection from "@/components/bento-grid";
import CTASection from "@/components/cta";
import BrandGrid from "@/components/brands";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <ScrollNavbarWrapper />

      <section className="pt-8 sm:pt-12 lg:pt-16">
        <HeroSection />
      </section>
      <section>
        <BrandGrid />
      </section>
      {/* <section>
        <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-12 sm:py-16 lg:py-20">
          <p className="text-center dark:text-neutral-100 text-neutral-900 text-xs font-bold tracking-[0.2em] uppercase mb-8 sm:mb-10 lg:mb-12 px-4">
            Trusted by fast growing startups
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-200 dark:border-neutral-900 overflow-hidden mx-4 sm:mx-6 lg:mx-0">
            {[
              "Attention",
              "Bill",
              "Hippocratic AI",
              "Replicate",
              "Granola",
              "Primer",
              "Bridge",
              "incident.io",
            ].map((brand, index) => (
              <div
                key={brand}
                className={`
            flex items-center justify-center p-8 sm:p-10 lg:p-14
            border-neutral-200 dark:border-neutral-800
            border-b
            border-r
            hover:bg-neutral-50 dark:hover:bg-neutral-900
            grayscale opacity-50
            hover:grayscale-0 hover:opacity-100
            transition-all duration-300
            bg-white dark:bg-black
            [&:last-child]:border-b-0
            sm:[&:nth-child(2n)]:border-r-0
            sm:[&:nth-child(n+7)]:border-b-0
            lg:[&:nth-child(2n)]:border-r
            lg:[&:nth-child(4n)]:border-r-0
            lg:[&:nth-child(n+5)]:border-b-0
            lg:[&:nth-child(n+7)]:border-b
          `}
              >
                <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section>
        <BentoSection />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <TestimonialsSection />
      </section>

      <section>
        <FAQ />
      </section>

      <section >
        <CTASection />
      </section>
      <Footer />
    </div>
  );
}