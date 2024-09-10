import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { total } = location.state || 0;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex justify-between p-8 w-[90%] mx-auto gap-20">
      {/* Delivery Information Form */}
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded mt-4 w-full">
            Submit Information
          </button>
        </form>
      </div>

      {/* Cart Totals */}
      <div className="w-1/3 my-auto">
        <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
        <div className="border-t border-b border-gray-300 py-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. {total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>Rs. 40</span>
          </div>
        </div>
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span> Rs. {total + 40}</span>
        </div>
        <button className="bg-amber-500 text-white py-2 px-4 rounded mt-4 w-full">
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
