import React, { FormEvent, useState } from "react";
import FormRegister from "@/components/auth/register/FormRegister";
import AuthLayout from "@/components/auth/AuthLayout";
import { useRouter } from "next/router";

const register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)
    setError("")
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
    };

    const result = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false)
      router.push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email is already registered");
      console.log("error");
    }
  };

  return (
    <>
      <AuthLayout>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
          Create and account
        </h1>
        <FormRegister handleSubmit={handleSubmit} isLoading={isLoading} error={error} />
      </AuthLayout>
    </>
  );
};

export default register;
