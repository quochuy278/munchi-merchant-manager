import { Outlet } from "react-router-dom";
import { LayoutProps } from "./index.type";

const Layout = ({ children, renderHeader }: LayoutProps) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {renderHeader()}
      <main>{children ? <>{children}</> : <Outlet />}</main>
    </div>
  );
};

export default Layout;
