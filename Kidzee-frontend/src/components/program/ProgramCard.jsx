import React from "react";
import Button from "../button/Button";

const ProgramCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 hover:shadow-md transition">

      {/* Image */}
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-44 sm:h-48 md:h-52 object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-4">

        {/* Program title */}
        <p className="text-sm font-body text-gray-500">
          Programme :{" "}
          <span className="text-[#985CC7] font-semibold">{title}</span>
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-gray-200 my-3"></div>

        {/* Description */}
        <p className="text-sm text-gray-600 font-body leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <div className="mt-4">
          <Button text="Enquire Now" />
        </div>

      </div>
    </div>
  );
};

export default ProgramCard;