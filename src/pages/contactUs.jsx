import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="ContactPage">
      <div className="contactHeading">
        <Navbar />
        <h1>Let's Connect</h1>
      </div>

      <div className="contactFormSection">
        <div className="contactInfo">
          <h2>Contact Info</h2>
          <p><FaPhoneAlt /> +234 901 234 5678</p>
          <p><FaEnvelope /> hello@godfatherhomes.ng</p>
          <p><FaMapMarkerAlt /> Enugu, Nigeria</p>

          <div className="socialIcons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        <form className="contactForm">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
