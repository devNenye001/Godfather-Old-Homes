import LandingSection from "../components/LandingSection";
import Hero from "../components/hero";
import PropertiesForRent from "../components/PropertiesForRent";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import FeaturedListings from "../components/FeaturedListings";
import DreamHouse from "../components/DreamHouse";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LandingSection />
      <PropertiesForRent />
      <Testimonial/>
      <FeaturedListings/>
      <DreamHouse/>
      <Footer />
    </div>
  );
};

export default LandingPage;
