import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home/Home";
import Restaurant from "./components/pages/Restaurant/Restaurant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/restaurantName" element=<Restaurant /> />
          <Route path="/login" element=<Login /> />
          <Route path="/signup" element=<Register /> />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
