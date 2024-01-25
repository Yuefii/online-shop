import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "@/components/auth/AuthLayout";
import FormLogin from "@/components/auth/login/FormLogin";
import { signIn } from "next-auth/react";

const login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const callbackUrl: any = router.query.callbackUrl || "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        router.push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is wrong.");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email or password is wrong.");
      console.log(error);
      
    }
  };

  return (
    <>
      <AuthLayout>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
          Login
        </h1>
        <FormLogin handleSubmit={handleSubmit} isLoading={isLoading} error={error} callbackUrl={callbackUrl} />
      </AuthLayout>
    </>
  );
};

export default login;
