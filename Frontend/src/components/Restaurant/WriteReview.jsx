import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const WriteReview = () => {
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleStarClick = (index) => {
    if (stars === index + 1) setStars(0);
    else setStars(index + 1);
  };

  return (
    <div className="mt-4 bg-gray-100 p-4 rounded-lg  border-2">
      <div>
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Write a review"
          className="outline-1 outline rounded-2xl w-full px-2 py-2 resize-none overflow-hidden h-auto min-h-[40px]"
          style={{ minHeight: "40px" }}
          rows={3}
        />
        <div className="flex justify-between px-4 mt-2 items-center">
          <div className="flex items-center mt-3">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer text-xl ${
                  index < stars ? "text-amber-500" : "text-gray-400"
                }`}
                onClick={() => {
                  handleStarClick(index);
                }}
              />
            ))}
          </div>
          <button className="bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-3 py-2 font-semibold">
            Add review
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
