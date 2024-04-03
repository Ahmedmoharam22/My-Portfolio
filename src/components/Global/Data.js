import {
  FaBootstrap,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
// import DeepLearningImg from "../../assest/images/Deep_learning2-removebg-preview.png";
// import NeuralNetwork from "../../assest/images/Neural_Networks-removebg-preview.png";
// import DataAugmentation from "../../assest/images/Data_Augmentation-removebg-preview.png";
// import TensorFlow from "../../assest/images/TensorFlow-removebg-preview.png";
// import Kaggle from "../../assest/images/Kaggle-removebg-preview.png";
// import RLanguage from "../../assest/images/R_programming_language-removebg-preview.png";
// import SQL from "../../assest/images/SQL-removebg-preview.png";
// import PlSQL from "../../assest/images/pl-sql-removebg-preview.png";
// import bigData from "../../assest/images/bigData-removebg-preview.png";
// import dataprep from "../../assest/images/dataprep-logo.png";
// import AdamOptimizer from "../../assest/images/Adam_Optimizer-removebg-preview.png";
// import DataVisualization from "../../assest/images/Data_visualization-removebg-preview.png";
// import dashboards from "../../assest/images/dashboards.png";
// import DensNet from "../../assest/images/Densenet-removebg-preview.png";
// import JOGL from "../../assest/images/JOGL .png";
import cpp from "../../assest/images/c++-removebg-preview.png";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMui, SiRedux, SiTailwindcss, SiVite } from "react-icons/si";
import project1 from "../../assest/images/movies.png";
import project2 from "../../assest/images/food lover.png";
import project3 from "../../assest/images/travel.png";
import project4 from "../../assest/images/shopping.png";
import project5 from "../../assest/images/islamic.png";
import project7 from "../../assest/images/shoppify.png";
// import { RiMailOpenFill } from "react-icons/ri";
import navIcon2 from "../../assest/images/nav-icon1.svg"; //linked
import navIcon3 from "../../assest/images/phone-call-svgrepo-com.svg";
import navIcon1 from "../../assest/images/Github.svg";
import navIcon4 from "../../assest/images/mail-open-svgrepo-com.svg";
import navIcon6 from "../../assest/images/telegram-svgrepo-com (2).svg";
import navIcon5 from "../../assest/images/whatsapp-ffffff.svg";

export const NavbarData = [
  {
    id: 301,
    title: "GitHub",
    icon: <img src={navIcon1} alt="GitHub" />,
    link: "https://github.com/Ahmedmoharam22",
  },
  {
    id: 302,
    title: "LinkedIn",
    icon: <img src={navIcon2} alt="LinkedIn" />,
    link: "https://www.linkedin.com/in/ahmed-moharam-2b70a928b/",
  },
  {
    id: 303,
    title: "Email",
    icon: (
      <img
        src={navIcon4}
        alt="Email"
        style={{ width: "40px", height: "20px" }}
      />
    ),
    link: "mailto:ahmed.moharam.work@gmail.com",
  },
  {
    id: 304,
    title: "Call",
    icon: (
      <img
        src={navIcon3}
        alt="Call"
        style={{ width: "40px", height: "20px" }}
      />
    ),
    link: "tel:+201092635055",
  },

  {
    id: 305,
    title: "Whatsapp",
    icon: (
      <img
        src={navIcon5}
        alt="Whatsapp"
        style={{ width: "40px", height: "20px" }}
      />
    ),
    link: "https://wa.me/+201092635055",
  },
  {
    id: 306,
    title: "Telegram",
    icon: (
      <img
        src={navIcon6}
        alt="Telegram"
        style={{ width: "40px", height: "20px" }}
      />
    ),
    link: "https://t.me/ahmed2292002",
  },
];

