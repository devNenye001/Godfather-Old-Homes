// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./styles/PropertiesForRent.css";

const properties = [
  {
    id: 1,
    image: "/public/apartments.png",
    title: "2 Bedroom Apartment in Enugu",
    price: "₦450,000/year",
    location: "Thinkers Corner, Enugu",
  },
  {
    id: 2,
    image: "/public/apartments.png",
    title: "1 Bedroom Studio Flat",
    price: "₦300,000/year",
    location: "GRA, Enugu",
  },
  {
    id: 3,
    image: "/public/apartments.png",
    title: "3 Bedroom Duplex",
    price: "₦850,000/year",
    location: "Independence Layout, Enugu",
  },
   {
    id: 4,
    image: "/public/apartments.png",
    title: "2 Bedroom Apartment in Enugu",
    price: "₦450,000/year",
    location: "Thinkers Corner, Enugu",
  },
  {
    id: 5,
    image: "/public/apartments.png",
    title: "1 Bedroom Studio Flat",
    price: "₦300,000/year",
    location: "GRA, Enugu",
  },
  {
    id: 6,
    image: "/public/apartments.png",
    title: "3 Bedroom Duplex",
    price: "₦850,000/year",
    location: "Independence Layout, Enugu",
  },
];

export default function PropertiesForRent() {
  return (
    <section className="rent-section">
      <motion.h1
      className="rent-title"
  initial={{ y: 80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Properties for Rent
</motion.h1>
      <div className="rent-grid">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            className="rent-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={property.image} alt={property.title} />
            <div className="rent-info">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <span>{property.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
