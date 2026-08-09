import React from "react";
import { MapPin, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img
            src="/images/nearhand-logo.svg"
            alt="NearHand"
          />
        </a>
      </div>

      <nav className="navbar-links">
        <a href="/" className="active">
          Home
        </a>

        <a href="/services">
          Services
        </a>

        <a href="/about">
          About Us
        </a>

        <a href="/contact">
          Contact
        </a>
      </nav>

      <div className="navbar-right">
        <button className="location-button">
          <MapPin size={20} />

          <span>Bangalore, India</span>

          <ChevronDown size={17} />
        </button>

        <a href="/login" className="navbar-button">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Navbar;