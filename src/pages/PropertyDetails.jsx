//import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Button from "../components/button";
import PropertyCard from "../components/PropertyCard";
import "./styles/PropertyDetails.css"; // import the styles for the property details page
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const property = {
  id: "1",
  name: "Palm Heights Luxury Apartments",
  address: "Banana Island, Lagos",
  price: "85,000,000",
  description:
    "Experience ultimate luxury in this beautiful apartment with ocean views, 24/7 security, smart home features, pool, and more.",
  images: ["/home-pic.jpg", "/home-pic.jpg", "/home-pic.jpg"],
};

const similarListings = [
  {
    id: "2",
    name: "Ocean Breeze Villa",
    address: "Victoria Island, Lagos",
    price: "72,000,000",
    image: "/home-pic.jpg",
  },
  {
    id: "3",
    name: "Ikoyi Serenity Home",
    address: "Ikoyi, Lagos",
    price: "90,000,000",
    image: "/home-pic.jpg",
  },
  {
    id: "4",
    name: "Lekki Paradise Estate",
    address: "Lekki Phase 1, Lagos",
    price: "65,000,000",
    image: "/home-pic.jpg",
  },
];

const PropertyDetails = () => {
  //const { id } = useParams();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar />
      <div className="property-details">
      {/* Image Slider */}
      <div className="slider-wrapper">
        <Slider {...sliderSettings}>
          {property.images.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`Property ${idx}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h1 className="property-title">{property.name}</h1>
        <p className="property-address">{property.address}</p>
        <h2 className="property-price">₦{property.price}</h2>
        <p className="property-description">{property.description}</p>

        <div className="cta-button">
          <Button title="Contact Agent" />
        </div>
      </div>

      {/* Similar Listings */}
      <div className="similar-listings">
        <h3>Similar Listings</h3>
        <div className="listing-grid">
          {similarListings.map((item) => (
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
    </div>
    <Footer/>
    </div>
  );
};

export default PropertyDetails;
