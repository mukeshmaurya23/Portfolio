import { BiHomeAlt, BiSolidVideos } from "react-icons/bi";

import { BsCodeSlash, BsFire } from "react-icons/bs";
import { RiInformationLine } from "react-icons/ri";
import { RxResume } from "react-icons/rx";
export const navbarMenu = [
  {
    id: 1,
    name: "Home",
    scrollId: "/",
    icon: <BiHomeAlt />,
  },
  {
    id: 2,
    name: "About",
    scrollId: "/#about",
    icon: <RiInformationLine />,
  },
  {
    id: 3,
    name: "Snippets",
    scrollId: "https://leetcode.com/MukeshMaurya/",
    icon: <BsCodeSlash />,
  },
  {
    id: 4,
    name: "Projects",
    scrollId: "/#projects",
    icon: <BsFire />,
  },
  {
    id: 5,
    name: "Resume",
    icon: <RxResume />,
  },
];
export const socialMedia = [
  {
    id: 1,
    name: "Twitter",
    linkPath: "https://twitter.com/mukeshmaurya23",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="16"
        height="16"
        viewBox="0 0 50 50"
        // style="fill:#FFFFFF;"
        style={{ fill: "#FFFFFF" }}
      >
        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Github",
    linkPath: "https://github.com/mukeshmaurya23/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fill="#194fc6"
          d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z"
        ></path>
        <path
          fill="#a2e4f4"
          d="M9.984,15.206c0-0.262,0.01-1.125,0.01-2.195c0-0.746-0.256-1.234-0.543-1.482	c1.782-0.198,3.653-0.874,3.653-3.948c0-0.873-0.31-1.587-0.822-2.147c0.082-0.202,0.357-1.016-0.08-2.117	c0,0-0.67-0.215-2.198,0.82C9.364,3.961,8.68,3.872,8,3.869C7.32,3.872,6.636,3.961,5.998,4.138c-1.528-1.035-2.2-0.82-2.2-0.82	C3.362,4.419,3.637,5.233,3.719,5.435C3.208,5.994,2.896,6.708,2.896,7.582c0,3.066,1.867,3.752,3.644,3.954	c-0.229,0.2-0.435,0.552-0.508,1.069c-0.456,0.205-1.615,0.558-2.328-0.665c0,0-0.423-0.768-1.225-0.824c0,0-0.781-0.01-0.055,0.486	c0,0,0.524,0.246,0.888,1.17c0,0,0.47,1.556,2.695,1.072c0.004,0.668,0.011,1.171,0.011,1.361c0,0.209-0.144,0.449-0.531,0.386	C6.277,15.853,7.121,16,8,16c0.88,0,1.724-0.147,2.516-0.41C10.126,15.656,9.984,15.416,9.984,15.206z"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Linkedin",
    linkPath: "https://www.linkedin.com/in/mukesh-maurya-501380224/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0277b5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Instagram",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b5179e"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-instagram"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    ),
  },
  {
    id: 5,
    name: "Stackoverflow",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f77f00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-layers"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
];

export const skillsData = {
  frontEnd: [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Javascript",
    },
    {
      id: 4,
      name: "Tailwind CSS",
    },
    {
      id: 5,
      name: "React JS",
    },
    {
      id: 6,
      name: "Next JS",
    },
    {
      id: 7,
      name: "Material UI",
    },
    {
      id: 8,
      name: "Typescript",
    },
  ],
  Backend: [
    {
      id: 1,
      name: "Node JS",
    },
    {
      id: 2,
      name: "Express JS",
    },
    {
      id: 3,
      name: "Next Auth",
    },
  ],
  Database: [
    {
      id: 1,
      name: "MongoDB",
    },
    {
      id: 2,
      name: "Firebase",
    },
    {
      id: 3,
      name: "PostgreSQL",
    },
    {
      id: 4,
      name: "MySQL",
    },
  ],
  devOps: [
    {
      id: 1,
      name: "Git",
    },
    {
      id: 2,
      name: "Docker",
    },
    {
      id: 3,
      name: "Aws",
    },
  ],
};

