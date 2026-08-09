import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column footer-brand">
          <img
            src="/images/nearhand-logo.svg"
            alt="NearHand"
            className="footer-logo"
          />

          <p>
            Your trusted platform to find reliable
            local professionals near you.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <Facebook size={19} />
            </a>

            <a href="#" aria-label="Instagram">
              <Instagram size={19} />
            </a>

            <a href="#" aria-label="Twitter">
              <Twitter size={19} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Popular Services</h3>

          <a href="/services?category=Electricians">
            Electricians
          </a>

          <a href="/services?category=Plumbers">
            Plumbers
          </a>

          <a href="/services?category=Carpenters">
            Carpenters
          </a>

          <a href="/services?category=Cleaners">
            Cleaners
          </a>

          <a href="/services?category=Mechanics">
            Mechanics
          </a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <MapPin size={19} />
            <span>Bangalore, India</span>
          </div>

          <div className="contact-item">
            <Phone size={19} />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <Mail size={19} />
            <span>support@nearhand.com</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} NearHand. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;