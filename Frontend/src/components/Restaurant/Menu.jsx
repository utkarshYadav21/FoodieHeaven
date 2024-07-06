import React, { useState } from "react";
import FoodItemCard from "./FoodItemCard";

const Menu = () => {
  return (
    <div>
      <div className="mt-16 flex flex-wrap gap-y-20 gap-x-16">
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
      </div>
    </div>
  );
};

export default Menu;
