import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SIH 2024 Finalist</h4>
                <h5>Samudra Saarthi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              • Built a coastal safety system shortlisted among top 30+ pan-India hackathon projects.
              <br /><br />
              • Integrated 5+ real-time INCOIS APIs, ML-based risk prediction (92% accuracy), live beach safety map, AI Chatbot, and SOS emergency alert system.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>Amrutam</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              • Developing affiliate platform for Amrutam using GoAffPro, boosting affiliate sales.
              <br /><br />
              • Managed ingredient data workflows on Shopify.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Amrutam</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              • Spearheaded ABHA (ABDM) integration for secure digital health records, implementing ABHA Linking and HPR based Doctor Onboarding.
              <br /><br />
              • Manage the complete Affiliate Platform in production, delivering new features, fixing critical issues, and supporting affiliate-driven revenue growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
