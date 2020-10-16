import React from "react";
import "./AppLayout.scss";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";

export const AppLayout = ({ children }) => {
  const user = { name: "Dilshod Mirsoatov" };
  return (
    <div className="layout">
      <Navbar user={user} />
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
