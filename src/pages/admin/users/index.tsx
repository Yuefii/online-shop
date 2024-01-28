import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import Button from "@/components/ui/Button";
import { usersService } from "@/libs/services/users_service";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await usersService.getAllUsers();
      setUsers(data.data);
    };
    getAllUsers();
  }, []);

  console.log({ users });

  return (
    <>
      <AdminLayout>
        <div className="min-h-screen ml-64">
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Users Management</h1>
            <div className="mt-8">
              <table className="w-full min-w-[460px]">
                <thead>
                  <tr>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-100 text-left rounded-tl-md rounded-bl-md">
                      No
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-100 text-left rounded-tl-md rounded-bl-md">
                      Name
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-100 text-left">
                      Email
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-100 text-left rounded-tr-md rounded-br-md">
                      Role
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-100 text-left rounded-tr-md rounded-br-md">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item:any, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            {index + 1}
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            {item.fullname}
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium">
                          {item.email}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="py-1 px-3 rounded-lg bg-gray-100 font-medium text-[12px]">
                          {item.role}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center gap-4">
                          <Button className="py-1 px-3 text-xs">update</Button>
                          <Button className="py-1 px-3 text-xs bg-red-500">delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Users;
