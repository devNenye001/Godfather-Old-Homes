import { useState } from "react";
import "../pages/styles/Property.css"; // import the styles for the property page
import PropertyCard from "../components/PropertyCard"; // import the reusable card
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Property = () => {
  const [selectedType, setSelectedType] = useState("Apartments");

  const apartments = [
    {
      id: 1,
      name: "Luxury Apartment",
      image: "public/house1.png",
      price: 35000000,
      address: "Lekki Phase 1, Lagos"
    },
    {
      id: 2,
      name: "Penthouse View",
      image: "public/house1.png",
      price: 48000000,
      address: "Banana Island, Lagos"
    },
    {
      id: 3,
      name: "City Studio",
      image: "public/house1.png",
      price: 25000000,
      address: "Victoria Island, Lagos"
    },
  ];

  const houses = [
    {
      id: 4,
      name: "Cozy Bungalow",
      image: "public/house1.png",
      price: 30000000,
      address: "Enugu GRA, Enugu"
    },
    {
      id: 5,
      name: "Family Duplex",
      image: "public/house1.png",
      price: 42000000,
      address: "Wuse 2, Abuja"
    },
    {
      id: 6,
      name: "Modern Mansion",
      image: "public/house1.png",
      price: 95000000,
      address: "Asokoro, Abuja"
    },
  ];

  const listings = selectedType === "Apartments" ? apartments : houses;

  return (
    <div className="propertyPage">
      <div className="propertyHero">
        <Navbar />
        <h1>Your Dream Property</h1>
        <p>Find the perfect home that suits your lifestyle</p>
      </div>

      <div className="options">
        <button
          onClick={() => setSelectedType("Apartments")}
          className={selectedType === "Apartments" ? "active" : ""}
        >
          Apartments
        </button>
        <button
          onClick={() => setSelectedType("Houses")}
          className={selectedType === "Houses" ? "active" : ""}
        >
          Houses
        </button>
      </div>

      <div className="propertyGrid">
        {listings.map((item) => (
          <PropertyCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            address={item.address}
          />
        ))}
      </div>

      <div className="similiar-listings">
        <h2>Similar Listings</h2>
        <div className="propertyGrid">
          {listings.slice(0, 3).map((item) => (
            <PropertyCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              address={item.address}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
