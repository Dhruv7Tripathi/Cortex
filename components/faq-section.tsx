import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TextShimmer from "./ui/text-shimmer"
import { faqData } from "@/contants"

export default function FAQ() {
  return (
    <div className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black">
      <div className="relative
        px-4 sm:px-6

        md:mx-4 md:px-0
        md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
        
        lg:mx-8 xl:mx-28
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900">

        {/* FAQ Button and Header */}
        <div className="px-4 lg:mx-0 md:mx-auto sm:px-3 md:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 md:pt-10">
          <div className="flex items-center justify-center">
            <TextShimmer className="text-orange-600 text-sm font-medium tracking-wide uppercase">
              Faq&apos;s
            </TextShimmer>
          </div>

          <div className="mb-8 sm:mb-10 flex flex-col justify-center items-center md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 text-balance">
              Everything You Need to Know
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl leading-relaxed">
              Looking for quick answers? Check out our{" "}
              <span className="text-foreground underline cursor-pointer">FAQ section</span>.
            </p>
          </div>
        </div>

        <div className="">
          <div className="">
            {/* FAQ Accordion */}
            <div className="space-y-3 sm:space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border  px-4 sm:px-6 "
                  >
                    <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium hover:no-underline py-4 sm:py-5 md:py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
