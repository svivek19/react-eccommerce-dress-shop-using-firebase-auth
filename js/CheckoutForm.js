import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Global/CartContext";
//Toast - Alert
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutForm() {
  const { cartState, dispatch } = useContext(CartContext);

  const { shoppingCart, totalPrice } = cartState;

  const navigate = useNavigate();

  const [buttonClicked, setButtonClicked] = useState(false);

  const [formErrors, setFormErrors] = useState({
    firstName: true,
    lastName: true,
    email: true,
    number: true,
    Address: true,
    city: true,
    postcode: true,
    cardNum: true,
    year: true,
    cvv: true,
  });

  const SuccessAlert = () => {
    toast.success(
      <h1 className="text-black font-semibold">
        Your order has been placed 😀
      </h1>
    );
    setTimeout(() => {
      // Reset the cart after successful order
      dispatch({ type: "RESET_CART" });
      navigate("/home");
      // window.location.reload()
    }, 8000);
  };

  const validateForm = () => {
    const errors = {
      firstName: formErrors.firstName,
      lastName: formErrors.lastName,
      email: formErrors.email,
      number: formErrors.number,
      Address: formErrors.Address,
      city: formErrors.city,
      postcode: formErrors.postcode,
      cardNum: formErrors.cardNum,
      year: formErrors.year,
      cvv: formErrors.cvv,
    };

    for (const key in errors) {
      if (errors[key]) {
        return false;
      }
    }

    return true;
  };

  const handleButtonClick = () => {
    if (validateForm()) {
      setButtonClicked(true);
    }
  };

  useEffect(() => {
    if (buttonClicked) {
      const timer = setTimeout(() => {
        SuccessAlert();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  });

  return (
    <div className="mt-32 mx-5">
      <ToastContainer
        position="top-right"
        autoClose={6000}
        closeButton={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col md:w-10/12 mx-auto">
        <div>
          <div className="md:grid md:grid-cols-2">
            <div>
              <h2 className="mb-8 font-bold text-xl md:text-center">
                Order Summery
              </h2>
              {shoppingCart.map((cart) => (
                <div key={cart.id} className="flex">
                  <span>
                    <img
                      src={cart.image}
                      alt="product-images"
                      className="w-24 rounded-lg mx-5 mb-5 md:mx-auto"
                    />
                  </span>
                  <div className="mx-3">
                    <div className="font-semibold">
                      <span>{cart.name}</span>
                    </div>
                    <div className="text-red-500 font-medium my-2">
                      Price:{" "}
                      <span className="text-black mx-1 font-normal">
                        ₹{cart.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="mb-8 font-bold text-lg md:text-xl text-start">
                ITEMS{`(${shoppingCart.length})`}
              </h2>
              <div className=" font-semibold ">
                <h3>Subtotal: ₹{totalPrice}</h3>
                <h3 className="my-3">GST: ₹15</h3>
                <h3 className="mb-3">Shipping Charge: ₹40</h3>
                <hr></hr>
                <h3 className="mt-3 mb-3">
                  Total: ₹{shoppingCart.length > 0 ? totalPrice + 15 + 40 : 0}
                </h3>
                <hr className="mb-5"></hr>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-4 font-bold text-xl">Shipping Address</h2>
        <form className="justify-center w-full mx-auto">
          <div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      firstName: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your first name.
                  </p>
                )}
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="lastName"
                  className="block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      lastName: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Last name.
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  id="Email"
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      email: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Email.
                  </p>
                )}
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="number"
                  className="block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0"
                >
                  Mobile Number
                </label>
                <input
                  id="number"
                  type="number"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      number: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.number && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Mobile Number.
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Address"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Address
                </label>
                <textarea
                  id="Address"
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="Address"
                  cols="20"
                  rows="3"
                  placeholder="Address"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      Address: e.target.value.trim() === "",
                    });
                  }}
                ></textarea>
                {formErrors.Address && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Address.
                  </p>
                )}
              </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      city: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your City.
                  </p>
                )}
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="postcode"
                  className="block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500"
                >
                  Postcode
                </label>
                <input
                  id="postcode"
                  type="number"
                  minLength={6}
                  maxLength={6}
                  placeholder="Post Code"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      postcode: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.postcode && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Postcode.
                  </p>
                )}
              </div>
            </div>

            {/* card details */}
            <h2 className="my-4 font-bold text-xl ">Card Details</h2>

            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="card-num"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Card Number
                </label>
                <input
                  id="card-num"
                  type="number"
                  minLength={16}
                  maxLength={16}
                  placeholder="Card Number"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      cardNum: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.cardNum && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Card Number.
                  </p>
                )}
              </div>
              <div className="w-full flex gap-1 md:gap-3 mt-4 md:mt-0 lg:w-1/2 ">
                <div className="w-full">
                  <label
                    htmlFor="year"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Expiry Year
                  </label>
                  <input
                    id="year"
                    type="number"
                    minLength={4}
                    maxLength={4}
                    autoComplete="off"
                    placeholder="Expiry Year"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => {
                      setFormErrors({
                        ...formErrors,
                        year: e.target.value.trim() === "",
                      });
                    }}
                  />
                  {formErrors.year && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter your Expiry Year.
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="cvv"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="number"
                    minLength={3}
                    maxLength={3}
                    autoComplete="off"
                    placeholder="CVV"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => {
                      setFormErrors({
                        ...formErrors,
                        cvv: e.target.value.trim() === "",
                      });
                    }}
                  />
                  {formErrors.cvv && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter your CVV.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <label htmlFor="tick" className="flex items-center text-sm group">
                <input
                  id="tick"
                  type="checkbox"
                  className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1 cursor-pointer"
                />
                <span className="ml-2">
                  Save this information for next time
                </span>
              </label>
            </div>
            <div className="my-4">
              <button onClick={handleButtonClick} type="button">
                <Link
                  to="#"
                  className="relative my-2 inline-flex items-center justify-center py-2 px-5 overflow-hidden font-semibold text-white hover:bg-slate-800 transition-all duration-150 ease-in-out rounded  bg-slate-900 group"
                >
                  <span>
                    Proceed To Pay{" "}
                    <i className="fa-solid fa-bag-shopping mx-2"></i>
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
