import React from "react";
import Sidebar from "../sidebar/Sidebar";

const AdminLayout = ({ children }: any) => {
  return (
    <>
      <main>
        <Sidebar />
        <main>{children}</main>
      </main>
    </>
  );
};

export default AdminLayout;
