"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How often is the weather data updated?",
    answer:
      "Weather information is updated regularly using live weather data from the weather API.",
  },
  {
    id: 2,
    question: "Can I search for another city?",
    answer:
      "Yes. Enter any supported city in the search box to view its current weather information.",
  },
  {
    id: 3,
    question: "What does the humidity percentage mean?",
    answer:
      "Humidity represents the amount of moisture present in the air compared with the maximum amount the air can hold.",
  },
  {
    id: 4,
    question: "What is the air quality index?",
    answer:
      "The Air Quality Index indicates how clean or polluted the air is and can help you understand potential health effects.",
  },
  {
    id: 5,
    question: "Can I see the weather forecast for multiple days?",
    answer:
      "Yes. The forecast section provides weather information for upcoming days.",
  },
];

export default function WeatherFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="bg-[#0e152f] text-white py-20">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-5">
            Weather FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Everything you need to know about the weather dashboard,
            forecasts, air quality and weather data.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-4">

          {faqs.map((faq) => {

            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className={`
                  group
                  rounded-2xl
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-blue-500/50 bg-gradient-to-r from-blue-500/10 via-slate-900 to-slate-900 shadow-lg shadow-blue-500/5"
                      : "border-slate-700 bg-gradient-to-r from-slate-900 to-slate-950 hover:border-slate-600"
                  }
                `}
              >

                {/* Question */}

                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
                >

                  <div className="flex items-center gap-4">

                    {/* Number */}

                    <span
                      className={`
                        flex-shrink-0
                        w-9
                        h-9
                        rounded-full
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-bold
                        transition
                        ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                        }
                      `}
                    >
                      {faq.id}
                    </span>

                    <span
                      className={`
                        font-semibold
                        text-base
                        md:text-lg
                        transition
                        ${
                          isOpen
                            ? "text-white"
                            : "text-slate-200"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                  </div>

                  {/* Plus / Minus */}

                  <span
                    className={`
                      flex-shrink-0
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-xl
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-blue-600 text-white rotate-180"
                          : "bg-slate-800 text-blue-400"
                      }
                    `}
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                {/* Answer */}

                <div
                  className={`
                    grid transition-all duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div className="px-6 pb-6 pl-[4.5rem]">

                      <div className="border-l-2 border-blue-500/40 pl-4">

                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}