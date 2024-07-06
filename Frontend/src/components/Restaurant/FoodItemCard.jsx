import React from "react";
import { FaPlus } from "react-icons/fa";

const FoodItemCard = () => {
  return (
    <div className="relative w-48 h-48 shadow-lg rounded-lg p-4 flex flex-col items-center justify-between group hover:bg-amber-500 cursor-pointer transition duration-150 transform hover:scale-105">
      <div className="absolute -top-10">
        <img
          src="classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          alt="Food Item"
          className="w-24 h-24 rounded-full border-4 border-amber-500 shadow-md"
        />
      </div>
      <div className="flex flex-col items-center mt-14">
        <h3 className="text-lg font-semibold">Paneer</h3>
        <p className="text-gray-600 group-hover:text-white">Veg</p>
        <p className="text-gray-600 group-hover:text-white">Rs. 100</p>
      </div>
      <div className="absolute -bottom-6 flex justify-center w-full">
        <button className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:bg-black">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
