import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Why do I use Codebook?",
    answer: "Codebook is the ultimate platform for accessing a wide range of computer science ebooks. It offers an extensive library, high-quality content, and user-friendly features that enhance your learning experience. Whether you're a student or a professional, Codebook helps you stay updated with the latest knowledge in the field.",
  },
  {
    id: 2,
    question: "Can I access my ebook on mobile?",
    answer: "Yes, you can access your ebooks on mobile devices. Codebook is designed to be responsive and compatible with various devices, including smartphones and tablets. This ensures you can read and study your ebooks anytime, anywhere.",
  },
  {
    id: 3,
    question: "Do you offer refunds?",
    answer: "Yes, we offer refunds within 30 days of purchase. If you are not satisfied with your ebook for any reason, please contact our customer support team, and they will assist you with the refund process. We strive to ensure our customers are completely satisfied with their purchases.",
  },
  {
    id: 4,
    question: "Do you support international payments?",
    answer: "Yes, we support international payments. Codebook accepts various payment methods, including major credit cards and PayPal, to ensure a smooth and secure transaction process for our international customers.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container w-[80%] lg:w-[50%] mx-auto mt-6">
      <h1 className="text-center text-2xl font-bold mb-4 dark:text-slate-100">FAQ</h1>
      <div className="accordion">
        {faqs.map((faq) => (
          <div className="accordion-item mb-4" key={faq.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button bg-gray-100 w-full text-left p-4 rounded-lg shadow-md mb-2 transition-colors duration-300 ${
                  activeId === faq.id ? "bg-gray-300" : ""
                }`}
                type="button"
                onClick={() => toggleAccordion(faq.id)}
              >
                {faq.question}
              </button>
            </h2>
            {activeId === faq.id && (
              <div
                id={`collapse${faq.id}`}
                className="accordion-body p-4  text-black dark:text-slate-300 rounded-lg shadow-md transition-all duration-300"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
