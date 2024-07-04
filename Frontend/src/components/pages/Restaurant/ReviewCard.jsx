import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="w-full max-w-[23rem] p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* {[...Array(stars)].map((_, index) => ( */}
          <FaStar className="text-amber-500" />
          <FaStar className="text-amber-500" />
          <FaStar className="text-amber-500" />
          <FaStar className="text-amber-500" />
          {/* ))} */}
        </div>
        <p className="text-gray-600 text-sm">13.02.2024</p>
      </div>
      <p className="mt-4 text-gray-800">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using.
      </p>
      <div className="flex items-center mt-4">
        <FaUser className="text-gray-500 w-6 h-6" />
        <p className="ml-2 text-gray-800">Utkarsh Yadav</p>
      </div>
    </div>
  );
};

export default ReviewCard;
