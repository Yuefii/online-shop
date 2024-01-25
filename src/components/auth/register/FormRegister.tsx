import React from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Form = ({handleSubmit, error, isLoading}: any) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <Input
          label="Your Name"
          name="fullname"
          type="text"
          placeholder="Jhon Doe"
        />
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
        {error && <p className="mt-2 text-sm font-light text-red-600">{error}</p>}
        <Button
          type="submit"
          className="w-full"
        >
          {isLoading ? "Loading..." : "Create an account"}
        </Button>
        <p className="text-sm font-light text-gray-500">
          Already have an account?{" "}
          <span>
            <Link
              href="/auth/login"
              className="font-medium text-cyan-600 hover:underline"
            >
              Login here
            </Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default Form;
