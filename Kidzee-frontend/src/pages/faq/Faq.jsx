import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Call from "../../assets/call.png";
import Location from "../../assets/location.png";
import Form from "../../assets/form.png";

const faqs = [
  {
    question: "What age group does Kidzee Shipra Suncity cater to?",
    answer:
      "We welcome children from 1.5 years to 6 years, covering Playgroup, Nursery, Junior KG, and Senior KG.",
  },
  {
    question: "What are the school timings?",
    answer:
      "The school timings are from 9:30 AM to 12:30 PM. Daycare facility is also available for extended hours.",
  },
  {
    question: "What curriculum do you follow?",
    answer:
      "We follow the Pentemind Curriculum by Kidzee, which focuses on the holistic development of children through five key minds: Empathetic, Conscientious, Focused, Analytical, and Inventive. It combines play-based and experiential learning to make education fun and meaningful.",
  },
  {
    question: "Is the school safe for young children?",
    answer:
      "Yes, the safety of children is our top priority. The school provides a secure, child-friendly environment with trained staff and proper safety measures.",
  },
  {
    question: "Do you provide live CCTV access to parents?",
    answer:
      "Yes, we provide live CCTV access to ensure transparency and give parents peace of mind.",
  },
  {
    question: "What is the teacher-to-student ratio?",
    answer:
      "We maintain a low teacher-to-student ratio to ensure personalized attention for every child.",
  },
  {
    question: "Are meals provided?",
    answer:
      "Yes, we provide nutritious and hygienic meals/snacks planned according to children’s needs.",
  },
  {
    question: "How do you help children adjust during initial days?",
    answer:
      "We follow a gradual settling process where children are given time to adjust comfortably. Teachers provide extra care, engaging activities, and emotional support.",
  },
  {
    question: "How do parents receive updates about their child?",
    answer:
      "Parents receive regular updates through the Kidzee App, WhatsApp, and regular parent-teacher interactions, including activity updates and progress reports.",
  },
  {
    question: "How can I schedule a visit or take admission?",
    answer:
      "You can visit the school directly or contact us to schedule a tour. Our team will assist you with the complete admission process.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // first one open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F3EDF7] py-16 px-6">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-pecita text-red-400 text-2xl">FAQs</p>
          <h2 className="font-heading text-2xl md:text-3xl text-gray-800 mt-2">
            Everything You Need To Know About Kidzee Shipra Suncity
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gray-200 rounded-xl px-5 py-4 "
              >

                {/* Question */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="font-heading text-gray-800 text-sm sm:text-base">
                    {faq.question}
                  </h3>

                  {/* Arrow */}
                  <FiChevronDown
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="font-body text-sm text-gray-600">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
          {/* Bottom CTA Section */}
<div className="mt-16 text-center">

  <h3 className="font-heading text-lg md:text-xl text-gray-800 mb-8">
    Still Got Questions?
  </h3>

  <div className="flex flex-col md:flex-row items-start lg:items-center justify-center gap-8 md:gap-16">

    {/* Call */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
        {/* ICON */}
        <img src={Call} alt="" />
      </div>

      <div className="text-left">
        <p className="font-heading text-gray-800 text-sm">Call Us Directly</p>
        <p className="font-body text-gray-500 text-xs">+91 45676 49378</p>
      </div>
    </div>

    {/* Visit */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
        {/* ICON */}
        <img src={Location} alt="" />
      </div>

      <div className="text-left">
        <p className="font-heading text-gray-800 text-sm">Visit Us</p>
        <p className="font-body text-gray-500 text-xs">
          Shipra Suncity, Indirapuram, Ghaziabad.
        </p>
      </div>
    </div>

    {/* Form */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
        {/* ICON */}
        <img src={Form} alt="" />
      </div>

      <div className="text-left">
        <p className="font-heading text-gray-800 text-sm">Fill Form</p>
        <p className="font-body text-gray-500 text-xs">
          We'll Call you back Shortly.
        </p>
      </div>
    </div>

  </div>

</div>
    </section>
  );
};

export default Faq;