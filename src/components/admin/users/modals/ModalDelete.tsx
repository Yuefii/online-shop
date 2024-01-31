import React from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { usersService } from "@/libs/services/users_service";
import { useSession } from "next-auth/react";

const ModalDelete = ({ deleteUser, setDeleteUser, setUserData }: any) => {
  const session: any = useSession()

  const handleConfirm = async () => {
    usersService.deleteUsers(deleteUser.id, session.data?.accessToken);
    setDeleteUser({});
    const { data } = await usersService.getAllUsers();
    setUserData(data.data);
  };

  const handleCancel = () => {
    setDeleteUser({});
  };

  return (
    <>
      <Modal onClose={setDeleteUser}>
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lga text-center font-normal text-gray-500">
          Are you sure you want to delete this user?
        </h3>
        <div className="flex justify-center gap-2">
          <Button
            type="button"
            onClick={handleConfirm}
            className="text-white text-sm bg-red-600 hover:bg-red-800"
          >
            Yes, Im sure
          </Button>
          <Button
            type="button"
            onClick={handleCancel}
            className="bg-white text-sm text-black border hover:bg-gray-300"
          >
            No, cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDelete;
