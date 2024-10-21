import React from "react";
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
import { FaLocationDot } from "react-icons/fa6";
import instagramIcon from "../../../assets/Instagram_icon.png"
import fbIcon from "../../../assets/fbicon.png"
import mailIcon from "../../../assets/mail-icon.png"

// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <div>
      {" "}
      <footer
        className="footer"
        style={{
          visibility: location.pathname.includes("/admin")
            ? "hidden"
            : "visible",
        }}
      >
        <div className="footer_container pt-5">
          <div className="footer_section">
            <div className="location">
              <FaLocationDot/>
              <div>
                <p>12 Galactic Street</p>
                <p>Mt. Duneed, VIC 3217</p>
              </div>
            </div>
            <div className="location">
              <FaPhoneAlt />
              <p>
                <a href="tel://+0000">+61 476187075</a>
              </p>
            </div>
            <div className="location">
              <MdEmail/>
              <p>
                <a
                  href="mailto://wma@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  geelongmalayaleeassociation@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer_section">
            <h4>Reach Us....</h4>
            <div className="social">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fbIcon} alt="" />
              </a>
              <a
                href="mailto://wma@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mailIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text-light">Copyright © 2024 | WMA - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
