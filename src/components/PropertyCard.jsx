import "../pages/styles/Property.css"; 

import { Link } from "react-router-dom";
import Button from "./button";

const PropertyCard = ({id, name, image, price, address }) => {
  return (
    <div className="property-card">
      <img src={image} alt={name} className="property-image" />
      <div className="property-details">
        <h3>{name}</h3>
        <p className="property-address">{address}</p>
        <p className="property-price">₦{price.toLocaleString()}</p>
        <Link to={`/property/${id}`}>
          <Button title="View Details" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
