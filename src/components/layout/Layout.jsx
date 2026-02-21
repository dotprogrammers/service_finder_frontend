import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoadingArea from "./LoadingArea";
import { Outlet } from "react-router-dom";

export default function Layout() {
  useEffect(() => {
    window.dispatchEvent(new Event("sf:route-change"));
  });

  return (
    <>
      <LoadingArea />
      <div className="page-wraper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
