import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { pathname } = useRouter();
  const isLinkActive = (path: string) => {
    return (
      pathname === path &&
      "flex items-center py-2 px-4 text-white bg-cyan-800 hover:bg-black/85 rounded-md"
    );
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-cyan-600 p-4 z-50 transition-transform">
        <Link
          href="/dasboard/admin"
          className="flex items-center pb-4 border-b border-b-white"
        >
          <span className="text-lg font-bold text-white ml-3">
            Dasboard Admin
          </span>
        </Link>
        <ul className="mt-4">
          <li className="mb-1">
            <Link
              href="/dasboard/admin/users"
              className={`${isLinkActive(
                "/dasboard/admin/users"
              )}w-full flex items-center py-2 px-4 text-white font-semibold hover:bg-cyan-800 hover:text-white rounded-md`}
            >
              <span className="text-sm">Users</span>
            </Link>
          </li>
        </ul>
        <div className="fixed left-0  bottom-0 w-64 bg-cyan-600 p-4 z-50 transition-transform">
          <button
            onClick={() => signOut()}
            className="w-full bottom-0 flex justify-center items-center py-2 px-4 text-white text-sm font-semibold bg-cyan-800 hover:bg-black/85 hover:text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
