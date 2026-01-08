import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import FAQ from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonial-section";
import BentoSection from "@/components/bento-grid";
import CTASection from "@/components/cta";
import IntegrationsSection from "@/components/integration-section";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Main Content Container */}
      <div className={`
        relative
        min-h-[calc(100vh-82px)]
        px-4 sm:px-6

        md:mx-4 md:px-0
        md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
        
        lg:mx-8 xl:mx-28
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900
      `}>

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-2">

          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 lg:pt-16">
            <HeroSection />
          </section>
          <section>
            <div className="border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black py-20">
              <div className=" ">
                <p className="text-center dark:text-neutral-100 text-neutral-900 text-xs font-bold tracking-[0.2em] uppercase mb-12">
                  Trusted by fast growing startups
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12px bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900">
                  {["Attention", "bill", "Hippocratic AI", "Replicate", "granola", "Primer", "Bridge", "incident.io"].map(
                    (brand) => (
                      <div
                        key={brand}
                        className="bg-white dark:bg-black flex items-center justify-center p-14 grayscale opacity-50 hover:opacity-100 transition-opacity"
                      >
                        <span className="dark:text-white text-black font-bold text-lg">{brand}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid Section */}
          <section>
            <BentoSection />
          </section>

          <section>
            <IntegrationsSection />
          </section>

          {/* Pricing Section */}
          <section>
            <Pricing />
          </section>

          {/* Testimonials Section */}
          <section>
            <TestimonialsSection />
          </section>

          {/* FAQ Section */}
          <section>
            <FAQ />
          </section>
          <section>
            <CTASection />
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}