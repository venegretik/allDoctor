import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (pros) => {
  return (
    <div className="wrapper">
      <Header />
      <main className={"Container main"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
