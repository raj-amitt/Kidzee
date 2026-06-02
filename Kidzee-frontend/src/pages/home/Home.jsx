import React from "react";
import Button from "../../components/button/Button";
import { Helmet } from "react-helmet";

import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiCheckCircle } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

import bestpreschoolinindirapuram from "../../assets/best-preschool-in-indirapuram.png";
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
      <Helmet>
        <title>
          Kidzee Shipra Suncity | Best Preschool & Daycare in Indirapuram
        </title>

        <meta
          name="description"
          content="Kidzee Shipra Suncity is one of the best preschools and daycare centers in Indirapuram offering Playgroup, Nursery, KG and daycare programs with activity-based learning and caring teachers."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="relative w-full bg-[#EDE7F6] overflow-hidden"
        style={{
          backgroundImage: `url(${bestpreschoolinindirapuram})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center md:flex-row max-w-7xl mx-auto px-6 py-16 lg:py-24 relative">

          {/* LEFT IMAGE */}
          <div className="block left-10">
            <img
              src={LeftChild}
              alt="Kidzee Preschool Student"
              className="w-[180px] md:w-[360px]"
              fetchpriority="high"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="max-w-4xl mx-auto text-center">

            <p className="font-pecita text-[#E53E3E] text-2xl mb-3">
              Admissions Open 2026-27
            </p>

            {/* SEO H1 */}
            <h1 className="font-heading text-[#7B4BC4] text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Kidzee Indirapuram | Best Preschool & Daycare in Indirapuram
            </h1>

            {/* SEO Subheading */}
            <p className="font-body text-gray-600 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
              Located in Shipra Suncity, Kidzee offers Playgroup, Nursery, KG &
              Daycare programs for children across Indirapuram.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

              <Button text="Book a Free School Tour">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                </div>
              </Button>

              <Button text="Admissions Open 2026-27" />

            </div>

            {/* GOOGLE RATING */}
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

            {/* FEATURES */}
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
              alt="Kidzee Daycare Student"
              className="w-[180px] md:w-[360px]"
              fetchpriority="high"
            />
          </div>

        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-heading text-[#7B4BC4] mb-6">
            Serving Families Across Indirapuram
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Kidzee Shipra Suncity proudly serves families looking for quality
            preschool and daycare programs across Indirapuram and nearby
            neighborhoods.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <span className="px-5 py-3 bg-[#F3F0FF] rounded-full font-medium">
              Shipra Suncity
            </span>

            <span className="px-5 py-3 bg-[#F3F0FF] rounded-full font-medium">
              Indirapuram
            </span>

            <span className="px-5 py-3 bg-[#F3F0FF] rounded-full font-medium">
              Ahinsa Khand
            </span>

            <span className="px-5 py-3 bg-[#F3F0FF] rounded-full font-medium">
              Niti Khand
            </span>

            <span className="px-5 py-3 bg-[#F3F0FF] rounded-full font-medium">
              Gyan Khand
            </span>

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