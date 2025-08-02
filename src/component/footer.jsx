import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-section brand">
          <h2>Crazzy's TechZone ⚡</h2> <br/>
          <p>Your one-stop solution for PC builds, repair, and custom parts.</p>
          <p>&copy; {new Date().getFullYear()} Nihit All rights reserved.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:nihit@example.com">anshumanfstdev@gmail.com</a></p>
          <p>Phone: <a href="tel:+911234567890">+91 8669933603</a></p>
          <p>Location: Mumbai, India</p>
        </div>

        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/" ><FaGithub /></a>
            <a href="https://linkedin.com/"><FaLinkedin /></a>
            <a href="https://wa.me/911234567890"><FaWhatsapp /></a>
            <a href="https://twitter.com/"><FaTwitter /></a>
            <a href="https://instagram.com/" ><FaInstagram /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
