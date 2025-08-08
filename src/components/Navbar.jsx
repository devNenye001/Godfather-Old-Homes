import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-content">
        <Link to="/">
          <img
            src="/LIGHT-GODFATHER-LOGO.png"
            alt="Godfather Real Homes"
            className="logo"
          />
        </Link>

        <ul className="nav-links">
          <motion.li
            className="nav-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="nav-link-text">Home</Link>
          </motion.li>
          <motion.li
            className="nav-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/property" className="nav-link-text">Listings</Link>
          </motion.li>
          <motion.li
            className="nav-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/projects" className="nav-link-text">Projects</Link>
          </motion.li>
          <motion.li
            className="nav-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/about" className="nav-link-text">About Us</Link>
          </motion.li>
        </ul>

        <motion.button
          className="contact-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className="contact-link">Contact Us</Link>
        </motion.button>

        <motion.div
          className={`burger-menu ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </motion.div>
      </div>

      {menuOpen && (
        <motion.ul
          className="mobile-nav-links"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.li className="mobile-nav-link">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </motion.li>
          <motion.li className="mobile-nav-link">
            <Link to="/property" onClick={() => setMenuOpen(false)}>Listings</Link>
          </motion.li>
          <motion.li className="mobile-nav-link">
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </motion.li>
          <motion.li className="mobile-nav-link">
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          </motion.li>
          <motion.li className="mobile-nav-link">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </motion.li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
