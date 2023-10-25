import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WomenContext } from "../Global/WomenContext";
import { CartContext } from "../Global/CartContext";

export default function WomenProduct() {
  const { products } = useContext(WomenContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="mt-36 mb-6">
      <h1 className="font-bold my-10  text-4xl text-center text-orange-950">
        Women's Collection
      </h1>
      <div className="mt-6 w-11/12 mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
              <img
                src={product.image}
                alt="Not Found"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex flex-col text-center justify-between">
              <div>
                <h3 className="text-xl mb-1 text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
              <p className="text-lg font-medium text-gray-900">{`₹${product.price}`}</p>

              <Link
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", id: product.id, product })
                }
                to="#"
                className="relative my-2 inline-flex items-center justify-center py-2 overflow-hidden font-semibold text-white hover:bg-slate-800 transition-all duration-150 ease-in-out rounded  bg-slate-900 group"
              >
                <span>
                  ADD TO CART <i className="fa-solid fa-bag-shopping"></i>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
