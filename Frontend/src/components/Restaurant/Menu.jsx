import React, { useState } from "react";
import FoodItemCard from "./FoodItemCard";

const Menu = ({ dishes,addToOrders }) => {
  console.log(dishes)
  return (
    <div>
      <div className="mt-16 grid gap-y-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => {
          return <FoodItemCard key={index} dish={dish} addToOrders={addToOrders}/>;
        })}
      </div>
    </div>
  );
};

export default Menu;
