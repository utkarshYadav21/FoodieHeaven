import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  let user = localStorage.getItem("user");
  if (!user) {
    navigate("/");
  }
  user = JSON.parse(user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [voterId, setVoterId] = useState(user.voterId);

  const handleUpdateProfile = () => {
    const updatedUser = { name, email, voterId };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully");
  };

  return (
    <div
      className="text-white pt-24 pb-20 bg-gradient-to-r from-amber-200 to-amber-100"

    >
      <div className="flex flex-row justify-around items-center">
        <div className="grid gap-10 min-w-[30%]">
          <div className="pb-12 px-8 rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-72 h-72 rounded-full border-2 border-solid border-gray-600 flex items-center justify-center">
                <FaUser className="text-8xl text-gray-600" />
              </figure>
            </div>
            <div className="text-center mt-6"><button
                onClick={handleUpdateProfile}
                className="bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-3 py-2 font-semibold "
              >
                Update Profile
              </button></div>

          </div>
        </div>
        <div className="-mt-20">
          <div className="w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6 text-gray-500 bg-white">
            <div>
              <h3 className="heading text-xl mb-2 text-black">Name</h3>
              <input
                className="text-para rounded-full px-2 my-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6 text-gray-500 bg-white">
            <div>
              <h3 className="heading text-xl  mb-2 text-black">Email</h3>
              <input
                className="text-para rounded-full px-2 my-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          
          <div className="w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6 text-gray-500 bg-white">
            <div className="flex justify-around">
              <button
                className="bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-3 py-2 font-semibold w-1/3"
              >
                Favourites
              </button>
              <button
                className="bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-3 py-2 font-semibold w-1/3"
              >
                Orders
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
