import { PricingSection } from "@/components/ui/pricing-section"
import TextShimmer from "./ui/text-shimmer";

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

export const TIERS = [
  {
    id: "individuals",
    name: "Individuals",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "For your hobby projects",
    features: [
      "Free email alerts",
      "3-minute checks",
      "Automatic data enrichment",
      "10 monitors",
      "Up to 3 seats",
    ],
    cta: "Get started",
  },
  {
    id: "teams",
    name: "Teams",
    price: {
      monthly: 90,
      yearly: 75,
    },
    description: "Great for small businesses",
    features: [
      "Unlimited phone calls",
      "30 second checks",
      "Single-user account",
      "20 monitors",
      "Up to 6 seats",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    id: "organizations",
    name: "Organizations",
    price: {
      monthly: 120,
      yearly: 100,
    },
    description: "Great for large businesses",
    features: [
      "Unlimited phone calls",
      "15 second checks",
      "Single-user account",
      "50 monitors",
      "Up to 10 seats",
    ],
    cta: "Get started",
  },
  {
    id: "Custom",
    name: "Custom",
    price: {
      monthly: 120,
      yearly: 100,
    },
    description: "Great for large businesses",
    features: [
      "Unlimited phone calls",
      "15 second checks",
      "Single-user account",
      "50 monitors",
      "Up to 10 seats",
    ],
    cta: "Get started",
  },
]

export function Pricing() {
  return (
    <div className="justify-center flex flex-col  border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black mt-8 ">
      <div className="relative
        min-h-[calc(100vh-82px)]
        px-4 sm:px-6

        md:mx-4 md:px-0
        md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
        
        lg:mx-8 xl:mx-28
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900">

        <div className=" ml-8 mb-8 sm:mb-1 md:mb-3 lg:mb-6">
          <div className="flex mt-8 flex-col justify-center items-center">
            <TextShimmer className="text-orange-600 text-sm font-medium tracking-wide uppercase">
              Spenders lounge
            </TextShimmer>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-medium md:text-4xl">Pricing for teams of all sizes</h1>
            <p className="text-neutral-700 dark:text-neutral-300">Choose the best plan for your needs</p>
          </div>
        </div>
        <div className="">
          <PricingSection
            frequencies={PAYMENT_FREQUENCIES}
            tiers={TIERS}
          />
        </div>
      </div>
    </div>
  );
}