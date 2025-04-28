import { socialContact } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialContact.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              className="icon"
            >
              <social.iconName size={26} color={social.iconColor} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-nowrap">
            &copy; {new Date().getFullYear()} <i>Jacob | JacceyCode</i>.{" "}
            <br className="lg:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