export const AllSkillsData = [
  { id: 401, name: "Web Development", percent: 95, handleSubmit: "WebSkills" },
  // {
  //   id: 402,
  //   name: "Data Science",
  //   percent: 80,
  //   handleSubmit: "DataScienceSkills",
  // },
  { id: 403, name: "Soft Skills", percent: 60, handleSubmit: "SoftSkills" },
  // {
  //   id: 404,
  //   name: "Machine Learning",
  //   percent: 90,
  //   handleSubmit: "MachineSkills",
  // },
  { id: 405, name: "Anthor Skills", percent: 70, handleSubmit: "AnthorSkills" },
];

export const webSkills = [
  {
    id: 411,
    title: "HTML",
    icon: <FaHtml5 size={50} />,
  },
  {
    id: 412,
    title: "CSS",
    icon: <FaCss3Alt size={50} />,
  },
  {
    id: 413,
    title: "JavaScript",
    icon: <TbBrandJavascript size={50} />,
  },
  {
    id: 414,
    title: "React",
    icon: <FaReact size={50} />,
  },
  {
    id: 415,
    title: "Bootstrap",
    icon: <FaBootstrap size={50} />,
  },
  {
    id: 416,
    title: "Material UI",
    icon: <SiMui size={50} />,
  },
  {
    id: 417,
    title: "Redux",
    icon: <SiRedux size={50} />,
  },
  {
    id: 418,
    title: "Tailwind",
    icon: <SiTailwindcss size={50} />,
  },
  {
    id: 419,
    title: "Vite",
    icon: <SiVite size={50} />,
  },
];

// export const MachineLearningData = [
//   {
//     id: 421,
//     title: "Deep Learning",
//     icon: (
//       <img
//         src={DeepLearningImg}
//         alt="Deep Learning"
//         style={{ width: "5rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 422,
//     title: "Neural Network",
//     icon: (
//       <img
//         src={NeuralNetwork}
//         alt="Neural Network"
//         style={{ width: "3rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 423,
//     title: "Data Augmentation",
//     icon: (
//       <img
//         src={DataAugmentation}
//         alt="Data Augmentation"
//         style={{ width: "8rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 424,
//     title: "TensorFlow",
//     icon: (
//       <img
//         src={TensorFlow}
//         alt="TensorFlow"
//         style={{ width: "3rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 425,
//     title: "Adam Optimizer",
//     icon: (
//       <img
//         src={AdamOptimizer}
//         alt="Adam Optimizer"
//         style={{ width: "3rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 426,
//     title: "Kaggle",
//     icon: (
//       <img
//         src={Kaggle}
//         alt="Kaggle"
//         style={{ width: "3rem", height: "3rem" }}
//       />
//     ),
//   },
// ];

// export const DataScienceData = [
//   {
//     id: 431,
//     title: "R programming language",
//     icon: (
//       <img
//         src={RLanguage}
//         alt="R programming language"
//         style={{ width: "3rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 432,
//     title: "SQL",
//     icon: <img src={SQL} alt="SQL" style={{ width: "4rem", height: "4rem" }} />,
//   },
//   {
//     id: 433,
//     title: "Pl/SQL",
//     icon: (
//       <img src={PlSQL} alt="Pl/SQL" style={{ width: "4rem", height: "4rem" }} />
//     ),
//   },
//   {
//     id: 434,
//     title: "Big Data",
//     icon: (
//       <img
//         src={bigData}
//         alt="Big Data"
//         style={{ width: "4rem", height: "4rem" }}
//       />
//     ),
//   },
//   {
//     id: 435,
//     title: "Data preparation",
//     icon: (
//       <img
//         src={dataprep}
//         alt="Data preparation"
//         style={{ width: "8rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 436,
//     title: "Data visualization",
//     icon: (
//       <img
//         src={DataVisualization}
//         alt="Data visualization"
//         style={{ width: "4rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 437,
//     title: "dashboards",
//     icon: (
//       <img
//         src={dashboards}
//         alt="dashboards"
//         style={{ width: "3rem", height: "3rem" }}
//       />
//     ),
//   },
//   {
//     id: 438,
//     title: "DensNet",
//     icon: (
//       <img
//         src={DensNet}
//         alt="DensNet"
//         style={{ width: "10rem", height: "3rem" }}
//       />
//     ),
//   },
// ];

