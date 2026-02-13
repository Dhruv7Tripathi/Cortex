import { Navbar } from "@/components/navbar"
import { Pricing } from "@/components/pricing";
import Footer from "@/components/footer";
export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <section>
        <Pricing />
      </section>
      <Footer />
    </div>
  )
}

