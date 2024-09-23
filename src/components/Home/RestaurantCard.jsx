import React, { useEffect } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../utils/ApiUrls";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  const handleClick = () => {
    navigate(`/${restaurant.RestaurntDetails._id}`);
  };
  let liked = false;
  useEffect(() => {
    liked = true;
  }, [user]);
  if (user) {
    user.favRestaurants.forEach((res) => {
      // Compare the two IDs only if both are valid
      if (
        res &&
        restaurant._id &&
        res.toString() === restaurant._id.toString()
      ) {
        liked = true;
      }
    });
  }

  const addToFav = async () => {
    try {
      if (!user) {
        toast.error("Login First");
        return;
      }

      let response = await fetch(`${API}/fav/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resId: restaurant._id, userId: user._id }),
      });
      response = await response.json();
      console.log(response);
      if (response.status === "success") {
        localStorage.setItem("user", JSON.stringify(response.user));
        toast.success("Restaurant added to favourites");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeFavRest = async () => {
    console.log("sasa");
    try {
      let response = await fetch(`${API}/fav/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resId: restaurant._id, userId: user._id }),
      });
      response = await response.json();
      console.log(response);
      if (response.status === "Success") {
        localStorage.setItem("user", JSON.stringify(response.user));
        toast.success("Restaurant removed from favourites");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-96 h-[22.5rem] shadow-lg shadow-slate-300 ">
      <img
        src="/26-5adafa56c6733500373c3cf5.jpg"
        className="w-96 h-60 rounded-tl-xl rounded-tr-xl"
      />
      <div className=" relative -mt-8 bg-white pt-1 rounded-tl-xl rounded-tr-xl font-bold">
        <div className="flex justify-between items-center mx-6 text-lg mt-3">
          <h3 className=" cursor-pointer " onClick={handleClick}>
            {restaurant.name}
          </h3>
          {liked ? (
            <FaHeart
              className="text-amber-600 transition duration-150 transform hover:scale-105 cursor-pointer"
              onClick={removeFavRest}
            />
          ) : (
            <FaRegHeart
              className="text-amber-600 transition duration-150 transform hover:scale-105 cursor-pointer"
              onClick={addToFav}
            />
          )}
        </div>
        <div className="flex justify-between items-center mx-6 text-sm mt-3 font-semibold">
          <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl">
            {" "}
            {restaurant.RestaurntDetails.location}{" "}
          </h3>
          <h3 className=" flex items-center gap-2">
            4 <FaStar className="text-amber-600 text-xl" />
          </h3>
        </div>
        <div className="flex gap-3 mx-6 text-sm mt-3 font-semibold">
          {restaurant.RestaurntDetails.cuisines.map((cuisine, index) => {
            return (
              <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl" key={index}>
                {cuisine}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
