import "./styles/Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { useState } from "react";

const testimonials = [
  {
    quote: "I would like to express my sincere appreciation for the excellent work done in designing and developing my website. The way you understood my requirements, incorporated my inputs, and transformed my ideas into a professional and user-friendly website is truly commendable. Your patience, creativity, technical expertise, and attention to detail made the entire process smooth, and the final outcome reflects exactly what I envisioned. I highly recommend your services.",
    name: "Mehul Singhal",
    role: "Co Founder",
    company: "ARQENE DESIGNS Pvt Ltd",
    logo: "/images/arqene-logo.jpeg",
    initials: "AD",
    color: "#ffc876",
  },
  {
    quote: "I am delighted to recommend Priyanshu Saha for his exceptional web development services. He designed and developed the official website of BRAINITYX RESEARCHTECH, and the outcome exceeded our expectations. The website is modern, professional, user-friendly, and visually appealing, with excellent functionality. Priyanshu demonstrated strong technical expertise, responsiveness, and professionalism, ensuring that the website perfectly reflected our vision.",
    name: "Dr. Moolchand Sharma",
    role: "Director",
    company: "Brainityx ResearchTech Pvt. Ltd.",
    logo: "/images/brainityx-logo.png",
    initials: "BR",
    color: "#c2a4ff",
  },
];

const Testimonials = () => {
  const [logoErrors, setLogoErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (companyName: string) => {
    setLogoErrors((prev) => ({ ...prev, [companyName]: true }));
  };

  return (
    <div className="testimonials-section section-container" id="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">
          What People Have to <br /><span>Say About Me</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => {
          const hasError = logoErrors[t.company];
          return (
            <div className="testimonial-card" key={index}>
              <div className="card-glow" style={{ "--glow-color": t.color } as React.CSSProperties}></div>
              <div className="quote-icon-container">
                <FaQuoteLeft className="quote-icon" style={{ color: t.color }} />
              </div>
              <p className="quote-text">{t.quote}</p>

              <div className="card-divider"></div>

              <div className="client-info">
                <div className="client-logo-wrapper">
                  {!hasError ? (
                    <img
                      src={t.logo}
                      alt={`${t.company} Logo`}
                      className="client-logo"
                      onError={() => handleImageError(t.company)}
                    />
                  ) : (
                    <div className="client-logo-fallback" style={{ backgroundColor: `${t.color}15`, border: `1px solid ${t.color}` }}>
                      <span style={{ color: t.color }}>{t.initials}</span>
                    </div>
                  )}
                </div>
                <div className="client-meta">
                  <h4 className="client-name">{t.name}</h4>
                  <p className="client-role">
                    {t.role} <span>@ {t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
