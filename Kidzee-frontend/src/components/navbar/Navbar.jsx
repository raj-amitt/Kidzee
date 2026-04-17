import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Logo from "../../assets/kidzeelogo.png";

import { FiClock, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? "text-[#985CC7]" : "hover:text-[#985CC7]";

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center bg-[#985CC7] text-white text-sm px-6 py-2">
        <div className="flex items-center gap-6 font-body font-extralight">
          <span className="hidden md:flex items-center gap-2 text-xs lg:text-sm">
            <FiClock /> Weekdays - 9:00AM To 6:00PM
          </span>

          <span className="text-xs lg:text-sm flex items-center gap-2">
            <IoLocationOutline /> 8/3 & 8/4 Palm Road, Shipra Suncity,Indirapuram
          </span>
        </div>

        <div className="flex items-center gap-6 font-body">
          <span className="hidden md:flex items-center gap-2 text-xs lg:text-sm">
            <FiPhone />{" "}
            <a href="tel:+919953050614" className="text-sm">
              +91 9953050614
            </a>
          </span>

          <div className="hidden sm:flex gap-3 text-lg">
            <a
              href="https://wa.me/919953050614"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/kidzeeshiprasuncity/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Logo */}
        <NavLink to="/">
          <img src={Logo} alt="Kidzee" className="h-10" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center font-heading text-gray-700 text-sm gap-8">
          <li>
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/programs" className={navClass}>
              Programmes
            </NavLink>
          </li>
          <li>
            <NavLink to="/daycare" className={navClass}>
              Day Care
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={navClass}>
              Gallery
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/blog" className={navClass}>Blog</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" className={navClass}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button text="Enquire Now" />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 p-6 font-heading text-gray-700">
          <li>
            <NavLink
              to="/"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/programs"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Programmes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/daycare"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Day Care
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/blog" className={navClass} onClick={() => setMenuOpen(false)}>Blog</NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
