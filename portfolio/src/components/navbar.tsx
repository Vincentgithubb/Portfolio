import React from "react";

type NavProps = {};

const Navbar = () => {
  return (
    <>
      <nav className="navbarr">
        <a href="#" className="logo">
          Portfolio
        </a>
        <div className="navLink">
          <ul>
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">My Projects</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
