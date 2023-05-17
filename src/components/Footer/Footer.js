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
        <div className="websiteRights">
          Copyright © 2022 ITECHFLUX EIRL. Todos los derechos reservados.
        </div>
        <div className="socialIcons">
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
