import { BiLogoWhatsapp } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  Ability,
  CounterItem,
  Experience,
  LogoIcons,
  SocialContact,
  TechIcons,
  TechImages,
  Testimonial,
  Words,
} from "../types/interface";

const navLinks = [
  {
    name: "Work",
    link: "work",
  },
  {
    name: "Experience",
    link: "experience",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Testimonials",
    link: "testimonials",
  },
];

const words: Words[] = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems: CounterItem[] = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Satisfied Clients" },
  { value: 78, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList: LogoIcons[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities: Ability[] = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs: TechImages[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons: TechIcons[] = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards: Experience[] = [
  {
    review:
      "Jacob's expertise is evident in his consistent delivery of high-quality solutions that improve performance, security, and user engagement. His dedication to clean architecture, agile methodologies, and continuous improvement is evident in every project he undertakes.",
    imgPath: "/images/traderappimg.png",
    logoPath: "/images/traderapp.png",
    title: "Full Stack Engineer",
    date: "March 2024 - Present",
    responsibilities: [
      "Developed a real-time asset price streaming feature for the user dashboard using Web Sockets, Redis and the Binance API, improving trade execution and monitoring speed.",
      "Designed a trade signals tracking system to accurately calculate and reward users for earned profits, increasing transaction accuracy by 41%.",
      "Boosted new registrations by 33% and increased active users by 74% by implementing a gamified task and reward system.",
      "Implemented automated unit testing with Jest, reducing deployment bugs by 55% and improving system reliability.",
    ],
  },
  {
    review:
      "Jacob combines deep frontend experience with robust backend API design skills. His passion for crafting secure, efficient, and user-focused products stands out in both web and mobile projects.",
    imgPath: "/images/eumlaimg.png",
    logoPath: "/images/eumla.png",
    title: "Full Stack Developer",
    date: "January 2024 - October 2024",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Jacob brings a unique blend of technical excellence and real-world impact to his work. His collaborative spirit, problem-solving ability, and commitment to innovation set him apart as a well-grounded software developer.",
    imgPath: "/images/qiminvestimg.png",
    logoPath: "/images/qiminvest.png",
    title: "Software Developer",
    date: "June 2022 - March 2024",
    responsibilities: [
      "Increased revenue by 7% and traffic by 24% by deploying a new website optimized with search engine optimization (SEO) strategies and meta-tagging.",
      "Enhanced API performance by 20% by optimizing query efficiency and database structuring in Node.js/Express.",
      "Strengthened security by implementing JWT-based authentication and cookie-based access control, reducing unauthorized access incidents.",
      "Reduced system failures by 35% with automated unit testing with Jest, ensuring data integrity.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialContact: SocialContact[] = [
  {
    name: "github",
    url: "https://github.com/JacceyCode",
    iconName: FaGithub,
    iconColor: "white",
    animation: "animate-bounce",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/jacob-oluwasesan-adebayo/",
    iconName: FaLinkedin,
    iconColor: "#0077B5",
    animation: "animate-[bounce_2s_infinite]",
  },
  {
    name: "twitter",
    url: "https://twitter.com/code_sesan",
    iconName: FaXTwitter,
    iconColor: "white",
    animation: "animate-bounce",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/2348134557536",
    iconName: BiLogoWhatsapp,
    iconColor: "#075E54",
    animation: "animate-[bounce_2s_infinite]",
  },
];

export {
  abilities,
  counterItems,
  expCards,
  expLogos,
  logoIconsList,
  navLinks,
  socialContact,
  techStackIcons,
  techStackImgs,
  testimonials,
  words,
};
