import React from "react";
import ReviewCard from "./ReviewCard";
import WriteReview from "./WriteReview";

const Reviews = () => {
  return (
    <div>
      <WriteReview />
      <div className="flex flex-wrap gap-x-7 gap-y-4 mt-10">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
