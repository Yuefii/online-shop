import React from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { signOut } from "next-auth/react";

const ModalLogout = ({ setLogoutUser }: any) => {
  return (
    <>
      <Modal onClose={setLogoutUser}>
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
        <h3 className="mb-5 text-lg text-center font-normal text-gray-500">
          Are you sure you want to logout?
        </h3>
        <div className="flex justify-center gap-2">
          <Button
            type="button"
            onClick={() => signOut()}
            className="text-white text-sm bg-red-600 hover:bg-red-800"
          >
            Yes, Im sure
          </Button>
          <Button
            type="button"
            onClick={() => setLogoutUser(false)}
            className="bg-white text-sm text-black border hover:bg-gray-300"
          >
            No, cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalLogout;
