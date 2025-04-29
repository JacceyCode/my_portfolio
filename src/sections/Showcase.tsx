import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.3 * (i + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src={projects[0].image} alt={projects[0].name} />
            </div>

            <div className="absolute top-2 right-2 flex items-center gap-2">
              <div
                onClick={() =>
                  window.open(projects[0].source_code_link, "_blank")
                }
                className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={"/images/github.png"}
                  alt="github"
                  className="size-8 object-contain"
                />
              </div>

              <div
                onClick={() => window.open(projects[0].live_demo, "_blank")}
                className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={"/images/link.png"}
                  alt="live demo"
                  className="size-8 object-contain"
                />
              </div>
            </div>

            <div className="text-content">
              <h2>{projects[0].name}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src={projects[1].image} alt={projects[1].name} />
              </div>
              <div className="absolute top-2 right-2 flex flex-col-reverse items-center gap-2">
                <div
                  onClick={() =>
                    window.open(projects[1].source_code_link, "_blank")
                  }
                  className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={"/images/github.png"}
                    alt="github"
                    className="size-8 object-contain"
                  />
                </div>

                <div
                  onClick={() => window.open(projects[1].live_demo, "_blank")}
                  className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={"/images/link.png"}
                    alt="live demo"
                    className="size-8 object-contain"
                  />
                </div>
              </div>
              <h2>{projects[1].name}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[1].description.length > 40
                  ? `${projects[1].description
                      .split(" ")
                      .slice(0, 7)
                      .join(" ")} . . .`
                  : projects[1].description}
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src={projects[2].image} alt={projects[1].name} />
              </div>

              <div className="absolute top-2 right-2 flex flex-col-reverse items-center gap-2">
                <div
                  onClick={() =>
                    window.open(projects[2].source_code_link, "_blank")
                  }
                  className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={"/images/github.png"}
                    alt="github"
                    className="size-8 object-contain"
                  />
                </div>

                <div
                  onClick={() => window.open(projects[2].live_demo, "_blank")}
                  className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={"/images/link.png"}
                    alt="live demo"
                    className="size-8 object-contain"
                  />
                </div>
              </div>

              <h2>{projects[2].name}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[2].description.length > 40
                  ? `${projects[2].description
                      .split(" ")
                      .slice(0, 7)
                      .join(" ")} . . .`
                  : projects[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
