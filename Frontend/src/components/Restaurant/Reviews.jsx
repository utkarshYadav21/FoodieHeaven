import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-4 mt-12">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default Reviews;
