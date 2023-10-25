import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import { CartContext } from "../Global/CartContext";
import { database } from "./authendication/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const reset = useLocation();

  const history = useNavigate();

  const [open, setOpen] = useState(false);
  const menuClicked = () => {
    setOpen(!open);
  };

  // Logout page handling
  const handleLogout = () => {
    signOut(database).then((val) => {
      console.log(val);
      history("/");
    });
  };

  // Destructuring cartState - initial state to get qty
  //Otherwise, the result will be return undefined
  const { cartState } = useContext(CartContext);

  const { qty } = cartState;

  return (
    <div className={reset.pathname === "/reset" ? "hidden" : "block"}>
      <nav className=" w-full	 text-slate-200 p-3 font-bold text-lg">
        <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto items-center">
          <div className="flex justify-between">
            <div className="cursor-pointer">
              <img
                src={Logo}
                className="w-32 md:w-1/6 lg:w-1/6 xl:w-1/6"
                alt="Brand - logo"
              />
            </div>

            <div onClick={() => setOpen(false)}>
              <Link to="/cart" className="hoverTheme md:hidden">
                <i className="fa-solid fa-cart-shopping pt-3 pl-20 text-orange-500">
                  <span className="mx-1">{qty}</span>
                </i>
              </Link>
            </div>
            <div onClick={() => setOpen(false)}>
              <div onClick={handleLogout}>
                <Link to="/" className="hoverTheme md:hidden underline block">
                  <i className="fa-solid fa-right-to-bracket mt-3 mx-5"></i>
                </Link>
              </div>
            </div>

            <div className="md:hidden mt-2 item-end">
              <button onClick={menuClicked} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`flex justify-end md:block ${open ? "block" : "hidden"}`}
          >
            <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0 uppercase">
              <li onClick={() => setOpen(false)}>
                <Link to="/home" className="hoverTheme">
                  Home
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link to="/men" className="hoverTheme">
                  Men
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link to="/women" className="hoverTheme">
                  women
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link to="/kids" className="hoverTheme">
                  kids
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link to="/cart" className="hoverTheme hidden md:block">
                  <i className="fa-solid fa-cart-shopping text-orange-500">
                    <span className="mx-1">{qty}</span>
                  </i>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link
                  to="/cart"
                  className="hoverTheme hidden underline md:block"
                >
                  <abbr title="Logout">
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </abbr>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
