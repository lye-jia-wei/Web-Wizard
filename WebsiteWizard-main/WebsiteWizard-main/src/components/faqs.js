"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "@/styles/globals.css";

const faqs = [

  {
    question: "How can I effectively train the chatbot using a website link?",
    answer:
      "Train the chatbot by providing a website link . Simply input a URL, and the chatbot will learn from all the content on that page.",
  },
  {
    question:
      "What is the typical duration for training the chatbot based on the number of pages being trained?",
    answer:
      "The training time varies based on the number of pages being trained, but usually completes within a few minutes.",
  },
  {
    question:
      "What kinds of content are suitable for training the chatbot to enhance its ability to respond to queries?",
    answer:
      "Any type of content can be used to train the chatbot. The more diverse the content, the better the chatbot's ability to respond to queries.",
  },
  {
    question:
      "Can the chatbot be integrated across multiple websites to engage visitors effectively?",
    answer:
      "Yes, you can embed the chatbot on numerous websites to engage visitors across various platforms.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ_E() {
  return (
    <section class="pt-28 pb-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-5xl text-center text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
          <div className="text-lg mb-4 py-4 text-center text-gray-600">
            <p className="text-lg text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Here are a few of the questions we get the most. If you don`t see
              whats on your mind, reach out to us anytime on email.
            </p>
          </div>
        </div>
        <div class="accordion-group" data-accordion="default-accordion">
          <div class="accordion " id="basic-heading-one-with-icon">
            <button
              class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-4xl transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
              aria-controls="basic-collapse-one-with-icon"
            ></button>
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-solid border-gray-300 px-5 py-2 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-6 active"
                >
                  <AccordionTrigger className="text-lg hover:text-indigo-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* // <div class="bg-white">
// <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
//   <div class="lg:grid lg:grid-cols-3 lg:gap-8">
//     <div>
//     <h2 */
}
{
  /* //       class="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]"
//     >
//       Frequently asked questions
//     </h2> */
}
//       <p class="mt-4 text-lg text-gray-500">
//         Can’t find the answer you’re looking for? Reach out to our{" "}
//         <a
//           href="#"
//           class="font-medium text-indigo-600 hover:text-indigo-500"
//         >
//           customer support
//         </a>{" "}
//         team.
//       </p>
//     </div>
//     <div class="mt-12 lg:mt-0 lg:col-span-2">
//       <dl class="space-y-12">
//         <Accordion>
//           {faqs.map((faq, index) => (
//             <AccordionItem key={index} value={`item-${index}`}>
//               <AccordionTrigger>{faq.question}</AccordionTrigger>
//               <AccordionContent>{faq.answer}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </dl>
//     </div>
//   </div>
// </div>
// </div>

// <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
