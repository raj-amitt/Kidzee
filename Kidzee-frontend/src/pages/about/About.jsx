import React from "react";
import Button from "../../components/button/Button";

/* ADD YOUR IMAGES HERE */
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const About = () => {
  return (
    <section className="bg-[#7B5AA6] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-16 ">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1 ">

            {/* Subtitle */}
            <p className="font-pecita text-yellow-300 text-3xl mb-3">
              About Us
            </p>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl mb-6">
              Welcome Kidzee Shipra Suncity, Indirapuram
            </h2>

            {/* Paragraphs */}
            <div className="font-body text-sm sm:text-base text-gray-200 space-y-5 leading-relaxed max-w-xl">

              <p>
                We Provide A Warm, Secure, And Joyful Environment Where Children Feel Loved,
                Valued, And Inspired To Explore The World Around Them. Every Smile, Every Question,
                And Every Small Achievement Is Celebrated Here.
              </p>

              <p>
                Early Childhood Is The Most Important Stage Of A Child’s Development. At Kidzee Shipra
                Suncity, We Provide A Warm, Secure, And Joyful Environment Where Children Feel Loved,
                Confident, And Excited To Learn Every Day.
              </p>

              <p>
                Our Classrooms Are Designed To Encourage Curiosity, Creativity, And Exploration While
                Ensuring Every Child Receives Personal Attention And Care.
              </p>

              <p>
                We Believe Learning Should Be Fun, Meaningful, And Full Of Discovery.
              </p>

            </div>

            {/* Button */}
            <div className="mt-8">
              <Button text="Know More" />
            </div>

          </div>

          {/* RIGHT SCROLLABLE IMAGES */}
          <div className="flex-1 relative">

            <div className="h-[600px] lg:h-[600px] overflow-y-auto pr-2 no-scrollbar">

              <div className="flex flex-col gap-6">

                {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                  <div key={index} className=" overflow-hidden shadow-md">
                    <img
                      src={img}
                      alt={`about-${index}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;