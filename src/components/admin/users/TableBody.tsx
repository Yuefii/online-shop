import React from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TableBody = ({ userData, setUpdateUser, setDeleteUser }: any) => {
  return (
    <>
      <tbody>
        {userData.map((item: any, index: any) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <p className="flex text-sm items-center">{index + 1}</p>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center">
                <Link
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                >
                  {item.fullname}
                </Link>
              </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="text-[13px] font-medium">{item.email}</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <span className="py-1 px-3 rounded-lg bg-gray-100 font-medium text-[12px]">
                {item.role}
              </span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setUpdateUser(item)}
                  className="py-1 px-3 text-xs"
                >
                  <FaEdit />
                </Button>
                <Button
                  onClick={() => setDeleteUser(item)}
                  className="py-1 px-3 text-xs bg-red-500 hover:bg-red-700"
                >
                  <MdDelete />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
