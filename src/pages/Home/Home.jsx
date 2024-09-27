import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import CardsList from "../../components/Home/CardsList";
import { API } from "../../utils/ApiUrls";
import SliderComponent from "../../components/Home/SliderComponent";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [restaurants, setRestaurants] = useState([]);
  const categories = ["All", "Pizza", "Burgers", "Breakfast", "Snacks"];
  const [fav, setFav] = useState([]);
  let user = JSON.parse(localStorage.getItem("user"));

  const fetchData = async () => {
    let response = await fetch(`${API}/restaurant/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    if (response.status === "Success") {
      setRestaurants(response.restaurants);
    }
  };
  const fetchFav = async () => {
    console.log(user,user._id)
    let response = await fetch(`${API}/fav/${user._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    if (response.status === "Success") {
      setFav(response.restaurants);
    }
  };

  useEffect(() => {
    fetchData();
    fetchFav();
  }, []);

  return (
    <div className="pb-20">
      <div>
        <img
          src="https://www.foodora.com/wp-content/uploads/2023/05/foodora-about-header-1.jpg"
          className="w-3/4 h-auto mx-auto shadow-xl rounded-[50px] shadow-slate-300 mt-6 "
        />
      </div>
      <div className="mt-12">
        <div className="flex justify-between items-center mx-10">
          <h2 className="text-4xl font-bold">Restaurants</h2>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search"
              className="w-64 h-10 bg-slate-200 placeholder:text-black placeholder:font-semibold rounded-xl px-8"
            />
            <IoSearchOutline />
          </div>
        </div>
        <div className="mt-6 ml-16">
          <ul className="flex list-none text-xl justify-start gap-16">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer font-semibold ${
                  selectedCategory === category
                    ? "bg-amber-500 rounded-3xl px-6 py-1 text-white"
                    : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <CardsList restaurants={restaurants} />
        </div>
      </div>
      <div className="px-6 py-12 flex justify-between">
        <div className="w-1/3 ">
          <h2 className="text-4xl font-bold mb-2 text-gray-800 flex items-center">
            <span className="mr-2">Favorites</span>
            {/* Optional: Add decorative icon */}
          </h2>
          <p className="text-gray-600 mb-8">
            Your chosen restaurants are here to make you smile—it's like they
            were made just for you!
          </p>
        </div>

        <div className="w-full">
          <SliderComponent
            slides={fav}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
