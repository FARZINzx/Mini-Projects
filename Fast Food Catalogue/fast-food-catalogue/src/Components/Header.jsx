import React from "react";
//Import headerBackground
import headerBackground from "./assets/header-background.jpg";

function Header() {
  return (
    <>
        <div className="relative w-full">
          <img src={headerBackground} className="w-full"/>
          <a href="/">
          <p className="absolute top-1/3 left-1/4 text-white font-bold uppercase text-4xl">Fast Food Catalogue</p>
          </a>
        </div>
    </>
  );
}

export default Header;
