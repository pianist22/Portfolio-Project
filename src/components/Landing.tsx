import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Priyanshu
              <br />
              <span>Saha</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="mt-[-100px]">I am a</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">
                Full Stack
                <br />
                Developer
              </div>
              <div className="landing-h2-2">FreeLancer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
