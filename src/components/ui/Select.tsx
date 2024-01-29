import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  options: Option[];
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  defaultValue,
  disabled,
}) => {
  return (
    <>
      <div className="mt-2">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor={name}
        >
          {label}
        </label>
        <select
          name={name}
          id={name}
          defaultValue={defaultValue}
          disabled={disabled}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
        >
          {options.map((item) => (
            <option value={item.value} key={item.value}>
              <div>{item.label}</div>
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
