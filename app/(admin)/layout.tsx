import React from "react";
import "./admin.css";
import AdminNavbar from "./components/AdminNavbar";
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
};

export default layout;
