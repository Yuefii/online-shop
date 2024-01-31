import React, { FormEvent, useState } from "react";
import { usersService } from "@/libs/services/users_service";
import { useSession } from "next-auth/react";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const ModalUpdate = ({ updateUser, setUpdateUser, setUserData }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const session: any = useSession()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form: any = event.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };

    const result = await usersService.updateUsers(updateUser.id, data, session.data?.accessToken);

    if (result.status === 200) {
      const { data } = await usersService.getAllUsers();
      setUserData(data.data);
      setIsLoading(false);
      setUpdateUser({});
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal onClose={setUpdateUser}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Your Name"
            name="fullname"
            type="text"
            disabled
            defaultValue={updateUser.fullname}
          />
          <Input
            label="Your Email"
            name="email"
            type="email"
            defaultValue={updateUser && updateUser?.email}
            disabled
          />
          <Select
            label="role"
            name="role"
            defaultValue={updateUser.role}
            options={[
              { label: "user", value: "user" },
              { label: "admin", value: "admin" },
            ]}
          />
          <Button className="mt-3 text-xs font-semibold" type="submit">
            {isLoading ? "Loading..." : "Update"}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdate;
