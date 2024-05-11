import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "why do i use codebook?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
  },
  {
    id: 2,
    question: "can i access my ebook on mobile?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
  },
  {
    id: 3,
    question: "Do you offer refunds?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
  },
  {
    id: 4,
    question: "Do you support international payments?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container w-[50%] mx-auto mt-6 ">
      <h1 className="text-center text-2xl font-bold">FAQ</h1>
      <div className="accordion" id="accordionExample">
        {faqs.map((faq) => (
          <div className="accordion-item" key={faq.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button bg-gray-100 w-full text-left p-4 rounded-lg shadow-md mb-2 ${activeId === faq.id ? "bg-gray-300" : ""}`}
                type="button"
                onClick={() => toggleAccordion(faq.id)}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${faq.id}`}
              className={`accordion-collapse collapse ${activeId === faq.id ? "show" : ""}`}
            >
              {activeId === faq.id && (
                <div className="accordion-body p-2 bg-black text-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
