import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/public/LIGHT-GODFATHER-LOGO.png" alt="Godfather Real Homes" />
          <p className="footer-label">Address</p>
          <p className="footer-info">
            <strong>789 Queensberry Street, North</strong><br />
            Melbourne VIC 3051, Australia.
          </p>

          <p className="footer-label">Contact Us</p>
          <p className="footer-info">+(234) 123 456 789</p>

          <p className="footer-label">Email</p>
          <p className="footer-info">godfatherRealHomes@gmail.com</p>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Popular Search</h4>
          <ul>
            <li><Link to="/property?type=apartment-sale">Apartments for Sale</Link></li>
            <li><Link to="/property?type=apartment-rent">Apartments for Rent</Link></li>
            <li><Link to="/property?type=house-sale">Houses for Sale</Link></li>
            <li><Link to="/property?type=house-rent">Houses for Rent</Link></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4>Pages</h4>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/property">Listings</Link></li>
          </ul>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© Godfather Real Homes – All rights reserved</p>
        <div className="footer-social">
          <span>Follow Us</span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}
