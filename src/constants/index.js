import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  nu, 
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  medcs,
  homefunding,
  rex,
  racket,
  lambda,
  java
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Focus",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Team Player",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "racket",
    icon: racket
  }, 
  // {
  //   name: "AWS Lambda",
  //   icon: lambda
  // },
  // {
  //   name: "Java",
  //   icon: java
  // },
];

const experiences = [
  {
    title: "Systems Support Associate Co-op",
    company_name: "Northeastern",
    icon: nu,
    iconBg: "#383E56",
    date: "July - December 2025",
    points: [
      "Assist with data integrations, and troubleshooting",
      "Assist with reporting from departmental systems",
      "Maintain departmental technology inventory",
      "Respond to emails, and provide in-person support"
    ],
  },
  {
    title: "Website Developer",
    company_name: "MedCS Lab",
    icon: medcs,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Operations Assistant",
    company_name: "Home Funding LLC",
    icon: homefunding,
    iconBg: "#383E56",
    date: "July - August 2024",
    points: [
      "Managed 100+ confidential mortgage client records, adhering to strong data security principles",
      "Assisted in processing loan applications, gaining insight into underwriting and compliance tasks",
      "Optimized manual credit review and underwriting processes, reducing errors and increasing efficiency",
      "Managed a six-figure stock portfolio, tracking profitability metrics to generate alpha returns",
    ],
  },
  {
    title: "Shift Lead",
    company_name: "The Rex",
    icon: rex,
    iconBg: "#E6DEDD",
    date: "July - November 2022",
    points: [
      "Oversaw front-of-house operations, serving 100+ customers daily and maintaining a 95% satisfaction rate",
      "Handled customer interactions, resolving issues and ensuring a positive experience",
      "Conducted closing tasks and maintained a clean environment, showcasing strong organizational skills",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MedCS Lab Website",
    description:
      "I designed and built the official website for the MedCS Lab at Northeastern, a research group focused on the intersection of medicine and computer science. The site highlights our mission, showcases our team, and provides an engaging way for others to learn about our work. It features smooth scrolling, animated sections, and a clean, modern layout to reflect the professionalism and innovation of the lab.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rsetia23/medcs-lab",
    website_link: "https://medcs-lab.vercel.app/"
  },
  {
    name: "Train Tracker",
    description:
      "A modern web app that lets users track real-time Amtrak train progress using scraped data from RailRat. Built with React, Express, and custom CSS, it features a searchable train ID autocomplete, mobile optimization, and a dark mode toggle for better accessibility. Deployed using Vercel (frontend) and Render (backend).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rsetia23/train-tracker.git",
    website_link: "https://train-tracker-eight.vercel.app/"
  },
  {
    name: "Recipe Finder",
    description:
      "A modern Recipe Finder web app built with React, Vite, and Tailwind CSS. It allows users to search for recipes using the Spoonacular API, save favorites, and explore detailed cooking instructions. The app features a clean, responsive UI and is deployed on Vercel for fast performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rsetia23/recipe-finder.git",
    website_link: "https://recipe-finder-amber-six.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };