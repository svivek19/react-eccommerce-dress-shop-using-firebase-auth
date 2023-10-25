import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/New Arival.webp";
import Delivery from "../Delivery";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div className="mt-10 mb-6">
      <div className="relative">
        <div>
          <img src={bg} alt="banner" />
        </div>
        <div className=" absolute top-3 left-4 mt-10 md:mt-0 md:left-1/4 md:top-1/4 text-white w-10/12 md:w-7/12">
          <p className="text-2xl md:text-5xl font-bold">
            Stay focused and extra sparkly!
          </p>
          <div>
            <Link
              to="/men"
              className="relative my-5 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-300 rounded-lg hover:bg-slate-300 group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                New Arrivals
              </span>
            </Link>

            <div className="hidden md:block">
              <h1 className="font-bold text-3xl text-slate-200">
                We're Provide
                <span className="text-green-500 font-semibold">
                  {" "}
                  <Typewriter
                    words={[
                      "Dispatch within 3-4 days",
                      "40% Offer",
                      "Premium Quality Clothes",
                    ]}
                    typeSpeed={70}
                    loop={false}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    cursor={true}
                    cursorStyle={
                      <i className="fa-brands fa-pagelines text-green-500 mx-2"></i>
                    }
                    cursorBlinking={false}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Delivery />
    </div>
  );
};

export default Home;
