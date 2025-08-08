// import { div } from "framer-motion/client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/Projects.css";

const projects = [
  {
    title: "Godfather Luxury Apartments",
    desc: "Located in the heart of Enugu, these units feature smart-home tech and premium designs.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  },
  {
    title: "Smart Homes at Independence Layout",
    desc: "Built for the future. Solar-powered, secure, and fully automated houses.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
  },
  {
    title: "Affordable Estates, Abakpa",
    desc: "Clean, affordable, and elegant. Ideal for families and first-time homeowners.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  },
  {
    title: "Palmview Homes, GRA",
    desc: "Exquisite duplexes in a serene neighborhood with 24/7 security.",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
  },
  {
    title: "Victoria Court Apartments",
    desc: "A blend of modern and minimalist architecture for stylish city living.",
    img: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9"
  },
  {
    title: "Rosewood Villas, New Haven",
    desc: "Family-focused gated estate with playgrounds and green zones.",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
  },
  {
    title: "Urban Studio Homes",
    desc: "Compact, classy, and designed for the young professionals.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
  },
  {
    title: "The GrandView Estate",
    desc: "Hillside views, premium amenities, and timeless architecture.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Maple Residence",
    desc: "Your peaceful escape from the city’s chaos – luxury meets tranquility.",
    img: "https://images.unsplash.com/photo-1600607687989-c7c53a9bfe20"
  },
];

const ProjectsPage = () => {
  return (
   <div>
     <div className="ProjectsPage">
      <div className="ProjectsHeading">
        <Navbar />
        <h1>Our Signature Real Estate Projects</h1>
        <p>Explore the blend of beauty, function, and luxury in our properties.</p>
      </div>

      <div className="ProjectsContent">
        {projects.map((proj, index) => (
          <div className={`project-card fade-in delay-${index % 3}`} key={index}>
            <img src={proj.img} alt={proj.title} />
            <div className="project-info">
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
   </div>
  );
};

export default ProjectsPage;
