import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperince from "../components/HeroModels/HeroExperince";
import { socialContact, words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 2,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden" data-testid="hero">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span
                        key={`${i}: ${word.text}`}
                        className="flex items-center gap-1 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 p-1 md:p-2 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>{" "}
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none md:w-1/2">
              Hi 👋, I'm Jacob, a{" "}
              <span className="text-amber-400">software developer</span> with{" "}
              <span className="bg-blue-600 text-white-50 rounded-md px-1 italic">
                technology
              </span>{" "}
              as my toolkit but solving problem is my real{" "}
              <b className="text-amber-400">superpower</b> 💪.
            </p>

            <div className="flex items-center space-x-6 my-1 md:my-5 z-10">
              {socialContact.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className={`bg-black-100 border border-black-50 p-2 rounded-xl hover:bg-black-50 ${social.animation}`}
                >
                  <social.iconName size={26} color={social.iconColor} />
                </a>
              ))}
            </div>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              text="See my Work"
            />
          </div>
        </header>

        {/* 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperince />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
