import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Kids from "./components/pages/Kids";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./Global/CartContext";
import CheckoutFrom from "./components/CheckoutForm";
import RegisterAndLogin from "./components/authendication/RegisterAndLogin";
import ForgetPassword from "./components/authendication/ForgetPassword";
import MaybeShow from "./components/pages/MaybeShow";

export default function App() {
  return (
    <CartProvider>
      <div>
        <Router>
          <MaybeShow>
            <Navbar />
          </MaybeShow>
          <Routes>
            <Route path="/" exact element={<RegisterAndLogin />} />
            <Route path="/reset" element={<ForgetPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<CheckoutFrom />} />
          </Routes>
          <MaybeShow>
            <Footer />
          </MaybeShow>
        </Router>
      </div>
    </CartProvider>
  );
}
