import "./styles/FeaturedListings.css";

const listings = [
  {
    title: "Modern 3-Bedroom Apartment",
    location: "Enugu City Center",
    price: "₦4,500,000",
    image: "public/house1.png",
  },
  {
    title: "Luxury Duplex with Pool",
    location: "New Haven, Enugu",
    price: "₦9,800,000",
    image: "public/house1.png",
  },
  {
    title: "Cozy 2-Bedroom Bungalow",
    location: "Independence Layout",
    price: "₦3,200,000",
    image: "public/house1.png",
  },
];

const FeaturedListings = () => {
  return (
    <div className="FeaturedListings">
      <h1>Featured Listings</h1>
      <p>Browse our wide range of featured properties.</p>
      <div className="featuredCards">
        {listings.map((listing, index) => (
          <div className="featured-card" key={index}>
            <img src={listing.image} alt={listing.title} />
            <div className="card-info">
              <h3>{listing.title}</h3>
              <p className="location">{listing.location}</p>
              <p className="price">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
