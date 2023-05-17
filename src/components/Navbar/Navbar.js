import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../images/zyro-image.png";
import "./navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="nav">
        <div className="navbarContainer">
          <a className="navLogo" href="/">
            {/** <NavIcon/>*/}
            <img
              className="logo"
              src={logo}
              style={{
                marginLeft: "50px",
                // marginTop: "0px",
                width: "8rem",
                height: "4rem",
                borderRadius: "9px",
                // backgroundColor: "black",
              }}
            />
          </a>
          <div className="mobileIcon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className="navMenu"
            onClick={handleClick}
            style={{
              left: click ? 0 : "-100%",
              // display: click ? "visible" : "hidden",
              // opacity: click ? "1" : "0",
              // left: 0,
              // transition: "all 0.5s ease",
            }}
          >
            <li className="navItem">
              <a
                className="navLinksCustom"
                // href="#home"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  document.getElementById("home").focus();
                }}
              >
                Inicio
              </a>
            </li>
            <li className="navItem ">
              <a className="navLinksCustom" href="#services">
                Servicios
              </a>
            </li>
            <li className="navItem">
              <a className="navLinksCustom" href="#technologies">
                Tecnologías
              </a>
            </li>

            <li className="navItem">
              <a className="navLinksCustom" href="#about">
                Sobre nosotros
              </a>
            </li>

            <li className="navItem">
              <a className="navLinksCustom" href="#blog">
                Blog
              </a>
            </li>

            <li className="navItem">
              <a className="navLinksCustom" href="#contact">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
