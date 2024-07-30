import React from "react";
import { Header } from "../Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
