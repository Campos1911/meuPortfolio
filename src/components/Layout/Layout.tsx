import React from "react";
import { Header } from "../Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Header />
      {children}
    </div>
  );
}
