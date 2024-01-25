import React from "react";
import Image from "next/image";

const LoginGoogle = () => {
  return (
    <>
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
    </>
  );
};

export default LoginGoogle;
