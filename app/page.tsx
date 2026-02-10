import ScrollNavbarWrapper from "@/components/navbar-wrapper";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import FAQ from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonial-section";
import BentoSection from "@/components/bento-grid";
import CTASection from "@/components/cta";
// import TrustedBrands from "@/components/logo";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <ScrollNavbarWrapper />

      <section className="pt-8 sm:pt-12 lg:pt-16">
        <HeroSection />
      </section>
      <section>
        <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-20">
          <p className="text-center dark:text-neutral-100 text-neutral-900 text-xs font-bold tracking-[0.2em] uppercase mb-12">
            Trusted by fast growing startups
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 dark:border-neutral-900 overflow-hidden">
            {[
              "Attention",
              "Bill",
              "Hippocratic AI",
              "Replicate",
              "Granola",
              "Primer",
              "Bridge",
              "incident.io",
            ].map((brand) => (
              <div
                key={brand}
                className="
            flex items-center justify-center p-14
            border-neutral-200 dark:border-neutral-800
            border-b md:border-b-0
            border-r
            hover:bg-neutral-50 dark:hover:bg-neutral-900
            md:[&:nth-child(4n)]:border-r-0
            grayscale opacity-50
            hover:grayscale-0 hover:opacity-100
            transition-all duration-300
            bg-white dark:bg-black
          "
              >
                <span className="text-lg font-bold text-neutral-900 dark:text-white">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
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