import React from "react";
import ProgramCard from "../../components/program/ProgramCard";

/* Add your images here */
import playgroup from "../../assets/playgroup.png";
import nursery from "../../assets/nursery.png";
import junior from "../../assets/junior.png";
import senior from "../../assets/senior.png";

const Program = () => {
  return (
    <section className="bg-[#ECE4F3] py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="font-pecita text-red-400 text-2xl">
            Programs We Offer
          </p>

          <h2 className="font-heading text-2xl md:text-3xl text-gray-800 mt-2">
            Programs Designed For Every Stage
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl justify-center mx-auto">

          <ProgramCard
            image={playgroup}
            title="Play Group"
            description="A Gentle Introduction To School Where Children Explore, Play, And Begin Building Social And Communication Skills In A Warm And Caring Environment."
          />

          <ProgramCard
            image={nursery}
            title="Nursery"
            description="Children Begin Structured Learning While Developing Language, Motor Skills, And Curiosity Through Engaging Activities."
          />

          <ProgramCard
            image={junior}
            title="Junior KG"
            description="Children Develop Early Academic Skills While Improving Confidence, Communication, And Independent Thinking."
          />

          <ProgramCard
            image={senior}
            title="Senior KG"
            description="A Structured Program Preparing Children For Primary School With Strong Literacy, Numeracy, And Social Skills."
          />

        </div>

      </div>

    </section>
  );
};

export default Program;