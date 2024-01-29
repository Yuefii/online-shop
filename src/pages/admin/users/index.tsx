import React, { useEffect, useState } from "react";
import { usersService } from "@/libs/services/users_service";
import AdminLayout from "@/components/admin/AdminLayout";
import ModalDelete from "@/components/admin/users/modals/ModalDelete";
import ModalUpdate from "@/components/admin/users/modals/ModalUpdate";
import TableHeader from "@/components/admin/users/TableHeader";
import TableBody from "@/components/admin/users/TableBody";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState({});
  const [updateUser, setUpdateUser] = useState({});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(users);
    const getAllUsers = async () => {
      const { data } = await usersService.getAllUsers();
      setUsers(data.data);
    };
    getAllUsers();
  }, [users]);

  return (
    <>
      <AdminLayout>
        <div className="min-h-screen ml-64">
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Users Management</h1>
            <div className="mt-8">
              <table className="w-full min-w-[460px]">
                <TableHeader />
                <TableBody
                  userData={userData}
                  setUpdateUser={setUpdateUser}
                  setDeleteUser={setDeleteUser}
                />
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
      {deleteUser && Object.keys(deleteUser).length && (
        <ModalDelete
          setUserData={setUserData}
          deleteUser={deleteUser}
          setDeleteUser={setDeleteUser}
        />
      )}
      {updateUser && Object.keys(updateUser).length && (
        <ModalUpdate
          setUserData={setUserData}
          updateUser={updateUser}
          setUpdateUser={setUpdateUser}
        />
      )}
    </>
  );
};

export default Users;
