import { useEffect, useState } from "react";
import { navLinks } from "../../constants";
import { handleSectionScroll } from "./../../../utils/index";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a
          className="logo flex items-center gap-2"
          href="#hero"
          onClick={(e) => handleSectionScroll(e, "hero")}
        >
          <img
            src="/images/logo.png"
            alt="Jacob's Logo"
            className="size-16 object-contain"
          />
          <b>
            <i>Jacob</i>
          </b>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <a
                  href={link.link}
                  onClick={(e) => handleSectionScroll(e, link.link)}
                >
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row items-end md:items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1LMdj_fEhIw-LlWvKZyDRBqHAX5dSOnfu/view?usp=sharing"
            target="_blank"
            className="contact-btn group"
          >
            <div className="resume">
              <span>Resume</span>
            </div>
          </a>
          <a
            href="#contact"
            className="contact-btn group"
            onClick={(e) => handleSectionScroll(e, "contact")}
          >
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
