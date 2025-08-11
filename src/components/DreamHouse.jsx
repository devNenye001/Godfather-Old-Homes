import Button from "./button";
import "./styles/DreamHouse.css";

const DreamHouse = () => {
  return (
    <div className="DreamHouse">
      <div className="dreamHouseContent">
        <h1>Get Your Dream House</h1>
        <p>
          Looking for the perfect place to call home? Whether you want to buy, rent,
          or even build, we’ll guide you every step of the way until your dream becomes reality.
        </p>
        <Button title="Explore Properties" />
      </div>
      <img src="/house.svg" alt="house" />
    </div>
  );
};

export default DreamHouse;
