import { FaCartArrowDown, FaUser, FaUserFriends } from "react-icons/fa";

export const SidebarList = [
    {
        title: "Profile",
        link: "/admin/profile",
        icon: FaUser
    },
    {
        title: "Products",
        link: "/admin/products",
        icon: FaCartArrowDown
    },
    {
        title: "Users",
        link: "/admin/users",
        icon: FaUserFriends
    },
]