"use client";

import { useState } from "react";
import { ChevronsRight, ArrowRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I interview a maid or nanny before hiring?",
    answer:
      "Yes. Once you unlock a profile with an access package, you get the candidate's full contact details. You can call, WhatsApp, or video call them directly to interview before making any hiring decision.",
  },
  {
    question: "Can I hire a part-time babysitter in the UAE?",
    answer:
      "Yes. We have part-time babysitters available for flexible schedules - including weekends, evenings, or specific days of the week. You can filter by availability on the search page.",
  },
  {
    question: "What are the working hours for a maid or nanny in the UAE?",
    answer:
      "Working hours are agreed between you and the domestic helper directly. UAE labour guidelines for domestic workers suggest a reasonable rest period daily. Most live-in arrangements are flexible, while live-out maids typically work fixed daily hours.",
  },
  {
    question: "What should I prepare before a maid or nanny starts working?",
    answer:
      "Make sure you have a clear written agreement on duties, salary, working hours, and rest days. If you are sponsoring a live-in maid, ensure the visa and accommodation are arranged before her start date. Our platform can connect you with trusted visa support services if needed.",
  },
  {
    question: "How long does it take to hire a nanny or maid in the UAE?",
    answer:
      "Many families on our platform find and hire a suitable maid or nanny within 2 to 7 days. The speed depends on how specific your requirements are and how quickly you move through the interview process. New profiles are added every day, so your options keep growing.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-[#fafafa] rounded-xl p-4 lg:p-6">
      <div className="flex gap-3 lg:gap-6 items-start">
        <ArrowRight
          className={`w-4 h-4 lg:w-8 lg:h-8 flex-shrink-0 mt-0.5 transition-colors ${isOpen ? "text-primary" : "text-dark"}`}
          strokeWidth={1.5}
        />
        <div className="flex-1 min-w-0">
          <p
            className={`text-lg xl:text-2xl font-medium leading-snug lg:leading-[34px] transition-colors ${
              isOpen ? "text-primary" : "text-dark"
            }`}
          >
            {question}
          </p>
          {isOpen && answer && (
            <p className="mt-4 text-sm lg:text-base text-dark/80 leading-relaxed">
              {answer}
            </p>
          )}
        </div>
        <button
          onClick={onToggle}
          aria-label={isOpen ? "Collapse" : "Expand"}
          className="flex-shrink-0 w-4 h-4 lg:w-8 lg:h-8 flex items-center justify-center text-dark mt-0.5"
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 lg:w-5 lg:h-5" strokeWidth={1.5} />
          ) : (
            <Plus className="w-3.5 h-3.5 lg:w-5 lg:h-5" strokeWidth={1.5} />
          )}
        </button>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-[60px] lg:py-20 bg-white"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Mobile: stacked centered layout */}
        <div className="flex flex-col gap-10 lg:hidden">
          <div className="flex flex-col gap-6 items-center text-center">
               <div className="flex items-center gap-2 text-dark/80 text-xs font-medium">
              <ChevronsRight className="w-4 h-4" />
              <span className="text-lg font-medium">FAQs</span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-dark leading-tight tracking-[-0.25px]">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-dark/80 leading-relaxed tracking-[0.5px]">
                Still have questions? Here are some of the most common ones
                people ask.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        {/* Desktop: two-column layout */}
        <div className="hidden lg:block">
             <div className="flex justify-center md:justify-normal items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-14">
            <ChevronsRight className="w-8 h-8  md:w-11 md:h-11 font-thin" />
            <span className='text-lg  font-medium'>FAQs</span>
          </div>
          <div className="flex gap-20 items-start">
            <div className="flex flex-col gap-8 w-[420px] flex-shrink-0">
              <h2 className="text-5xl font-bold text-dark leading-[62px] tracking-[-1px]">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-dark/80 leading-relaxed">
                Still have questions? Here are some of the most common ones
                people ask.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
