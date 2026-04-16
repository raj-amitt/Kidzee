import React from "react";
import WhyCard from "../../components/why/WhyCard";

/* Import icons (replace with your actual icons) */
import learningIcon from "../../assets/learning.png";
import safetyIcon from "../../assets/safety.png";
import developmentIcon from "../../assets/development.png";
import healthIcon from "../../assets/health.png";
import emotionalIcon from "../../assets/emotional.png";
import appIcon from "../../assets/app.png";

const Why = () => {
  return (
    <section className="bg-[#ECE4F3] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="font-pecita text-red-400 text-2xl">
            Why Parents Trust Us?
          </p>

          <h2 className="font-heading text-2xl md:text-3xl text-gray-800 mt-2 max-w-2xl mx-auto">
            Every Smile, Every Question, And Every Small Achievement Is Celebrated Here
          </h2>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <WhyCard
            icon={learningIcon}
            title="Personalized Learning"
            subtitle="Pentemind Pedagogy & NEP 2020"
            description="Scientifically Designed Framework Nurturing Cognitive, Physical, Language, Social, And Emotional Growth Through Experiential Play-Based Learning."
          />

          <WhyCard
            icon={safetyIcon}
            title="Safety You Can Rely On"
            subtitle="CCTV-Monitored & Secure"
            description="CCTV-Monitored Classrooms With Parent Access, Trained Educators, Secure Entry-Exit Systems, And Strict Hygiene Practices For Peace Of Mind."
          />

          <WhyCard
            icon={developmentIcon}
            title="Holistic Development"
            subtitle="Structured & Creative Learning"
            description="Balanced Blend Building Communication Skills, Critical Thinking, Confidence, Independence, And Complete School Readiness."
          />

          <WhyCard
            icon={healthIcon}
            title="Health & Hygiene First"
            subtitle="Clean & Nutritious Environment"
            description="Clean Classrooms, Sanitized Spaces, And Healthy, Hygienic Meals Provided To Support The Growth And Energy Needs Of Children."
          />

          <WhyCard
            icon={emotionalIcon}
            title="Emotional Well-Being"
            subtitle="SED Connect Approach"
            description="Gentle Approach Helping Children Overcome Separation Anxiety, Building Confidence, Independence, And Emotional Security."
          />

          <WhyCard
            icon={appIcon}
            title="Stay Connected Always"
            subtitle="Kidzee Parent App"
            description="Regular Updates Through The Parent App With Daily Activities, Progress Reports, Photos, And Announcements Keeping You Involved."
          />

        </div>

      </div>
    </section>
  );
};

export default Why;