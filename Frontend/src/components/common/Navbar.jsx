import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center h-16 mx-10 ">
      <div className=" font-extrabold text-3xl text-amber-400">
        FoodieHeaven
      </div>
      <div>
        <button className="w-full max-w-xs mx-auto text-lg bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-4 py-2 font-semibold">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
