import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

const RestaurantCard = () => {
  return (
    <div className="w-96 h-[22.5rem] shadow-lg shadow-slate-300 transition duration-150 transform hover:scale-105 ">
      <img
        src="/26-5adafa56c6733500373c3cf5.jpg"
        className="w-96 h-60 rounded-tl-xl rounded-tr-xl"
      />
      <div className=" relative -mt-8 bg-white pt-1 rounded-tl-xl rounded-tr-xl font-bold">
        <div className="flex justify-between items-center mx-6 text-xl mt-3">
          <h3 className=" cursor-pointer ">Burger King</h3>
          <FaRegHeart className="text-amber-600" />
        </div>
        <div className="flex justify-between items-center mx-6 text-md mt-3 font-semibold">
          <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl"> New Delhi </h3>
          <h3 className=" flex items-center gap-2">
            4 <FaStar className="text-amber-600 text-xl" />
          </h3>
        </div>
        <div className="flex gap-3 mx-6 text-sm mt-3 font-semibold">
          <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl"> Italian </h3>
          <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl"> Chinese </h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
