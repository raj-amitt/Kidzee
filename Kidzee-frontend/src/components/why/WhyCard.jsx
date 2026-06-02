import React from "react";

const WhyCard = ({ icon, title, subtitle, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 mb-4">
        <img src={icon} alt={title} className=" object-contain" loading="lazy"/>
      </div>

      {/* Title */}
      <h3 className="font-heading text-lg text-gray-800">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mt-1">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-3 leading-relaxed font-body">
        {description}
      </p>

    </div>
  );
};

export default WhyCard;