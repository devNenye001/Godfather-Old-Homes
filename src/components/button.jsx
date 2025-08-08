import { ArrowRight } from "lucide-react";
import "./styles/Button.css";

const Button = ({ title, white }) => {
  return (
    <button className={`btn ${white ? "btn-white" : "btn-dark"}`}>
      
      {title} <ArrowRight size={18} />
    </button>
  );
};

export default Button;
