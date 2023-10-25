import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { database } from "./FirebaseConfig"; // Make sure to import your Firebase configuration.

const RegisterAndLogin = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (login) {
        await signInWithEmailAndPassword(database, email, password);
      } else {
        await createUserWithEmailAndPassword(database, email, password);
      }
      history("/home");
    } catch (error) {
      alert(error.code);
    }
  };

  const toggleForm = () => {
    setLogin((prevLogin) => !prevLogin);
  };

  const handleResetPassword = () => {
    history("/reset");
  };

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 mt-20">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight uppercase tracking-tight text-gray-900 md:text-2xl">
              {login ? "Sign In" : "Sign Up"}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <p
                  className="text-sm font-medium text-blue-800 hover:underline cursor-pointer"
                  onClick={handleResetPassword}
                >
                  Forgot password?
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-slate-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {login ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-sm font-light text-gray-500">
                {login
                  ? "Don't have an account yet?"
                  : "Already, I have an account"}
                <span
                  href="/"
                  className="font-medium text-blue-800 mx-2 hover:underline cursor-pointer"
                >
                  <span onClick={toggleForm}>
                    {login ? "Sign Up" : "Sign In"}
                  </span>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAndLogin;
