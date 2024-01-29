import { SidebarList } from "@/helpers/sidebar/sidebarList";
import Link from "next/link";
import React from "react";

const SidebarNavigation = ({ isLinkActive }: any) => {
  return (
    <>
      {SidebarList.map((item, index) => (
        <ul key={index} className="mt-4">
          <li className="mb-1">
            <Link
              href={item.link}
              className={`${isLinkActive(
                `${item.link}`
              )}w-full flex gap-3 items-center py-2 px-4 text-gray-200 font-semibold hover:bg-cyan-600 hover:text-white rounded-md`}
            >
              {item.icon && <item.icon className="text-white" />}
              <span className="text-sm">{item.title}</span>
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default SidebarNavigation;
