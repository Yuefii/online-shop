import React from "react";
import Link from "next/link";

const Form = ({handleSubmit, error, isLoading}: any) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900">
            Your Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            placeholder="Jhon Doe"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
          />
        </div>
        {error && <p className="mt-2 text-sm font-light text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {isLoading ? "Loading..." : "Create an account"}
        </button>
        <p className="text-sm font-light text-gray-500">
          Already have an account?{" "}
          <span>
            <Link
              href="/auth/login"
              className="font-medium text-cyan-600 hover:underline"
            >
              Login here
            </Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default Form;
