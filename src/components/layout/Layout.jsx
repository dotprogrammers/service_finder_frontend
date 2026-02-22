import React, { useEffect } from "react";
import Footer from "./Footer";
// import LoadingArea from "./LoadingArea";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  useEffect(() => {
    window.dispatchEvent(new Event("sf:route-change"));
  });

  return (
    <>
      <div className="page-wraper">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
