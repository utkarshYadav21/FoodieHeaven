import React, { useState } from "react";
import orders from "/download.jpeg";

const Orders = () => {
  // Example order data
  const order = {
    id: 1,
    items: [
      { name: "Greek Salad", quantity: 2 },
      { name: "Peri Peri Rolls", quantity: 3 },
    ],
    totalItems: 5,
    totalAmount: "$65",
    restaurant: {
      name: "abc",
      email: "abcd@gmail.com",
      phone: "9876543210",
    },
  };

  const steps = [
    { name: "Order Placed" },
    { name: "Packed" },
    { name: "Shipped" },
    { name: "Delivered" },
  ];

  const [currentStep, setCurrentstep] = useState(0);
  return (
    <div className="px-10 py-4">
      <h2 className="text-2xl font-bold mb-4">Order Page</h2>
      <div className="border border-gray-300 p-6 rounded-md bg-white flex  items-center justify-between gap-10">
        <div className="w-32">
          <img src={orders} className="w-28 h-auto" />
        </div>
        <div className="w-full">
          <div className="flex justify-between mb-4 items-center">
            <p className="font-bold mb-1">
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} x {item.quantity}
                  {index !== order.items.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p className="text-gray-500">Items: {order.totalItems}</p>
            <p className="text-gray-500">{order.totalAmount}</p>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-between">
            <div>
              <p className="font-bold">{order.restaurant.name}</p>
              <p>{order.restaurant.email}</p>
              <p>{order.restaurant.phone}</p>
            </div>
            <div className="flex items-center justify-between space-x-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
                                ${
                                  index <= currentStep
                                    ? "bg-green-500 border-green-500 text-white"
                                    : "bg-gray-200 border-gray-300 text-gray-500"
                                }
                            `}
                  >
                    {index <= currentStep ? "✔️" : index + 1}
                  </div>

                  {/* Step line connector */}
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 w-16 ${
                        index < currentStep ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
