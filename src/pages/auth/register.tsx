import React, { FormEvent, useState } from "react";
import FormRegister from "@/components/auth/register/FormRegister";
import AuthLayout from "@/components/auth/AuthLayout";
import { useRouter } from "next/router";
import { authService } from "@/libs/services/auth_service";

const register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
    };

    const result = await authService.registerAccount(data);

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      router.push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email is already registered");
      console.log("error");
    }
  };

  return (
    <>
      <AuthLayout
        title="Create an Account"
        subTitle="Already have an account? "
        linkTitle="Login here"
        link="/auth/login"
      >
        <FormRegister
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
      </AuthLayout>
    </>
  );
};

export default register;
