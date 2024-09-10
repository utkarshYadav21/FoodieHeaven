import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { API } from "../utils/ApiUrls";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [res, setRes] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("Login First");
        return;
      }

      let response = await fetch(`${API}/cart/${user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log(response);
      if (response.status === "Success") {
        setOrders(response.cart.dishes);
        setRes(response.cart.restaurant);
        console.log("Cart items fetched");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const increaseQuantity = (ind) => {
    setOrders((prevOrders) => {
      const newOrders = prevOrders.map((order, index) =>
        index === ind ? { ...order, quantity: order.quantity + 1 } : order
      );
      changeQuantity(newOrders[ind]); // Call changeQuantity with updated order
      return newOrders;
    });
  };

  const decreaseQuantity = (ind) => {
    setOrders((prevOrders) => {
      const newOrders = prevOrders.map((order, index) =>
        index === ind && order.quantity > 1
          ? { ...order, quantity: order.quantity - 1 }
          : order
      );
      changeQuantity(newOrders[ind]); // Call changeQuantity with updated order
      return newOrders;
    });
  };

  const changeQuantity = async (order) => {
    const quantity = order.quantity;
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("Login First");
        return;
      }

      let response = await fetch(`${API}/cart/${user._id}/${order.dish._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quant: quantity }),
      });
      response = await response.json();
      console.log(response);
      if (response.status === "Success") {
        console.log("Quantity Updated");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCart = async (order) => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("Login First");
        return;
      }

      let response = await fetch(`${API}/cart/${user._id}/${order.dish._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log(response);
      if (response.status === "Success") {
        console.log("Item successfully deleted");
        window.location.reload();
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-[88%] mx-auto space-y-4 pb-4 pt-4">
      <div className="mb-5 space-y-4">
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md w-full"
            >
              <div className="flex items-center gap-6 md:w-[40%] lg:w-[26%]">
                <img
                  src={order.dish.image}
                  alt="Dish Image"
                  className="w-20 h-16 object-cover rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{order.dish.name}</h3>
                  <p className="text-gray-500">{res.name}</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-yellow-500 mr-4">
                  Rs. {order.dish.price}{" "}
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      decreaseQuantity(index);
                      changeQuantity(order);
                    }}
                    className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-500 rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-500">
                    {order.quantity}
                  </span>
                  <button
                    onClick={() => {
                      increaseQuantity(index);
                      changeQuantity(order);
                    }}
                    className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-500 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="ml-4 text-amber-500 hover:text-amber-600">
                <MdDelete
                  className="text-amber-500 cursor-pointer text-2xl"
                  onClick={() => deleteCart(order)}
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-[88%]">
        {orders.length !== 0 && (
          <div className="sm:w-[55%] md:w-[50%] lg:w-[40%] shadow-lg shadow-gray-300 py-3">
            <div className="flex flex-col justify-evenly gap-4">
              <div className="flex justify-between items-center mx-8">
                <h3 className="text-base font-medium">Your Total</h3>
                <p>
                  Rs.{" "}
                  {orders.reduce(
                    (total, order) => total + order.dish.price * order.quantity,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between items-center mx-8">
                <h3 className="text-base font-medium">Delivery Fee</h3>
                <p>Rs. 40</p>
              </div>
              <div className="flex justify-between items-center mx-8">
                <h3 className="text-xl font-bold">Your Order</h3>
                <p>
                  Rs.{" "}
                  {orders.reduce(
                    (total, order) => total + order.dish.price * order.quantity,
                    0
                  ) + 40}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-gray-400 flex justify-center">
              <button
                onClick={() => {
                  const total = orders.reduce(
                    (total, order) => total + order.dish.price * order.quantity,
                    0
                  );
                  navigate("/orders", { state: { total } });
                }}
                className="bg-amber-500 w-3/4 hover:bg-amber-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
