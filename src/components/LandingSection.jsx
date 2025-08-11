// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./styles/LandingSection.css";
import Button from "./button";

export default function LandingSection() {
  return (
    <section className="landing-container">
      <motion.div
        className="landing-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="highlight">Check Out Our Latest Projects</p>
        <h1>
          At <strong>Godfather Real Homes</strong>, we take pride in delivering
          exceptional real estate solutions tailored to our clients' needs.
        </h1>

        <div className="services-tags">
          <span>🏠 Apartments</span>
          <span>🏡 Houses</span>
          <span>🛠️ Build</span>
          <span>📜 Rent & Sell</span>
        </div>
      </motion.div>

      <div className="projects-grid">
        {[
          {
            image: "/details.png",
            title: "Modern Family Apartment",
            desc: "Stylish apartment perfect for families seeking peace and security.",
          },
          {
            image: "/details.png",
            title: "Luxury Duplex in Enugu",
            desc: "High-end house with all modern amenities in a serene estate.",
          },
          {
            image: "/details.png",
            title: "Affordable Mini-Flat",
            desc: "Smartly designed space for singles or couples — rent or buy.",
          },
        ].map((item, index) => (
          <motion.div
            className={`project-card2 ${
              index === 1 || index === 2 ? "large" : ""
            }`}
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} />
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <p className="highlight">ABOUT US</p>
          <img src="/homeImg.jpg" alt="Company Building" />
        </div>
        <div className="about-text">
          <h2>
            With a commitment to excellence and customer satisfaction, we help
            you navigate the real estate market with confidence.
          </h2>
          <p>
            At Godfather Real Homes, we don’t just sell properties — we build
            homes. Whether you're looking to rent, buy, or construct, we guide
            you every step of the way. <strong>Our space fosters love</strong>,
            and we bring that energy into every apartment and house we deliver.
          </p>
          <Button title="Learn More" />
        </div>
      </motion.div>
    </section>
  );
}
