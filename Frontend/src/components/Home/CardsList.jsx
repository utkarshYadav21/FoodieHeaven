import React from "react";
import RestaurantCard from "./RestaurantCard";

const CardsList = ({ restaurants }) => {
  console.log(restaurants);
  return (
    <div className="flex flex-wrap justify-evenly gap-y-10">
      {restaurants.map((restaurant, index) => {
        return <RestaurantCard key={index} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default CardsList;
