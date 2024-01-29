import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalLogout from "../admin/users/modals/ModalLogout";
import SidebarNavigation from "./SidebarNavigation";
import Button from "../ui/Button";

const Sidebar = () => {
  const { pathname } = useRouter();
  const [logoutUser, setLogoutUser] = useState(false);

  const isLinkActive = (path: string) => {
    return (
      pathname === path &&
      "flex items-center py-2 px-4 text-white bg-cyan-600 hover:bg-black/85 rounded-md"
    );
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-cyan-800 p-4 z-50">
        <Link
          href="/admin"
          className="flex items-center pb-4 border-b border-b-white"
        >
          <span className="text-lg font-bold text-white ml-3">
            Dasboard Admin
          </span>
        </Link>
        <SidebarNavigation isLinkActive={isLinkActive} />
        <div className="fixed left-0 bottom-0 w-64 bg-cyan-800 p-4 z-50">
          <Button
            onClick={() => setLogoutUser(true)}
            className="w-full font-semibold hover:bg-black/85"
          >
            Logout
          </Button>
        </div>
      </div>
      {logoutUser && <ModalLogout setLogoutUser={setLogoutUser} />}
    </>
  );
};

export default Sidebar;
