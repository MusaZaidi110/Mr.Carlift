import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import Logo from "../../assets/WhiteLogoFooter.png";
const Footer = () => {
  return (
    <>
      <div className="FooterContainer">
        <div className="LeftBox">
          <div className="LeftBoxContent">
            <div className="logoContent">
              <img src={Logo} alt="Footer-Logo" />
              <li>
                <p>Monthly Pick & Drop Service You Can Count On!</p>
              </li>
            </div>
            <form action="#" className="formContent">
              <input
                type="text"
                name="footername"
                id="footername"
                placeholder="Name"
              />
              <input
                type="email"
                name="footeremail"
                id="footeremail"
                placeholder="E-mail"
              />
              <input type="submit" value="Get Our Updates" />
            </form>

            <div className="copyrights">
              <hr className="divider" />
              <small>© 2024 Mr. CarLIFT. All rights reserved.</small>
            </div>
          </div>
        </div>

        <div className="RightBox">
          <div className="TopBox">
            <div className="TopBoxContent">
              <ul className="links">
                <p>Links</p>
                <li>
                  <Link>Passenger</Link>
                </li>
                <li>
                  <Link>Driver</Link>
                </li>
                <li>
                  <Link>Estimates</Link>
                </li>
              </ul>

              <ul className="company">
                <p>Company</p>
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Join us</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>

              <ul className="legals">
                <p>Legal</p>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Term of Services</Link>
                </li>
              </ul>
            </div>
            <div className="FooterLinks">
              <Link>Whatsapp</Link>
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>LinkedIn</Link>
              <Link>Gmail</Link>
            </div>
          </div>
          <div className="BottomBox">
            {/* <div className="privacypolicy">
              <hr className="divider" />
              <Link>Privacy Policy</Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
