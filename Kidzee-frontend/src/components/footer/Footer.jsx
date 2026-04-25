import React from "react";
import { NavLink } from "react-router-dom";

import Bg from "../../assets/laptop_footerbg.png";
import Logo from "../../assets/kidzeelogoo.png";

const Footer = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold"
      : "hover:text-white cursor-pointer";

  return (
    <footer className="relative text-white overflow-hidden">

      {/* Background */}
      <img
        src={Bg}
        alt="footer-bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Logo */}
      <div className="absolute lg:top-0 lg:left-0">
        <img src={Logo} alt="Kidzee" className="w-28 md:w-60" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex flex-wrap md:flex-row justify-between gap-12">

          {/* Spacer */}
          <div className="hidden md:block w-40"></div>

          {/* Quick Links (NOW MATCHES NAVBAR) */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="font-body text-sm space-y-3 text-gray-200">

              <li>
                <NavLink to="/" className={linkClass}>Home</NavLink>
              </li>

              <li>
                <NavLink to="/about" className={linkClass}>About Us</NavLink>
              </li>

              <li>
                <NavLink to="/programs" className={linkClass}>Programmes</NavLink>
              </li>

              <li>
                <NavLink to="/daycare" className={linkClass}>Day Care</NavLink>
              </li>

              <li>
                <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
              </li>

              {/* <li>
                <NavLink to="/blog" className={linkClass}>Blog</NavLink>
              </li> */}

              <li>
                <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
              </li>

            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading text-lg mb-4">Programs</h3>
            <ul className="font-body text-sm space-y-3 text-gray-200">

              <li>
                <NavLink to="/programs" className={linkClass}>
                  Playgroup (2-3 Yrs)
                </NavLink>
              </li>

              <li>
                <NavLink to="/programs" className={linkClass}>
                  Nursery (3-4 Yrs)
                </NavLink>
              </li>

              <li>
                <NavLink to="/programs" className={linkClass}>
                  Junior KG (4-5 Yrs)
                </NavLink>
              </li>

              <li>
                <NavLink to="/programs" className={linkClass}>
                  Senior KG (5-6 Yrs)
                </NavLink>
              </li>

              <li>
                <NavLink to="/daycare" className={linkClass}>
                  Daycare (1.5–10 Yrs)
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4">Contact</h3>
            <ul className="font-body text-sm space-y-3 text-gray-200">
              <li>+91 9953050614</li>
              <li>-kidzee.shiprasuncity@gmail.com</li>
              <li>
                8/3 & 8/4 Palm Road, Shipra Suncity,Indirapuram <br />
                Ghaziabad, Uttar Pradesh
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-400/30 mt-12 pt-6 text-center font-body text-sm text-gray-200">
          © 2026 Kidzee 8/3 & 8/4 Palm Road, Shipra Suncity,Indirapuram. All Rights Reserved. | Admissions Open For 2026–27
        </div>

      </div>
    </footer>
  );
};

export default Footer;