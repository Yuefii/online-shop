import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { SidebarList } from "@/helpers/sidebar/sidebarList";
import ModalUpdate from "../admin/users/modals/ModalUpdate";
import ModalLogout from "../admin/users/modals/ModalLogout";

const Sidebar = () => {
  const { pathname } = useRouter();
  const [logoutUser, setLogoutUser] = useState(false);
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
          href="/admin"
          className="flex items-center pb-4 border-b border-b-white"
        >
          <span className="text-lg font-bold text-white ml-3">
            Dasboard Admin
          </span>
        </Link>
        {SidebarList.map((item, index) => (
          <ul key={index} className="mt-4">
            <li className="mb-1">
              <Link
                href={item.link}
                className={`${isLinkActive(
                  `${item.link}`
                )}w-full flex items-center py-2 px-4 text-white font-semibold hover:bg-cyan-800 hover:text-white rounded-md`}
              >
                <span className="text-sm">{item.title}</span>
              </Link>
            </li>
          </ul>
        ))}
        <div className="fixed left-0  bottom-0 w-64 bg-cyan-600 p-4 z-50 transition-transform">
          <button
            onClick={() => setLogoutUser(true)}
            className="w-full bottom-0 flex justify-center items-center py-2 px-4 text-white text-sm font-semibold bg-cyan-800 hover:bg-black/85 hover:text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
      {logoutUser && (
        <ModalLogout setLogoutUser={setLogoutUser} />
      )}
    </>
  );
};

export default Sidebar;
