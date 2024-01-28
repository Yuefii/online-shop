import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Form = ({ handleSubmit, error, isLoading }: any) => {
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
        {error && (
          <p className="mt-2 text-sm font-light text-red-600">{error}</p>
        )}
        <Button type="submit" className="w-full">
          {isLoading ? "Loading..." : "Create an account"}
        </Button>
      </form>
    </>
  );
};

export default Form;
