import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TechIcon from "../components/Models/TeckLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { skills } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-fit md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring To The Table"
        />

        <div className="tech-grid">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-border tech-card overflow-hidden group xl:rounded-3xl rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {skill.imgPath ? (
                    <img src={skill.imgPath} alt={skill.name} />
                  ) : (
                    <TechIcon
                      model={{
                        ...skill,
                        modelPath: skill.modelPath || "",
                        scale: skill.scale || 1,
                        rotation: skill.rotation || [0, 0, 0],
                      }}
                    />
                  )}
                </div>

                <div className="padding-x w-full">
                  <p>{skill.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-3xl rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
