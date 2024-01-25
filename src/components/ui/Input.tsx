import React from "react";

interface PropsTypes {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<PropsTypes> = ({ label, name, type, placeholder }) => {
  return (
    <>
      <div>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
        />
      </div>
    </>
  );
};

export default Input;