import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import WriteReview from "./WriteReview";
import { API } from "../../utils/ApiUrls";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <WriteReview />
      <div className=" gap-x-7 gap-y-4 mt-10 grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {reviews.map((review, index) => {
          return <ReviewCard review={review} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
