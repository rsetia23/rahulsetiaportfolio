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
  nodejs,
  git,
  docker,
  java,
  python,
  mysql,
  expressjs,
  aws,
  vscode,
} from "../assets";

// Experience and projects are edited via Pages CMS (see .pages.yml)
import experiencesData from "../content/experiences.json";
import projectsData from "../content/projects.json";

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
  // {
  //   title: "Software Developer",
  //   icon: web,
  // },
  // {
  //   title: "Frontend Focus",
  //   icon: mobile,
  // },
  // {
  //   title: "Problem Solver",
  //   icon: backend,
  // },
  // {
  //   title: "Team Player",
  //   icon: creator,
  // },
];

const technologies = [
  // Languages
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  // Frameworks
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },

  // Developer Tools
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
];

const { experiences } = experiencesData;

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

const { projects } = projectsData;

export { services, technologies, experiences, testimonials, projects };
