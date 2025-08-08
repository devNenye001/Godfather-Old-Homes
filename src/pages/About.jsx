
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/About.css';
import { FaHome, FaTools, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <div className="about-wrapper">
      

      <section className="about-hero" data-aos="fade-up">
        <Navbar />
        <h1>About Godfather Real Homes</h1>
        <p>Our space fosters love — one home at a time.</p>
      </section>

      <section className="about-section" data-aos="fade-up">
        <h2><FaCheckCircle /> Our Mission</h2>
        <p>We exist to make home ownership stress-free and luxurious for individuals and families across Nigeria.</p>
        <ul>
          <li><FaCheckCircle /> Simplify the buying and renting process</li>
          <li><FaCheckCircle /> Promote transparency and trust</li>
          <li><FaCheckCircle /> Deliver value through professionalism</li>
        </ul>
      </section>

      <section className="about-section light-bg" data-aos="fade-up">
        <h2><FaTools /> What We Offer</h2>
        <ul>
          <li><FaHome /> House Sales & Rentals</li>
          <li><FaMapMarkerAlt /> Land Surveying & Documentation</li>
          <li><FaTools /> Building Construction & Supervision</li>
          <li><FaCheckCircle /> Real Estate Consulting & Investment Planning</li>
        </ul>
      </section>

      <section className="about-section contact" data-aos="fade-up">
        <h2><FaMapMarkerAlt /> Contact Us</h2>
        <p>
          No. 15 Chime Avenue, New Haven, Enugu <br />
          <FaPhone /> +234 901 234 5678 <br />
          <FaEnvelope /> godfatherhomes@gmail.com
        </p>
      </section>
    </div>
          <Footer />
    </div>
  );
};

export default About;
