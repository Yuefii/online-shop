import React from "react";

const TableHeader = () => {
  return (
    <>
      <thead>
        <tr className="text-sm text-left uppercase tracking-wide font-medium text-gray-400 bg-gray-100">
          <th className="py-2 px-4 rounded-tl-md rounded-bl-md">No</th>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Email</th>
          <th className="py-2 px-4">Role</th>
          <th className="py-2 px-4 rounded-tr-md rounded-br-md">Action</th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
