import React from "react";
import "../Home/Home.css";

export default function Login() {
  return (
    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <a className="inline-block mx-auto mb-6" href="#">
              <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
            </a>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Login</h2>
          </div>
          <form action="">
            <div className="mb-6">
              <label
                for="new-password"
                className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  name="Phone Number"
                  placeholder="Enter your phone number"
                  type="Phone number"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label for="">
                  <input type="checkbox" />
                  <span className="ml-1 ">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4">
                <a className="inline-block hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>
            </div>
            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
              {" "}
              Login
            </button>
            <p className="text-center">
              Don&rsquo;t have an account?{" "}
              <a className="text-red-500 hover:underline" href="/register">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
