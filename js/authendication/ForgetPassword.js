import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(database, email)
      .then(() => {
        alert("Check your email");
        navigate("/");
      })
      .catch(() => {
        toast.error("Please enter your email!");
      });
  };

  return (
    <section className="mt-24 md:mt-32">
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-medium mb-2">Reset password</h1>
        <p className="text-slate-500">Fill up the form to reset the password</p>

        <form className="my-10" onSubmit={handleReset}>
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <button
              className="w-full py-3 font-medium text-white bg-black hover:bg-slate-950 rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center"
              type="submit"
            >
              <span>Reset password</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
