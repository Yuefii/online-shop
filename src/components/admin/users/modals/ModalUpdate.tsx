import React, { FormEvent, useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import { usersService } from "@/libs/services/users_service";
import Button from "@/components/ui/Button";

const ModalUpdate = (props: any) => {
  const { updateUser, setUpdateUser, setUserData } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form: any = event.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };

    const result = await usersService.updateUsers(updateUser.id, data);

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
          <Button className="mt-3" type="submit">
            {isLoading ? "Loading..." : "update"}
            Update
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdate;
