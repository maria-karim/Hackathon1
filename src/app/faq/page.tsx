"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "What type of chair do you offer?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
  },
  {
    question: "Do you have warranty?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
  },
  {
    question: "Can I try before purchasing?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
  },
];

const moreFaqs = [
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
  },
  {
    question: "What will be delivered?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
  },
  {
    question: "How do I maintain my comfort?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Questions Looks Here</h2>
      <p className="text-gray-600 text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[faqs, moreFaqs].map((faqList, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="border border-blue-300 p-4 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(`${colIndex}-${index}`)}>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <FaPlus className="text-blue-500" />
                </div>
                {openIndex === `${colIndex}-${index}` && <p className="mt-2 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
