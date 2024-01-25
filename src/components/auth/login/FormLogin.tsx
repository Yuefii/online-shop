import React from "react";
import Link from "next/link";
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
        <Button type="submit" variant="primary" className="w-full">
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
        <p className="text-sm font-light text-gray-500">
          Dont have an account?{" "}
          <span>
            <Link
              href="/auth/register"
              className="font-medium text-cyan-600 hover:underline"
            >
              Register here
            </Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default FormLogin;
