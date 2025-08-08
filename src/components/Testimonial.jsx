import { FaStar } from "react-icons/fa";
import "./styles/Testimonial.css";

const testimonials = [
  {
    title: "Effortless Purchase!",
    message:
      "I was amazed at how simple the process was. Within a few weeks, I had the keys to my new apartment. Godfather Real Homes is truly the real deal!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Amanda Iheanacho",
    role: "Banker, Enugu"
  },
  {
    title: "Reliable & Transparent",
    message:
      "From inspection to payment, everything was clear and honest. I’ll recommend them to anyone looking for a house in Nigeria.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Chuka Obi",
    role: "Software Developer, Abuja"
  },
  {
    title: "They Built My Dream Home",
    message:
      "I told them my vision, and they executed it perfectly. The team was professional and timely. I’m so happy I chose Godfather.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Ngozi Okafor",
    role: "Fashion Designer, Lagos"
  }
];

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>What Our Clients Say</h2>
        <p>We pride ourselves in honesty, speed, and top-quality homes.</p>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{t.title}</h3>
            <p className="testimonial-message">“{t.message}”</p>

            <div className="stars">
              {Array(t.rating)
                .fill()
                .map((_, i) => (
                  <FaStar className="star" key={i} />
                ))}
            </div>

            <div className="testimonial-user">
              <img src={t.img} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
