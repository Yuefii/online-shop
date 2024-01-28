import React from "react";
import Link from "next/link";

interface AuthLayoutProps {
  title: string;
  subTitle: string;
  linkTitle: string;
  link: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subTitle,
  linkTitle,
  link,
}) => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                {title}
              </h1>
              {children}
              <p className="text-sm font-light text-gray-500">
                {subTitle}
                <span>
                  <Link
                    href={link}
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    {linkTitle}
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
