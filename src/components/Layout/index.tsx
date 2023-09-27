import React from "react";
import { LayoutProps } from "./index.type";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <main>{children ? <>{children}</> : <Outlet />}</main>
    </div>
  );
};

export default Layout;
