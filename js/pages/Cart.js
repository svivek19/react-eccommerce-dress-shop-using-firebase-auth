import React, { useContext } from "react";
import { CartContext } from "../../Global/CartContext";
import { Link } from "react-router-dom";
import emptyCart from "../../images/emptyCart.webp";

export default function Cart() {
  const { cartState, dispatch } = useContext(CartContext);

  const { shoppingCart, totalPrice, qty } = cartState;

  return (
    <div className="mt-36 md:m-32 mb-6 md:flex">
      <div>
        <div className="flex justify-center text-4xl font-bold text-orange-950">
          Shopping Cart
        </div>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((cart) => (
            <div
              key={cart.id}
              className="flex flex-col md:flex-row m-8 md:m-12"
            >
              <div>
                <div className="md:w-full">
                  <span>
                    <img
                      src={cart.image}
                      alt="not found"
                      className="rounded-lg"
                    />
                  </span>
                </div>
              </div>
              <div className="mx-auto md:mx-16 mt-4 md:mt-0 w-10/12 md:max-w-full">
                <div className="text-lg font-semibold mb-2">
                  <span>{cart.name}</span>
                </div>
                <div className="text-lg mb-2">
                  <span className="text-slate-500">₹{cart.price}</span>
                </div>
                <div className="p-1 flex justify-evenly md:justify-between cursor-pointer ">
                  <span
                    onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                    className="bg-green-200 py-1 px-3 rounded-lg"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  <span className="bg-slate-100 px-4 py-1 mx-2 rounded-lg">
                    {cart.qty}
                  </span>
                  <span
                    onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                    className="bg-red-200 py-1 px-3 rounded-lg"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </span>
                </div>
                <div className="my-3 flex">
                  <span className="">Total cost: ₹{cart.price * cart.qty}</span>
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.id, cart })
                  }
                  className="bg-black text-white px-5 py-1 text-center rounded-lg cursor-pointer hover:bg-slate-900"
                >
                  <span>
                    DELETE <i className="fa fa-trash mx-2"></i>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-5">
            <img src={emptyCart} alt="emptyCart" />
          </div>
        )}
      </div>
      <div className="flex flex-col my-10 mx-auto md:w-5/12 bg-slate-100 rounded-xl md:h-3/4">
        <div className="mt-20 mx-14">
          <div className="cartText">Total Product: {qty}</div>
          <div className="cartText text-slate-700">GST: ₹15</div>
          <div className="cartText text-slate-700">Shipping Charge: ₹40</div>
          <div className="cartText">
            Total Price: ₹{shoppingCart.length > 0 ? totalPrice + 15 + 40 : 0}
          </div>
          <Link
            to="/details"
            className="w-full mt-8 inline-flex items-center justify-center py-2 overflow-hidden font-semibold text-white hover:bg-slate-800 transition-all duration-150 ease-in-out rounded-lg  bg-slate-900 group"
          >
            <span>
              Check Out{" "}
              <i className="fa-solid fa-credit-card text-white mx-2"></i>
            </span>
          </Link>
          <div className="mt-3 mb-5 text-md text-center">
            <span>
              Otherwise,{" "}
              <Link to="/men" className="text-sky-950 font-medium underline">
                continue shopping
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
