import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [orders, setOrders] = useState([]);
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
    <div className="flex justify-center py-3">
      <div className=" w-4/5 shadow-lg shadow-gray-300 py-3 ">
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
  );
};

export default Cart;
