import React from "react";
import RestaurantCard from "./RestaurantCard";

const CardsList = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-y-10">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

export default CardsList;
