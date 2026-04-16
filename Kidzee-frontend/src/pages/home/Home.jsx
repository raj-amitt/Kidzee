import React from "react";
import Button from "../../components/button/Button";

import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiCheckCircle } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

/* ADD YOUR IMAGES HERE */
import BgImage from "../../assets/bgimage.png";
import LeftChild from "../../assets/hmleft.png";
import RightChild from "../../assets/hmright.png";
import Program from "../program/Program";
import Why from "../why/Why";
import About from "../about/About";
import Vision from "../vision/Vision";
import Faq from "../faq/Faq";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
    <section
      className="relative w-full bg-[#EDE7F6] overflow-hidden"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center md:flex-row max-w-7xl mx-auto px-6 py-16 lg:py-24 relative">

        {/* LEFT IMAGE */}
        <div className="block left-10">
          <img
            src={LeftChild}
            alt="Child"
            className="w-[180px] md:w-[260px]"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Play Learn Grow */}
          <p className="font-pecita text-[#E53E3E] text-2xl mb-3">
            Play. Learn. Grow.
          </p>

          {/* Heading */}
          <h1 className="font-heading text-[#7B4BC4] text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Nurturing Little Minds.
            <br />
            Shaping Bright Futures.
          </h1>

          {/* Description */}
          <p className="font-body text-gray-600 mt-6 text-sm sm:text-base max-w-xl mx-auto">
            At Kidzee Shipra Suncity, We Believe Early Childhood Is Not Just
            Preparation For School — It Is The Foundation Of Life.
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <Button text= "Schedule A Tour" >
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
              </div>
            </Button>
          </div>

          {/* Rating */}
          <div className="mt-6 flex flex-col items-center gap-2">

            <div className="flex text-yellow-400 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FcGoogle />
              +4 Star Ratings
            </div>

          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-700 text-sm">

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500" />
              CCTV Monitored
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500" />
              Trained Staff
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500" />
              NEP 2020 Aligned
            </div>

          </div>
         

        </div>
          {/* RIGHT IMAGE */}
        <div className="block md:right-10 md:top-40">
          <img
            src={RightChild}
            alt="Child"
            className="w-[180px] md:w-[260px]"
          />
        </div>
      </div>
    </section>
      <Program />
      <Why />
      <About />
      <Vision />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;