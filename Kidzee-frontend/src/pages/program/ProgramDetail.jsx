import React from "react";
import Button from "../../components/button/Button";

/* YOU WILL IMPORT THESE */
import heroBg from "../../assets/hero.png";
import teddy from "../../assets/teddy.png";
import programImg from "../../assets/playgroup.png";
import nursery from "../../assets/nursery.png";
import junior from "../../assets/junior.png";
import senior from "../../assets/senior.png";

const ProgramDetail = () => {
  return (
    <section className="bg-[#F3EDF7]">
      {/* ================= HERO ================= */}
      <div className="relative h-[220px] md:h-[260px] flex items-center">
        {/* Background */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <img src={teddy} alt="" className="w-10" />
            <div>
              <p className="text-sm opacity-80">Home / Programmes</p>
              <p className="font-pecita text-yellow-300 text-2xl">Programmes</p>
            </div>
          </div>

          <h1 className="font-heading text-lg md:text-2xl max-w-2xl">
            Age-Appropriate Learning Programs Designed To Nurture Every Stage Of
            Your Child’s Development.
          </h1>

          <div className="mt-3 h-[1px] bg-white/40 w-full max-w-xl"></div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[40%]">
            <p className="font-body text-sm mb-3">
              Programme :{" "}
              <span className="bg-[#8E6BBE] text-white px-3 py-1 rounded">
                Play Group
              </span>
            </p>

            <img
              src={programImg}
              alt=""
              className="rounded-2xl w-full object-cover"
            />

            <div className="mt-4">
              <Button text="Enquire Now" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[60%]">
            <h2 className="font-heading text-2xl mb-3">
              First Steps Into Learning
            </h2>

            <p className="font-body text-gray-600 text-md leading-relaxed mb-6">
              A Gentle Introduction To School Where Children Explore, Play, And
              Begin Building Social And Communication Skills In A Warm And
              Caring Environment.
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-8">
              <div>
                <p className="text-md text-gray-500">Age Group</p>
                <p className="font-heading text-[#8E6BBE] text-2xl ">
                  2–3 Years
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Duration</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  3 Hrs/Day
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Focus</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Socialization
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Key Skill</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Basics Communication
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CURRICULUM ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Curriculum</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• Promoting Positive Peer Social Interaction</p>
            <p>• Math Readiness (Number Recognition)</p>
            <p>• Exploration Based Learning</p>

            <p>• Opportunities For Basic Motor Development</p>
            <p>• Language Readiness (Letter Recognition)</p>
          </div>
        </div>

        {/* ================= KIDZEE SPECIAL ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Special</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• Artsy</p>
            <p>• Eco-Conscious</p>
            <p>• Whirl & Twirl</p>

            <p>• Personality Development</p>
            <p>• Tell-A-Tale</p>
            <p>• Sensorium</p>

            <p>• Showstopper</p>
            <p>• Library</p>
            <p>• Critical Thinking – Problem Solving</p>

            <p>• Mental Might</p>
            <p>• Scientific</p>
            <p>• Integrated Sanskar</p>

            <p>• Augmented Reality – Fantasy Box</p>
          </div>
        </div>

        {/* ================= SESSIONS ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Sessions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• Circle Time</p>
            <p>• Numeracy Time</p>
            <p>• Celebration Of Festivals And Special Days</p>

            <p>• Free Play</p>
            <p>• Talk Time</p>
            <p>• Field Trips</p>

            <p>• Knowledge Time</p>
            <p>• Outdoor</p>
            <p>• Puppet Shows And Skits</p>

            <p>• Language Time</p>
            <p>• Indoor</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[40%]">
            <p className="font-body text-sm mb-3">
              Programme :{" "}
              <span className="bg-[#8E6BBE] text-white px-3 py-1 rounded">
                Nursery
              </span>
            </p>

            <img
              src={nursery}
              alt=""
              className="rounded-2xl w-full object-cover"
            />

            <div className="mt-4">
              <Button text="Enquire Now" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[60%]">
            <h2 className="font-heading text-2xl mb-3">Discover & Explore</h2>

            <p className="font-body text-gray-600 text-md leading-relaxed mb-6">
              Children Begin Structured Learning While Developing Language,
              Motor Skills And Curiosity Through Engaging Activites.
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-8">
              <div>
                <p className="text-md text-gray-500">Age Group</p>
                <p className="font-heading text-[#8E6BBE] text-2xl ">
                  3–4 Years
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Duration</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  3 Hrs/Day
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Focus</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Early Learning
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Key Skill</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Language & Motor Skills
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CURRICULUM ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Curriculum</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• "Panchkosha" Integrated</p>
            <p>• Developing Oral Communication Skills</p>
            <p>• Language Development(Phonics)</p>

            <p>• Opportunities For Advance Fine And Gross Motor Development</p>
            <p>• Math Development(Number Value)</p>
            <p>• Learning To Express Through Art And Drama</p>
            <p>
              • Facililtaing Cognitive Development (Sorts Using Two Attributes)
            </p>
          </div>
        </div>

        {/* ================= KIDZEE SPECIAL ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Special</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• English Readiness Programme</p>
            <p>• Mental Might</p>
            <p>• Library</p>

            <p>• Introduction To Phonics</p>
            <p>• Tell-A-Tale</p>
            <p>• Sensorium</p>

            <p>• Artsy</p>
            <p>• Eco-Conscious</p>
            <p>• Critical Thinking – Problem Solving</p>

            <p>• Personality Development</p>
            <p>• Scientific</p>
            <p>• Integrated Sanskar</p>

            <p>• Showstopper</p>
            <p>• Whirl & Twirl</p>
            <p>• Augmented Reality – Fantasy Box</p>
          </div>
        </div>

        {/* ================= SESSIONS ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Sessions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• Circle Time</p>
            <p>• Personality Development</p>
            <p>• Indoor</p>

            <p>• Free Play</p>
            <p>• Showstopper</p>
            <p>• Whirl & Twirl</p>

            <p>• Knowledge Time</p>
            <p>• Mental Might</p>
            <p>• Sensorium</p>

            <p>• Language Time</p>
            <p>• Eco-Conscious</p>
            <p>• Critical Thinking</p>

            <p>• English Readiness Programme</p>
            <p>• Numeracy Time</p>
            <p>• Celebration Of Festivals And Special Days</p>

            <p>• Artsy</p>
            <p>• Tell-A-Tale</p>
            <p>• Field Trips</p>

            <p>• Library</p>
            <p>• Scientific</p>
            <p>• Puppet Shows And Skits</p>

            <p>• Talk Time</p>
            <p>• Outdoor</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[40%]">
            <p className="font-body text-sm mb-3">
              Programme :{" "}
              <span className="bg-[#8E6BBE] text-white px-3 py-1 rounded">
                Junior Kinder Garten
              </span>
            </p>

            <img
              src={junior}
              alt=""
              className="rounded-2xl w-full object-cover"
            />

            <div className="mt-4">
              <Button text="Enquire Now" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[60%]">
            <h2 className="font-heading text-2xl mb-3">Building Foundations</h2>

            <p className="font-body text-gray-600 text-md leading-relaxed mb-6">
              Children Develop Early Academic Skills While Improving Confidence,
              Communication And Independent Thinking.
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-8">
              <div>
                <p className="text-md text-gray-500">Age Group</p>
                <p className="font-heading text-[#8E6BBE] text-2xl ">
                  4–5 Years
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Duration</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  4 Hrs/Day
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Focus</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Academic Readiness
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Key Skill</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Reading and Numbers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CURRICULUM ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Curriculum</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• English Readiness Programme</p>
            <p>• 'Panchkosha' Integrated</p>

            <p>• Math Operations</p>
            <p>• Developing Oral And Written Communication Skills</p>

            <p>• Visual & Performance Art</p>
            <p>• Personal, Social, And Emotional Growth</p>

            <p>
              • Promoting Cognitive Development (Sorts Using Multiple
              Attributes)
            </p>
          </div>
        </div>

        {/* ================= KIDZEE SPECIAL ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Special</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• English Readiness Programme</p>
            <p>• Eco-Conscious</p>
            <p>• Sensorium</p>

            <p>• Artsy</p>
            <p>• Tell-A-Tale</p>
            <p>• Critical Thinking – Problem Solving</p>

            <p>• Personality Development</p>
            <p>• Library</p>
            <p>• Integrated Sanskar</p>

            <p>• Showstopper</p>
            <p>• Scientific</p>
            <p>• Augmented Reality – Fantasy Box</p>

            <p>• Mental Might</p>
            <p>• Whirl & Twirl</p>
          </div>
        </div>

        {/* ================= SESSIONS ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Sessions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• Circle Time</p>
            <p>• Talk Time</p>
            <p>• Phonics</p>

            <p>• Free Play</p>
            <p>• Outdoor</p>
            <p>• Puppet Shows And Skits</p>

            <p>• Knowledge Time</p>
            <p>• Indoor</p>
            <p>• Celebration Of Festivals And Special Days</p>

            <p>• Language Time</p>
            <p>• Field Trips</p>

            <p>• Numeracy Time</p>
            <p>• Hindi</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[40%]">
            <p className="font-body text-sm mb-3">
              Programme :{" "}
              <span className="bg-[#8E6BBE] text-white px-3 py-1 rounded">
                Senior Kinder Garten
              </span>
            </p>

            <img
              src={senior}
              alt=""
              className="rounded-2xl w-full object-cover"
            />

            <div className="mt-4">
              <Button text="Enquire Now" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[60%]">
            <h2 className="font-heading text-2xl mb-3">Ready For School</h2>

            <p className="font-body text-gray-600 text-md leading-relaxed mb-6">
              A Strctured Program Preparing Children For Primary School With
              Strong Literacy, Numceracy And Social Skills.
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-8">
              <div>
                <p className="text-md text-gray-500">Age Group</p>
                <p className="font-heading text-[#8E6BBE] text-2xl ">
                  5–6 Years
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Duration</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  4 Hrs/Day
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Focus</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  School Readiness
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Key Skill</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Confidence And Independence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CURRICULUM ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Curriculum</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• English Readiness Programme</p>
            <p>• 'Panchkosha' Integrated</p>

            <p>• Math Operations</p>
            <p>• Developing Oral And Written Communication Skills</p>

            <p>• Visual & Performance Art</p>
            <p>• Personal, Social, And Emotional Growth</p>

            <p>
              • Promoting Cognitive Development (Sorts Using Multiple
              Attributes)
            </p>
          </div>
        </div>

        {/* ================= KIDZEE SPECIAL ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Special</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• English Readiness Programme</p>
            <p>• Eco-Conscious</p>
            <p>• Sensorium</p>

            <p>• Artsy</p>
            <p>• Tell-A-Tale</p>
            <p>• Critical Thinking – Problem Solving</p>

            <p>• Personality Development</p>
            <p>• Library</p>
            <p>• Integrated Sanskar</p>

            <p>• Showstopper</p>
            <p>• Scientific</p>
            <p>• Augmented Reality – Fantasy Box</p>

            <p>• Mental Might</p>
            <p>• Whirl & Twirl</p>
          </div>
        </div>

        {/* ================= SESSIONS ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Kidzee Sessions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 text-sm text-black-800 font-medium">
            <p>• Circle Time</p>
            <p>• Talk Time</p>
            <p>• Phonics</p>

            <p>• Free Play</p>
            <p>• Outdoor</p>
            <p>• Puppet Shows And Skits</p>

            <p>• Knowledge Time</p>
            <p>• Indoor</p>
            <p>• Celebration Of Festivals And Special Days</p>

            <p>• Language Time</p>
            <p>• Field Trips</p>

            <p>• Numeracy Time</p>
            <p>• Hindi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetail;
