import React from "react";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import star from "../../assets/star.png";

const Vision = () => {
  return (
    <section className="bg-[#F3EDF7] py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="font-pecita text-red-400 text-2xl">
            Our Vision
          </p>

          <h2 className="font-heading text-2xl md:text-3xl text-gray-800 mt-2">
            Personalized Learning With Pentemind Pedagogy
          </h2>

        </div>

        {/* Intro Text */}
        <p className="font-body text-gray-700 text-sm md:text-base mb-10 text-center max-w-3xl mx-auto">
          We Follow Kidzee’s Exclusive Pentemind Pedagogy, A Scientifically Designed
          Early Childhood Framework That Nurtures Five Key Developmental Domains —
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Item */}
          <div className="flex items-start gap-4">
            <img src={icon1} alt="" />
            <div>
              <h4 className="font-heading text-gray-800">Focused Mind</h4>
              <p className="text-sm text-purple-500 font-body">
                Knowledge Retention
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={icon2} alt="" loading="lazy" />
            <div>
              <h4 className="font-heading text-gray-800">Inventive Mind</h4>
              <p className="text-sm text-purple-500 font-body">
                Knowledge Development
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={icon3} alt="" loading="lazy"/>
            <div>
              <h4 className="font-heading text-gray-800">Analytical Mind</h4>
              <p className="text-sm text-purple-500 font-body">
                Knowledge Application
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={icon4} alt="" loading="lazy"/>
            <div>
              <h4 className="font-heading text-gray-800">Empathetic Mind</h4>
              <p className="text-sm text-purple-500 font-body">
                Emotional Balance Propagates Real Learning
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={icon5} alt="" loading="lazy"/>
            <div>
              <h4 className="font-heading text-gray-800">Conscientious Mind</h4>
              <p className="text-sm text-purple-500 font-body">
                Knowledge Acquisition
              </p>
            </div>
          </div>

        </div>

        {/* NEP Text */}
        <p className="font-body text-gray-700 text-sm md:text-base mb-10 text-center max-w-4xl mx-auto">
          Our Curriculum Is Also Aligned With The{" "}
          <span className="font-semibold">
            National Education Policy (NEP 2020)
          </span>
          , Ensuring Strong Foundational Literacy, Numeracy, And Holistic Development
          Through Experiential And Play-Based Learning.
        </p>

        {/* Highlight Box */}
        <div className="border border-red-300 rounded-2xl p-6 md:p-8 bg-white/40">

          {/* Top Row */}
          <div className="flex items-start gap-4 mb-4">
            <img src={star} alt="star" className="w-10 h-10" loading="lazy"/>

            <div>
              <h4 className="text-red-500 font-heading">
                Aligned With NEP 2020
              </h4>
              <p className="text-sm text-gray-700 font-body">
                Our Curriculum Ensures Strong Foundational Learning Through{" "}
                <span className="font-semibold">
                  Play-Based And Experiential Methods
                </span>{" "}
                As Per National Education Policy Guidelines.
              </p>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading text-gray-800 mt-4 mb-3">
            Why Should Your Child Learn Through Play-Based And Experiential Methods?
          </h3>

          {/* Content */}
          <div className="font-body text-sm text-gray-700 space-y-4 leading-relaxed">

            <p>
              A Study Was Done On How Play-Based Learning Can Affect The Oral Language
              And The Social And Emotional Development Of Students In The Kindergarten
              Classroom — By Peaslee, Charla D, Evangel University ProQuest
              Dissertations & Theses, 2022.
            </p>

            <p>
              This Study Examined How Play-Based Learning Supports Children’s Oral
              Language And Social-Emotional Development In Kindergarten Classrooms.
              The Researcher Conducted A Qualitative Case Study Using Data From Her Own
              Classroom, Four Other Kindergarten Classrooms, Their Teachers, And The
              School Administrator.
            </p>

            <p>
              The Findings Highlight That As Kindergarten Programs Have Become More
              Academically Focused, Students’ Soft Skills (Communication, Social, And
              Emotional Abilities) Have Declined Because These Areas Are No Longer
              Prioritized.
            </p>

            <p>
              The Study Emphasizes That Play-Based Learning Is Important For Creating A
              Developmentally Appropriate Environment And Improving These Essential
              Skills In Young Students.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Vision;