// export const GameDevelopmentSkills = [
//   {
//     id: 441,
//     title: "JOGL",
//     icon: (
//       <img src={JOGL} alt="JOGL" style={{ width: "5rem", height: "5rem" }} />
//     ),
//     color: "#0000",
//   },
// ];
export const AnthorSkillsData = [
  {
    id: 451,
    title: "Java,OOP, Algorithms",
    icon: <FaJava size={40} />,
    color: "#0000",
  },
  {
    id: 452,
    title: "Python",
    icon: <FaPython size={87} />,
    color: "#0000",
  },
  {
    id: 453,
    title: "C++",
    icon: (
      <img
        src={cpp}
        alt="C++"
        style={{ width: "5rem", height: "5rem", marginTop: "13px" }}
      />
    ),
    color: "#0000",
  },
  {
    id: 454,
    title: "Github",
    icon: <FaGithub size={87} />,
  },
  {
    id: 454,
    title: "Git",
    icon: <FaGit size={87} />,
  },
];

export const ProjectsData = [
  {
    id: 501,
    title: "Movies App",
    img: project1,
    linkGithub: "https://github.com/Ahmedmoharam22/Movies_App",
    linkDemo: "https://ahmedmoharam22.github.io/Movies_App/",
    Language: ["HTML5", "CSS3"],
    description: "website created using HTML and CSS.",
  },
  {
    id: 502,
    title: "Resturant | Food Lover Website",
    img: project2,
    linkGithub: "https://github.com/Ahmedmoharam22/Food_Lover",
    linkDemo: "https://ahmedmoharam22.github.io/Food_Lover/",
    Language: ["HTML5", "CSS3"],
    description: "Dynamic website useing HTML5 and CSS3 .",
  },
  {
    id: 503,
    title: "Tourism Company Website",
    img: project3,
    linkGithub: "https://github.com/Ahmedmoharam22/Task3_bootstrap",
    linkDemo: "https://ahmedmoharam22.github.io/Task3_bootstrap/",
    Language: ["HTML5", "CSS3", "Bootstrap"],
    description: "A responsive website developed using Bootstrap,",
  },
  {
    id: 504,
    title: "Shopping Cart Website",
    img: project4,
    linkGithub: "https://github.com/Ahmedmoharam22/shopping-cart-js",
    linkDemo: "https://ahmedmoharam22.github.io/shopping-cart-js/",
    Language: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    description:
      "Shop website with JavaScript shopping cart, favorite list, register and sign in with validate",
  },
  {
    id: 505,
    title: "Islamic Website",
    img: project5,
    linkGithub: "https://github.com/Ahmedmoharam22/Islamic_project",
    linkDemo: "https://ahmedmoharam22.github.io/Islamic_project/",
    Language: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Shop website with JavaScript shopping cart, favorite list, register and sign in with validate",
  },
  // {
  //     id: 505,
  //     title: 'MY Portfolio',
  //     img: project5,
  //     linkGithub: 'https://my-portfolio-react-js-ruby.vercel.app/',
  //     linkDemo: 'https://my-portfolio-react-js-ruby.vercel.app/',
  //     Language: ['HTML5', 'CSS3','Bootstrap','JavaScript','React'],
  //     description: 'Portfolio For Me'
  // },
  // {
  //   id: 506,
  //   title: "Education academy platform",
  //   img: project6,
  //   linkGithub: "https://github.com/Esraa-Esmat/Training-Team-Front4-Project1",
  //   linkDemo: "https://training-team-front4-project1.vercel.app/",
  //   Language: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"],
  //   description:
  //     "Multi-page platform with three layouts: student, instructor, and admin.",
  // },
  {
    id: 506,
    title: "E-Commerce ShoppiFy",
    img: project7,
    linkGithub: "https://github.com/Ahmedmoharam22/ShppiFy",
    linkDemo: "https://shppify.vercel.app/",
    Language: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"],
    description:
      "A site to buy anything online easily with all possible payment methods",
  },
];
