import React from "react";
import Navbar from "./navbar";
import Logo from "./logo";
import Footer from "./footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <Logo />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
