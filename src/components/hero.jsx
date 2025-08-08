import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Button from "./button";
import "./styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = ["buy", "sell", "build"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[currentWordIndex];
    let typingSpeed = isDeleting ? 80 : 150;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting]);

  return (
    <div className="Hero">
      <Navbar />

      <div className="hero-content">
        <h3>GodFather Real Homes</h3>
        <h1>
          We{" "}
          <span
            style={{
              lineHeight: "50px",
            }}
            className="typewriter"
          >
            {text}
          </span>{" "}
          apartments and houses
        </h1>

        <div className="buttons">
          <Link to="/property">
            <Button title="Explore Properties" />
          </Link>
          <Link to="/contact">
            <Button title="Contact Us" white />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
