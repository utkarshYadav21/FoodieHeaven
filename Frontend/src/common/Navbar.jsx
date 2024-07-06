import React from "react";
import { json, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  let user = localStorage.getItem("user");
  user=JSON.parse(user)
  return (
    <div className=" flex justify-between items-center h-16 mx-10 ">
      <div className=" font-extrabold text-3xl text-amber-400">
        FoodieHeaven
      </div>
      <div>
        {user ? (
          <div className="flex items-center mt-4">
            <FaUser className="text-gray-500 w-6 h-6" />
            <p className="ml-2 text-gray-800">{user.name}</p>
          </div>
        ) : (
          <Link
            className="w-full max-w-xs mx-auto text-lg bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-4 py-2 font-semibold"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
