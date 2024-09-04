import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/:resId" element=<Restaurant /> />
          <Route path="/profile" element=<Profile /> />
          <Route path="/login" element=<Login /> />
          <Route path="/signup" element=<Register /> />
          <Route path="/cart" element=<Cart /> />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
