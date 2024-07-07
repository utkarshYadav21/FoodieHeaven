import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex  justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p>
              Welcome to our food delivery service! We provide a wide range of
              delicious foods from various restaurants. Order now and enjoy your
              meal!
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-white hover:text-amber-500">
                <IoMdMail />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p>Email: utkarshyadav329@gmail.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: Una, Himachal Pradesh</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} FoodieHeaven. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
