import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Menu from "../components/Restaurant/Menu";
import Reviews from "../components/Restaurant/Reviews";
import { API } from "../utils/ApiUrls";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Restaurant = () => {
  const { resId } = useParams();
  const [rest, setRest] = useState("");
  const [selected, setSelected] = useState("Menu");
  const categories = ["Menu", "Reviews"];
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getRestaurant();

    // Load orders from sessionStorage when the component mounts
    const storedOrders = sessionStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  // Function to update orders and sessionStorage together
  const updateOrders = (newOrders) => {
    setOrders(newOrders);
    sessionStorage.setItem("orders", JSON.stringify(newOrders));
  };

  const increaseQuantity = (ind) => {
    const newOrders = orders.map((order, index) =>
      index === ind ? { ...order, quantity: order.quantity + 1 } : order
    );
    updateOrders(newOrders);
  };

  const decreaseQuantity = (ind) => {
    const newOrders = orders.map((order, index) =>
      index === ind && order.quantity > 1
        ? { ...order, quantity: order.quantity - 1 }
        : order
    );
    updateOrders(newOrders);
  };

  const deleteOrder = (ind) => {
    const newOrders = orders.filter((order, index) => index !== ind);
    updateOrders(newOrders);
  };

  const getRestaurant = async () => {
    try {
      let response = await fetch(`${API}/restaurant/${resId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log("sdsds",response);
      if (response.status === "Success") {
        setRest(response.restaurant);
        console.log("Restaurant fetched");
      } else {
        console.log(response.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addToOrders = (newDish) => {
    const quantity = 1;
    const restaurantName = rest.name;
    console.log(newDish);
    console.log(orders);
    if (orders.length !== 0) {
      orders.forEach((order) => {
        console.log(order);
        if (newDish._id === order._id) {
          order.quantity++;
          updateOrders(orders);
        } else {
          const newOrders = [
            ...orders,
            { ...newDish, quantity, restaurantName },
          ];
          updateOrders(newOrders);
        }
      });
    } else {
      const newOrders = [...orders, { ...newDish, quantity, restaurantName }];
      updateOrders(newOrders);
    }
  };

  const addToCart = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("Login First");
        return;
      }
      let dishes = [];

      orders.map((order) => {
        let dishInfo = {
          dish: order._id, // Set dish ID
          quantity: order.quantity, // Set quantity
        };
        dishes = [...dishes, dishInfo]; // Add new dishInfo to the dishes array
      });
      let response = await fetch(`${API}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user._id, resId, dishes }),
      });
      response = await response.json();
      console.log(response);
      if (response.status === "Success") {
        toast.success("Items Added to cart");
        sessionStorage.removeItem("orders");
        setOrders([]);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pb-20">
      {rest === "" ? (
        "Loading"
      ) : (
        <>
          <img
            src="/Savage-2019-top-50-busy-restaurant.jpg"
            className="w-[85%] h-[30rem] mx-auto mt-8 rounded-xl"
          />
          <div className="mt-8">
            <div className="flex justify-center items-start gap-8">
              <div className="w-[55%]">
                <div className="  shadow-lg shadow-gray-300 h-fit pb-5">
                  <div className=" mx-6 text-xl mt-3 ">
                    <h3 className="font-bold">{rest.name}</h3>
                    <p className="text-lg font-semibold mt-1">
                      Description:{" "}
                      <span className="text-md font-normal">
                        {rest.description}
                      </span>
                    </p>
                    <div className="mt-3 font-semibold flex flex-col">
                      <div className="flex justify-between items-center text-sm mr-3 font-semibold">
                        <h3 className=" bg-slate-300 px-3 py-1 rounded-2xl">
                          {rest.location}
                        </h3>
                        <h3 className=" flex items-center gap-2">
                          4 <FaStar className="text-amber-600 text-xl" />
                        </h3>
                      </div>
                      <div className="flex gap-3 text-sm mt-3 font-semibold">
                        {rest.cuisines.map((cuisine, index) => {
                          return (
                            <h3
                              key={index}
                              className=" bg-slate-300 px-3 py-1 rounded-2xl"
                            >
                              {cuisine}
                            </h3>
                          );
                        })}
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

                  {selected === "Menu" ? (
                    <Menu dishes={rest.dishes} addToOrders={addToOrders} />
                  ) : (
                    <Reviews reviews={rest.reviews} />
                  )}
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
                  {orders.map((order, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mx-10 mt-2 w-full"
                    >
                      <div className="w-1/4">
                        <button
                          onClick={() => decreaseQuantity(index)}
                          className="bg-amber-500 text-white w-6 h-6  rounded-full"
                        >
                          -
                        </button>
                        <span className="mx-4">{order.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(index)}
                          className="bg-amber-500 text-white w-6 h-6  rounded-full"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex flex-col  w-2/4 ml-2">
                        <h3 className="text-lg font-semibold mt-1">
                          {order.name}
                        </h3>
                        <p className="text-md">Rs. {order.price}</p>
                      </div>
                      <div className="w-1/4">
                        <MdDelete
                          className="text-amber-500 cursor-pointer text-2xl"
                          onClick={() => deleteOrder(index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-3 mt-3 border-t border-gray-400 flex justify-center">
                  <button
                    onClick={addToCart}
                    className="bg-amber-500 w-3/4 hover:bg-amber-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Restaurant;
