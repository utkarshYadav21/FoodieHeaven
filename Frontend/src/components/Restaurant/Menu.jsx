import React from "react";
import { FaPlus } from "react-icons/fa";

const Menu = ({ dishes, addToOrders }) => {
  return (
    <div>
      <div className="mt-16 grid gap-y-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => {
          return (
            <div key={index} className="relative w-48 h-48 shadow-lg rounded-lg p-4 flex flex-col items-center justify-between group hover:bg-amber-500 cursor-pointer transition duration-150 transform hover:scale-105">
              <div className="absolute -top-10">
                <img
                  src={dish.image}
                  alt="Food Item"
                  className="w-24 h-24 rounded-full border-4 border-amber-500 shadow-md"
                />
              </div>
              <div className="flex flex-col items-center mt-14">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-gray-600 group-hover:text-white">
                  {dish.type}
                </p>
                <p className="text-gray-600 group-hover:text-white">
                  Rs. {dish.price}
                </p>
              </div>
              <div className="absolute -bottom-6 flex justify-center w-full">
                <button
                  onClick={() => addToOrders(dish)}
                  className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:bg-black"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
