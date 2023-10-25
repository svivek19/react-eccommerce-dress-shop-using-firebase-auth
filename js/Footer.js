import React from "react";
import Logo from "../images/logo.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const reset = useLocation();

  return (
    <div className={reset.pathname === "/reset" ? "hidden" : "block"}>
      <footer className="bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <img src={Logo} className="w-52 mr-3" alt="brand Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://github.com/svivek19"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/svivek018/"
                  className="mr-4 hover:underline md:mr-6"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/svivek018/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://www.linkedin.com/in/svivek018/"
              className="hover:underline"
            >
              Vivek™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
