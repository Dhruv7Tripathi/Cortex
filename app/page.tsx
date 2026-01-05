import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import FAQ from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonial-section";
import BentoSection from "@/components/bento-grid";
import CTASection from "@/components/cta";
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
        
        lg:mx-8 xl:mx-20
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900
      `}>

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">

          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 lg:pt-16">
            <HeroSection />
          </section>
          <section>
            <div className="border-t border-zinc-900 bg-black py-20">
              <div className="max-w-6xl mx-auto px-4">
                <p className="text-center text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-12">
                  Trusted by fast growing startups
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
                  {["Attention", "bill", "Hippocratic AI", "Replicate", "granola", "Primer", "Bridge", "incident.io"].map(
                    (brand) => (
                      <div
                        key={brand}
                        className="bg-black flex items-center justify-center p-8 grayscale opacity-50 hover:opacity-100 transition-opacity"
                      >
                        <span className="text-white font-bold text-lg">{brand}</span>
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