import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Menu from "./Menu";
import Reviews from "./Reviews";

const Restaurant = () => {
  const [selected, setSelected] = useState("Menu");
  const categories = ["Menu", "Reviews"];
  const [orders, setOrders] = useState([
    { id: 1, name: "Paneer", price: 100, quantity: 1 },
    { id: 2, name: "Roti", price: 100, quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, quantity: order.quantity + 1 } : order
      )
    );
  };

  const decreaseQuantity = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id && order.quantity > 1
          ? { ...order, quantity: order.quantity - 1 }
          : order
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <img
        src="/Savage-2019-top-50-busy-restaurant.jpg"
        className="w-4/5 h-[30rem] mx-auto mt-8 rounded-xl"
      />
      <div className="mt-8">
        <div className="flex justify-center items-start gap-8">
          <div className="w-6/12 ">
            <div className="  shadow-lg shadow-gray-300 h-60">
              <div className=" mx-6 text-xl mt-3 ">
                <h3 className="font-bold">Burger King</h3>
                <p className="text-lg font-semibold mt-1">
                  Description:{" "}
                  <span className="text-md font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </p>
                <div className="mt-3 font-semibold flex flex-col">
                  <div className="flex justify-between items-center text-md mr-3 font-semibold">
                    <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl">
                      New Delhi
                    </h3>
                    <h3 className=" flex items-center gap-2">
                      4 <FaStar className="text-amber-600 text-xl" />
                    </h3>
                  </div>
                  <div className="flex gap-3 text-sm mt-3 font-semibold">
                    <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl">
                      Italian
                    </h3>
                    <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl">
                      Chinese
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="mt-8 ">
                <ul className="flex list-none text-xl justify-start gap-16">
                  {categories.map((category, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          setSelected(category);
                          console.log("clic");
                        }}
                        className={`cursor-pointer font-semibold ${
                          selected === category
                            ? "bg-amber-500 rounded-3xl px-6 py-1 text-white"
                            : ""
                        }`}
                      >
                        {category}
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {selected === "Menu" ? <Menu /> : <Reviews />}
            </div>
          </div>
          <div className=" w-[28%] shadow-lg shadow-gray-300 py-3">
            <div className="flex justify-between items-center mx-8">
              <h3 className="text-xl font-bold">Your Order</h3>
              <p>
                Rs.{" "}
                {orders.reduce(
                  (total, order) => total + order.price * order.quantity,
                  0
                )}
              </p>
            </div>
            <div className="mt-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex justify-between items-center mx-10 mt-2"
                >
                  <div>
                    <button
                      onClick={() => decreaseQuantity(order.id)}
                      className="bg-amber-500 text-white w-6 h-6  rounded-full"
                    >
                      -
                    </button>
                    <span className="mx-4">{order.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(order.id)}
                      className="bg-amber-500 text-white w-6 h-6  rounded-full"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-col  ">
                    <h3 className="text-lg font-semibold mt-1">{order.name}</h3>
                    <p className="text-md">Rs. {order.price}</p>
                  </div>
                  <MdDelete
                    className="text-amber-500 cursor-pointer"
                    onClick={() => deleteOrder(order.id)}
                  />
                </div>
              ))}
            </div>
            <div className="pt-3 mt-3 border-t border-gray-400 flex justify-center">
              <button className="bg-amber-500 w-3/4 hover:bg-amber-700 text-white rounded-lg px-3 py-3 font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
