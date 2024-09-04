import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString();
  const formattedName = review.createdBy.name.charAt(0).toUpperCase() + review.createdBy.name.slice(1);

  return (
    <div className="w-full max-w-[23rem] p-4 bg-white shadow-lg rounded-lg group hover:bg-amber-500 transition duration-150 transform hover:scale-105 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {[...Array(review.rating)].map((_, index) => (
            <FaStar
              key={index}
              className="text-amber-500 group-hover:text-white"
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm group-hover:text-white">
          {formattedDate}
        </p>
      </div>
      <p className="mt-4 text-gray-800 group-hover:text-white">
        {review.review}
      </p>
      <div className="flex items-center mt-4">
        <FaUser className="text-gray-500 w-6 h-6 group-hover:text-white" />
        <p className="ml-2 text-gray-800 group-hover:text-white">
          {formattedName}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
