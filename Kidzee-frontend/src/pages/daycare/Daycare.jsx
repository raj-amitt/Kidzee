import React from "react";
import Button from "../../components/button/Button";

/* YOU WILL IMPORT THESE */
import bestpreschoolinindirapuramclassroom from "../../assets/best-preschool-in-indirapuram-classroom.png";
import teddy from "../../assets/teddy.png";
import daycareinindirapuramfacility from "../../assets/daycare-in-indirapuram-facility.png";

const Daycare = () => {
  return (
    <section className="bg-[#F3EDF7]">
      {/* ================= HERO ================= */}
      <div className="relative h-[220px] md:h-[260px] flex items-center">
        <img
          src={bestpreschoolinindirapuramclassroom}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <img src={teddy} alt="" className="w-10" loading="lazy" />
            <div>
              <p className="text-sm opacity-80">Home / Daycare</p>
              <p className="font-pecita text-yellow-300 text-2xl">
                Safe, Caring & Happy Daycare For Your Little Ones
              </p>
            </div>
          </div>

          <h1 className="font-heading text-lg md:text-2xl max-w-2xl">
            A Nurturing Environment Where Children Learn, Play, And Grow While
            Parents Stay Worry-Free.
          </h1>

          <div className="mt-3 h-[1px] bg-white/40 w-full max-w-xl"></div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT */}
          <div className="w-full lg:w-[40%]">
            <p className="font-body text-sm mb-3">
              Programme :{" "}
              <span className="bg-[#8E6BBE] text-white px-3 py-1 rounded">
                Daycare
              </span>
            </p>

            <img
              src={daycareinindirapuramfacility}
              alt=""
              className="rounded-2xl w-full object-cover"
              loading="lazy"
            />

            <div className="mt-4">
              <Button text="Enquire Now" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[60%]">
            <h2 className="font-heading text-2xl mb-3">
              A Home Away From Home For Your Child!
            </h2>

            <p className="font-body text-gray-600 text-md leading-relaxed mb-6">
              We Understand That The Early Years In The Child’s Life Are Important
              For The Overall Development. The Primary Role Of Parents In These
              Years Is To Provide Their Children With An Environment That Is
              Loving, Caring, Fun-Filled And One Which Provides Happy Experiences.
              As These Aspects Play A Very Important Role In Fostering The
              Developmental Areas, Like, Cognitive Development, Physical
              Development, Socio-Emotional Development, Creative Development, And
              Language Development. Our Objective Is To Create A Home Away From
              Home For Them To Feel Safe, Secure And Happy.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-8">
              <div>
                <p className="text-md text-gray-500">Age Group</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  1.5–10 Years
                </p>
              </div>

              <div>
                <p className="text-md text-gray-500">Duration</p>
                <p className="font-heading text-[#8E6BBE] text-2xl">
                  Morning To Evening
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= WALKTHROUGH ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">
            Take A Walkthrough Of A Day At Kidzee Daycare Facility :
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-3 text-sm font-medium">
            <p>• Freshen Up</p>
            <p>• Indoor Activities</p>

            <p>• Lunch</p>
            <p>• Snacks</p>

            <p>• Nap Time</p>
            <p>• Outdoor Activities</p>

            <p>• Academics And Academic Assistance.(Home Work)</p>
            <p>• Edutainment</p>

            <p>• Inter-Intra Personal Skills</p>
          </div>
        </div>

        {/* ================= SAFETY ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Safety & Security</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-sm font-medium">
            <p>• CCTV Monitored Classrooms</p>
            <p>• Clean & Sanitized Environment</p>

            <p>• Secure Entry & Exit</p>
            <p>• Parent Updates</p>

            <p>• Verified Staff</p>
          </div>
        </div>

        {/* ================= FACILITIES ================= */}
        <div className="mt-10">
          <h3 className="font-heading text-lg mb-4">Facilities</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-sm font-medium">
            <p>• Play Area</p>
            <p>• Clean Washrooms</p>

            <p>• Nap Area</p>
            <p>• Activity Space</p>

            <p>• Learning Zone</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Daycare;