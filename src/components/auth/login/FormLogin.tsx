import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import LoginGoogle from "./LoginGoogle";
import { signIn } from "next-auth/react";

const FormLogin = ({ handleSubmit, isLoading, error, callbackUrl }: any) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <Input
          label="Your Email"
          name="email"
          type="email"
          placeholder="name@company.com"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
        />
        {error && (
          <p className="mt-2 text-sm font-light text-red-600">{error}</p>
        )}
        <Button type="submit" className="w-full">
          {isLoading ? "Loading..." : "Login"}
        </Button>
        <div className="flex justify-center">
          <Button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            variant="secondary"
            className="group"
          >
            <LoginGoogle />
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
