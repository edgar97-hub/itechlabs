import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import logo from "../../images/logo2.jpeg";
import "./navbar.scss";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  NavLinksCustom,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      <div className="nav">
        <div className="navbarContainer">
          <a className="navLogo" href="/" onClick={closeMobileMenu}>
            {/** <NavIcon/>*/}
            {/* <img
              className="logo"
              src={logo}
              style={{
                marginLeft: "50px",
                marginTop: "0px",
                width: "8rem",
                height: "5rem",
                borderRadius: "9px",
              }}
            /> */}
          </a>
          <div className="mobileIcon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className="navMenu"
            onClick={handleClick}
            style={{
              left: click ? 0 : "-100%",
            }}
            click={click.toString()}
          >
            <li className="navItem">
              <a
                className="navLinksCustom rrr"
                href="#home"
                onClick={closeMobileMenu}
              >
                Inicio
              </a>
            </li>
            <li className="navItem ">
              <a
                className="navLinksCustom"
                href="#services"
                onClick={closeMobileMenu}
              >
                Servicios
              </a>
            </li>
            <li className="navItem">
              <a
                className="navLinksCustom"
                href="#technologies"
                onClick={closeMobileMenu}
              >
                Tecnologías
              </a>
            </li>

            <li className="navItem">
              <a
                className="navLinksCustom"
                href="#about"
                onClick={closeMobileMenu}
              >
                Sobre nosotros
              </a>
            </li>

            <li className="navItem">
              <a
                className="navLinksCustom"
                href="#blog"
                onClick={closeMobileMenu}
              >
                Blog
              </a>
            </li>

            <li className="navItem">
              <a
                className="navLinksCustom"
                href="#contactus"
                onClick={closeMobileMenu}
              >
                Contáctanos
              </a>
            </li>

            {/** 
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              */}
          </ul>
        </div>
      </div>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
