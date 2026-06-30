import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const personalProjects = [
  {
    title: "SpendWise",
    category: "AI-Powered Finance Tracker",
    tools: "Next.js, Prisma, Supabase, Clerk, Gemini API, Inngest, Arcjet",
    image: "/images/spendwise.png",
    link: "https://spendwise.priyanshucode.xyz/",
    github: "https://github.com/pianist22/spendwise",
  },
  {
    title: "Nail@Thumb",
    category: "AI-Powered Thumbnail Generator",
    tools: "Next.js, TypeScript, Neon PostgreSQL, Vercel Blob, Gemini 2.5 Flash",
    image: "/images/nailthumb.png",
    link: "https://nail-thumb.priyanshucode.xyz/",
    github: "https://github.com/pianist22/nail-thumb",
  },
  {
    title: "Ragnetic",
    category: "AI-Powered Document Chat",
    tools: "OpenAI GPT-4, Qdrant Vector DB, RAG (PDFs, YouTube, Web Links)",
    image: "/images/ragnetic.png",
    link: "https://ragnetic.priyanshucode.xyz/",
    github: "https://github.com/pianist22/ragnetic",
  },
];

const freelanceProjects = [
  {
    title: "Arqene",
    category: "Luxury Furniture Website",
    tools: "Premium E-commerce Showcase, Immersive UI, Responsive Layout",
    image: "/images/arqene.png",
    link: "https://www.arqene.com/",
    github: "",
  },
  {
    title: "Brainityx",
    category: "Academic & Conference Management",
    tools: "Next.js, Academic Conference Management, Research Publication Support",
    image: "/images/brainityx.png",
    link: "https://www.brainityxresearchtech.in/",
    github: "",
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "freelance">("personal");

  const currentProjects = activeTab === "personal" ? personalProjects : freelanceProjects;

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      function calculateTranslateX() {
        const workFlex = document.querySelector(".work-flex") as HTMLElement;
        const workContainer = document.querySelector(".work-container") as HTMLElement;
        if (!workFlex || !workContainer) return 0;

        const scrollWidth = workFlex.scrollWidth;
        const containerWidth = workContainer.clientWidth;

        const style = window.getComputedStyle(workFlex);
        const marginLeft = Math.abs(parseFloat(style.marginLeft) || 0);

        const computedX = scrollWidth - containerWidth - marginLeft;
        return computedX > 0 ? computedX : 0;
      }

      // Initial check to see if horizontal scroll is actually needed
      let translateX = calculateTranslateX();

      if (translateX > 0) {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".work-section",
            start: "top top",
            end: () => `+=${calculateTranslateX()}`, // Recalculate on refresh
            scrub: 1.5, // Eased scrub for ultimate smoothness
            pin: true,
            id: "work",
            invalidateOnRefresh: true,
          },
        });

        timeline.to(".work-flex", {
          x: () => -calculateTranslateX(), // Recalculate on refresh
          ease: "none",
        });

        // Fade out fixed icons-section during pinning to prevent overlap
        ScrollTrigger.create({
          trigger: ".work-section",
          start: "top center",
          end: () => `+=${calculateTranslateX()}`,
          onEnter: () => gsap.to(".icons-section", { opacity: 0, pointerEvents: "none", duration: 0.3 }),
          onLeave: () => gsap.to(".icons-section", { opacity: 1, pointerEvents: "all", duration: 0.3 }),
          onEnterBack: () => gsap.to(".icons-section", { opacity: 0, pointerEvents: "none", duration: 0.3 }),
          onLeaveBack: () => gsap.to(".icons-section", { opacity: 1, pointerEvents: "all", duration: 0.3 }),
          id: "work-icons",
          invalidateOnRefresh: true,
        });
      }
    });

    mm.add("(max-width: 1024px)", () => {
      // Ensure horizontal translation is reset on mobile/tablet viewports
      gsap.set(".work-flex", { x: 0 });
    });

    return () => {
      mm.revert();
    };
  }, [activeTab]);

  const handleTabChange = (tab: "personal" | "freelance") => {
    if (tab === activeTab) return;
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "auto" });
    }
    // Small timeout to allow the browser to complete scroll resetting before updating DOM and GSAP
    setTimeout(() => {
      setActiveTab(tab);
    }, 50);
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-tabs-container">
            <div className="work-tabs" data-cursor="disable">
              <button
                className={`work-tab-btn ${activeTab === "personal" ? "active" : ""}`}
                onClick={() => handleTabChange("personal")}
              >
                My Projects
              </button>
              <button
                className={`work-tab-btn ${activeTab === "freelance" ? "active" : ""}`}
                onClick={() => handleTabChange("freelance")}
              >
                Freelance Projects
              </button>
            </div>
          </div>
        </div>
        <div className="work-flex">
          {currentProjects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4 style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
                      {project.title}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "inline-flex", color: "var(--accentColor)" }}
                          title="View Source on GitHub"
                          data-cursor="disable"
                        >
                          <FaGithub size={18} />
                        </a>
                      ) : null}
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
