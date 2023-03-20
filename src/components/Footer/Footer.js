import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./footer.scss";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="linksWrapper">
        <div className="items">
          <div className="title">Sobre nosotros</div>
          <div className="link">Testimonios</div>
          <div className="link">Inversores</div>
        </div>
        <div className="items">
          <div className="title">Contáctenos</div>
          <div className="link">Contacto</div>
        </div>
      </div>
      <div className="socialMedia">
        <div className="logo"></div>
        <div className="websiteRights">ITECHLABS © 2022</div>
        <div className="socialIcons">
          <div className="socialIconLink">
            <FaFacebook />
          </div>
          <div className="socialIconLink">
            <FaInstagram />
          </div>
          <div className="socialIconLink">
            <FaYoutube />
          </div>
          <div className="socialIconLink">
            <FaTwitter />
          </div>
          <div className="socialIconLink">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
