import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);
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

              {projects[0].tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-50 text-sm italic md:text-lg"
                  >
                    {tag}
                    {index !== projects[0].tags.length - 1 ? " • " : ""}
                  </span>
                );
              })}
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
              {projects[1].tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-50 text-sm italic md:text-lg"
                  >
                    {tag}
                    {index !== projects[1].tags.length - 1 ? " • " : ""}
                  </span>
                );
              })}
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
              {projects[2].tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-50 text-sm italic md:text-lg"
                  >
                    {tag}
                    {index !== projects[2].tags.length - 1 ? " • " : ""}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        {!showProjects && (
          <div className="flex justify-center">
            <button
              className="w-80 mt-10"
              onClick={() => setShowProjects(true)}
            >
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{"See More Projects . . ."}</p>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </button>
          </div>
        )}

        {showProjects && (
          <>
            <div className="project-list-wrapper !w-full lg:!flex-row flex-wrap mt-10  justify-center">
              {projects.slice(3).map((project) => (
                <div
                  key={project.name}
                  className="md:w-[45%] lg:w-[30%] project relative shadow-md shadow-cyan-300 rounded-xl"
                >
                  <div className="image-wrapper bg-white-50">
                    <img src={project.image} alt={project.name} />
                  </div>

                  <div className="absolute top-2 right-2 flex flex-col-reverse items-center gap-2">
                    <div
                      onClick={() =>
                        window.open(project.source_code_link, "_blank")
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
                      onClick={() => window.open(project.live_demo, "_blank")}
                      className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <img
                        src={"/images/link.png"}
                        alt="live demo"
                        className="size-8 object-contain"
                      />
                    </div>
                  </div>

                  <div className="p-2 space-y-2">
                    <h2>{project.name}</h2>
                    <p className="text-white-50 md:text-xl">
                      {project.description}
                    </p>
                    {project.tags.map((tag, index) => {
                      return (
                        <span
                          key={index}
                          className="text-blue-50 text-sm italic md:text-lg"
                        >
                          {tag}
                          {index !== project.tags.length - 1 ? " • " : ""}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="w-80 mt-10"
                onClick={() => setShowProjects(false)}
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">"See Less Projects . . ."</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Showcase;
