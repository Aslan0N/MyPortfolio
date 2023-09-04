import React, { useState } from "react";
import LogoImg from "../assets/images/logo.svg";

const Header = ({ visible, setVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <img src={LogoImg} alt="" />
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setVisible(!visible);
        }}
        className={isOpen ? "bars close-bars" : "bars"}
      >
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
    </header>
  );
};

export default Header;
