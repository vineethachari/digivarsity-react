import { useState } from "react";
import FaqItem from "./faqItem";

export default function Faq() {

  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };


  const faqs = [
    {
      question:
        "What is the difference between an online  degree and an online degree apprenticeship?",
      answer:
        "What is the difference between an online  degree and an online degree apprenticeship?",
    },
    {
      question:
        "What is the difference between an online  degree and an online degree apprenticeship?",
      answer:
        "What is the difference between an online  degree and an online degree apprenticeship?",
    },
    {
      question:
        "What is the difference between an online  degree and an online degree apprenticeship?",
      answer:
        "What is the difference between an online  degree and an online degree apprenticeship?",
    },
    {
      question:
        "What is the difference between an online  degree and an online degree apprenticeship?",
      answer:
        "What is the difference between an online  degree and an online degree apprenticeship?",
    },
  ];

  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-0">
          <h2 className="text-base not-italic font-semibold text-black mt-4">
            FAQs
          </h2>
           <ul className="accordionExample">
            {faqs.map((faq, index) => (
              <FaqItem
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
                faq={faq}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
