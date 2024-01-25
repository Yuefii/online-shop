import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

const FormLogin = ({ handleSubmit, isLoading, error, callbackUrl }: any) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
        {error && (
          <p className="mt-2 text-sm font-light text-red-600">{error}</p>
        )}
        <button
          type="submit"
          className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className="group h-10 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-cyan-400 focus:bg-cyan-50 active:bg-cyan-100"
          >
            <div className="relative flex items-center space-x-10 justify-center">
              <Image
                src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                className="absolute left-0 w-5"
                alt="google logo"
                width={30}
                height={30}
              />
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-cyan-600 sm:text-base">
                Continue with Google
              </span>
            </div>
          </button>
        </div>
        <p className="text-sm font-light text-gray-500">
          Dont have an account?{" "}
          <span>
            <Link
              href="/auth/register"
              className="font-medium text-cyan-600 hover:underline"
            >
              Register here
            </Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default FormLogin;
