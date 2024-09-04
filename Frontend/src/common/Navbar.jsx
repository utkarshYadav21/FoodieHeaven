import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className=" flex justify-between items-center h-16 mx-10 ">
      <div className=" font-extrabold text-3xl text-amber-400 cursor-pointer" onClick={()=>navigate("/")}>
        FoodieHeaven
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-6">
            <FaShoppingCart className="text-gray-500 text-2xl cursor-pointer hover:text-amber-500" onClick={()=>navigate("/cart")} />
            <div
              onClick={() => navigate("/profile")}
              className="flex items-center cursor-pointer hover:text-amber-500"
            >
              <FaUser className="text-gray-500 text-xl" />
              <p className="ml-2 text-gray-800 ">{user.name}</p>
            </div>
            <button
              className="bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-3 py-2 font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
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