export const randomColorData = (index) => {
  const randomColor = ["#f75e80", "#f9d423", "#03d3b0", "#dd9109"];
  const repeatedColors = Array.from(
    { length: index + 1 },
    (_, i) => randomColor[i % randomColor.length]
  );
  //console.log(repeatedColors[index]);
  return repeatedColors[index];
};

export const projectsData = [
  {
    id: 1,
    name: "TechPlacement",

    image: require("../src/assets/images/openai.jpg"),

    techStack: [
      "React JS",
      "Bootstrap 5",
      "MongoDB",
      "Express JS",
      "Node JS",
      "Google OAuth",
      "JWT",
      "OpenAI",
      "Cloudinary",
    ],
  },
  {
    id: 2,
    name: "Netflix GPT",
    image: require("../src/assets/images/nextflix.png"),
    techStack: [
      "React JS",
      "Tailwind CSS",
      "OpenAI",
      "Zustand",
      "Axios",
      "TMDB API",
    ],
  },
  {
    id: 3,
    name: "Video-Streming(Youtube)",
    image: require("../src/assets/images/youtube.png"),
    techStack: [
      "React JS",
      "Tailwind CSS",
      "Redux-toolkit",
      "Axios",
      "Youtube API",
    ],
  },
];

export const moreProjectsData = [
  {
    id: 1,
    name: "Holmeddoc",
    image: require("../src/assets/images/Logo.png"),
    techStack: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Redux-thunk",
      "Larvel",
      "MySQL",
      "AWS",
      "Material UI",
    ],
  },
  {
    id: 2,
    name: "Crowwy",
    image: require("../src/assets/images/croowy.png"),
    techStack: [
      "React JS",
      "Redux",
      "Redux-thunk",
      "Material UI",
      "Stripe",
      "Docker",
    ],
  },
  {
    id: 3,
    name: "Food Ordering App",
    image: require("../src/assets/images/swiggy.png"),
    techStack: [
      "React JS",
      "Redux-toolkit",
      "Redux-thunk",
      "Tailwind CSS",
      "Swiggly API",
    ],
  },
];

export const aboutInfo = {
  name: "Mukehsh Maurya",
  email: "mukeshmaurya9594@gmail.com",
  phone: "8104618476",
  description:
    "Hello world ! I'm an euthansiatic full stack developer, I Never tired of learning and exploring new things. I,m Passionate towards technology. An energitic and self motivated person that's curious and has a drive for knowledge Ability to convert the business requirements into technical solutions. I'm a quick learner and a team player with good communication skills.Currently I'm working as a full stack developer where my role is to develop the optimize and reliable software solutions. ",
};

export const experienceData = [
  {
    id: 1,
    companyName:
      "Freelance Full Stack Web Developer / Captcha Verification WEB APPLICATION",
    designation: "Freelancing",
    duration: "2022",
    description: [
      {
        text: "Developed a captcha Verification solving webpage where we can get a record full of captcha images and then we should be able to highlight those images on the web page",
      },
      {
        text: "When user submit the highlighted image then in Airtable corresponding columns are updated with 0 and 1",
      },
    ],
  },
  {
    id: 2,
    companyName: "MYPCOT INFOTECH PVT LTD",
    designation: "Software Developer",
    duration: "June 2023 - Present",
    description: [
      {
        text: "Designed and implemented scalable microservices architecture React web application, Reduces the Initial Page traffic and loads up to 60% and Developed a comprehensive web application facilitating seamless interactions between doctors and  patients. The platform features doctor availability checks, appointment booking, doctor search and filtering capabilities,and integrated SEO-friendly URL sharing. The project was built using React, Tailwind CSS, Axios for API integration, and managed state with Redux",
      },
      {
        text: "Developed a comprehensive ,progressive web App platform, Crowwy, using React, Material-UI, and Redux Toolkit, and its backend where build on php larvel it main aim to focused on enhancing the airline industry's efficiency and collaboration.",
      },
    ],
  },
];
