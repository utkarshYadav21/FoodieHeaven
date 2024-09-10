import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { API } from "../../utils/ApiUrls";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const WriteReview = () => {
  const { resId } = useParams();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState("");
  useEffect(() => {
    let u = localStorage.getItem("user");
    if (u) {
      u = JSON.parse(u);
      setUser(u);
    }
  }, []);
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleStarClick = (index) => {
    if (rating === index + 1) setRating(0);
    else setRating(index + 1);
  };

  const postReview = async () => {
    try {
      let response = await fetch(`${API}/review/post/${resId}`, {
        method: "POST",
        body: JSON.stringify({ review, rating, createdBy: user._id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log(response);
      if (response.status === "Success") {
        toast.success("Review added successfully");
      } else {
        console.log(response.error);
        toast.error(response.error);
      }
    } catch (err) {
      toast.error("Fetch failed");
      console.error(err);
    }
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
                  index < rating ? "text-amber-500" : "text-gray-400"
                }`}
                onClick={() => {
                  handleStarClick(index);
                }}
              />
            ))}
          </div>
          <button
            className="bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-3 py-2 font-semibold"
            onClick={postReview}
          >
            Add review
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
