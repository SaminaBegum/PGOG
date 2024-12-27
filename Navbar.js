// CustomNavbar.js
import React, { useState } from "react";


const CustomNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
  <button onClick={toggleDropdown} className="dropdown-toggle">
    Businesses
  </button>
  <div className="dropdown-menu">
    <a href="#business1">Business 1</a>
    <a href="#business2">Business 2</a>
    <a href="#business3">Business 3</a>
  </div>
</div>
      </nav>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
    </header>
  );
};

export default CustomNavbar;

