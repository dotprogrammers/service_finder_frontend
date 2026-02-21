import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoadingArea from "./LoadingArea";

export default function Layout({ children }) {
  // Many template scripts rely on jQuery. Ensure they run after route changes.
  useEffect(() => {
    // Trigger a custom event that scripts can hook into if needed.
    window.dispatchEvent(new Event("sf:route-change"));
  });

  return (
    <>
      <LoadingArea />
      <div className="page-wraper">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
