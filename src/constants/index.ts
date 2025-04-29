import { BiLogoWhatsapp } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  Ability,
  CounterItem,
  Experience,
  LogoIcons,
  Project,
  SocialContact,
  TechStack,
  Testimonial,
  Words,
} from "../types/interface";

const navLinks = [
  {
    name: "Work",
    link: "work",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Experience",
    link: "experience",
  },
  // {
  //   name: "Testimonials",
  //   link: "testimonials",
  // },
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

const skills: TechStack[] = [
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Express.js",
    imgPath: "/images/logos/express.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.png",
  },
  {
    name: "Git & Github",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const technologies: LogoIcons[] = [
  {
    name: "HTML 5",
    icon: "/images/logos/html.png",
  },
  {
    name: "CSS 3",
    icon: "/images/logos/css.png",
  },
  {
    name: "JavaScript",
    icon: "/images/logos/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/images/logos/typescript.png",
  },
  {
    name: "Next.jS",
    icon: "/images/logos/nextjs.png",
  },
  {
    name: "Jest",
    icon: "/images/logos/jest.png",
  },
  {
    name: "Redux(RTK)",
    icon: "/images/logos/redux.png",
  },
  {
    name: "Zustand",
    icon: "/images/logos/zustand.png",
  },
  {
    name: "Sass",
    icon: "/images/logos/sass.png",
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwind.png",
  },
  {
    name: "MySQL",
    icon: "/images/logos/mysql.png",
  },
  {
    name: "PostgreSQL",
    icon: "/images/logos/postgres.png",
  },
  {
    name: "Supabase",
    icon: "/images/logos/supabase.png",
  },
  {
    name: "Appwrite",
    icon: "/images/logos/appwrite.png",
  },
  {
    name: "Redis",
    icon: "/images/logos/redis.png",
  },
  {
    name: "Bash_Script",
    icon: "/images/logos/shell.png",
  },
  {
    name: "GitHub Actions",
    icon: "/images/logos/actions.png",
  },
  {
    name: "Docker",
    icon: "/images/logos/docker.png",
  },
  {
    name: "Vercel",
    icon: "/images/logos/vercel.jpeg",
  },
  {
    name: "AWS",
    icon: "/images/logos/aws.png",
  },
  {
    name: "Java",
    icon: "/images/logos/java.png",
  },
  {
    name: "SpringBoot",
    icon: "/images/logos/spring.png",
  },
  {
    name: "JUnit-5",
    icon: "/images/logos/junit.png",
  },
  {
    name: "GSAP",
    icon: "/images/logos/gsap.png",
  },
  {
    name: "Three.js",
    icon: "/images/logos/three.png",
  },
  {
    name: "VSCode",
    icon: "/images/logos/vscode.png",
  },
  {
    name: "Jira",
    icon: "/images/logos/jira.png",
  },
  {
    name: "Figma",
    icon: "/images/logos/figma.png",
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

const projects: Project[] = [
  {
    name: "OneSchool",
    description:
      "A learning management platform that supports structured, collaborative learning. Empowers educators to manage courses and helps learners track their progress.",
    tags: [
      "Next.js",
      "Redux RTK",
      "Tailwindcss",
      "Typescript",
      "Shadcn-ui",
      "Zod",
      "Framer Motion",
      "Clerk Auth",
      "Node.js",
      "Express.js",
      "Stripe",
      "Vercel",
      "Docker",
      "AWS Api Gateway",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS S3",
      "AWS ECR",
      "AWS Cloudfront",
    ],
    image: "/images/lms.png",
    source_code_link: "https://github.com/JacceyCode/lms",
    live_demo: "https://learning-management-system-blue.vercel.app/",
  },
  {
    name: "CarePlus+",
    description:
      "A healthcare self-management system that allows users to schedule medical appointments. It addresses issues like long wait times, avoid scheduling conflicts, and eliminate the need for rescheduling due to physician unavailability.",
    tags: [
      "Nextjs",
      "Typescript",
      "tailwindcss",
      "Shadcn-ui",
      "Appwrite",
      "Sentry",
      "Twilio",
    ],
    image: "/images/care-plus.png",
    source_code_link: "https://github.com/JacceyCode/careplus",
    live_demo: "https://care-plus-pi.vercel.app",
  },
  {
    name: "OneClick Finance",
    description:
      "A modern app for managing financial transactions and budgets, providing instant access to multiple accounts from one platform.",
    tags: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "Shadcn-ui",
      "Chartjs",
      "Appwrite",
      "Plaid",
      "Dwolla",
      "Sentry",
    ],
    image: "/images/bank.png",
    source_code_link: "https://github.com/JacceyCode/finance",
    live_demo: "https://bank-on-the-go.vercel.app",
  },
  {
    name: "Apple iPhone 15 Pro",
    description:
      "Experience the cutting-edge innovation of the Apple iPhone 15 Pro with a stunning titanium frame and the most advanced A17 Bionic chip for unparalleled performance.",
    tags: ["React.js", "Tailwindcss", "GSAP", "React_Three_Fiber", "Sentry"],
    image: "/images/apple.png",
    source_code_link: "https://github.com/JacceyCode/apple",
    live_demo: "https://apple-motion-page.vercel.app",
  },
  {
    name: "D-MarketPlace",
    description:
      "An online e-commerce store incorporating a seamless payment gateway, user account management, authentication, and an intuitive cart system.",
    tags: ["React.js", "Redux", "Tailwindcss", "Firebase", "Stripe"],
    image: "/images/dmarketplace.webp",
    source_code_link: "https://github.com/JacceyCode/themarketplace",
    live_demo: "https://dmarketplace.netlify.app",
  },
  {
    name: "Natours",
    description:
      "A travel application designed and deployed to enthrall travel enthusiasts by showcasing different tourist attractions, facilitating exploration, reservation, and secure payments.",
    tags: ["Nodejs", "Express.js", "MongoDB", "Pug", "JWT", "Stripe"],
    image: "/images/natours.webp",
    source_code_link: "https://github.com/JacceyCode/Natours",
    live_demo: "https://mynatours-3ltq.onrender.com",
  },
  {
    name: "MovieBox",
    description:
      "A website built for movie lover's to checkout the latest movie trends, see reviews and have a sneak peek of the trailer before hitting the cinema.",
    tags: ["React.js", "Tailwindcss", "TMDB_API"],
    image: "/images/moviebox.webp",
    source_code_link: "https://github.com/JacceyCode/HNGxStage2Task",
    live_demo: "https://mymoviestreambox.netlify.app",
  },
];

export {
  abilities,
  counterItems,
  expCards,
  navLinks,
  socialContact,
  testimonials,
  words,
  projects,
  skills,
  technologies,
};
