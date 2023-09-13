import React from "react";
import { LayoutProps } from "./Layout.type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>this is header</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
