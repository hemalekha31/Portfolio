import React, { useEffect } from 'react';
import './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import home from '../assets/Home.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import ethnic from '../assets/ethnic.png';
import west from "../assets/western.png";
import mens from "../assets/men.png";
import kid from "../assets/kid.png";
import cal from "../assets/calhome.png";
import calc from "../assets/calsum.png";
import clr from "../assets/calresult.png";
import inr from "../assets/intern2.png";
import inrt from "../assets/inter1.png";
import cala from "../assets/cala.png";
import cala1 from "../assets/cala2.png";
import cala3 from "../assets/cala3.png";
import AOS from 'aos';
import "aos/dist/aos.css";
const projects = [
  {
    title: "Meesho Clone (Frontend Project)",
    description: "A responsive clone of the Meesho homepage built using HTML5 , CSS3 and Bootstrap5.",
    features: [
      "Matched the layout to look like the original site.",

      "Built the category grid, product sections, and banners.",

      "Made it responsive with Flexbox and Grid.",

      "Kept the styling accurate and code reusable."
    ],
    images: [home, home2, home3, ethnic, west, mens, kid],
    link: "https://hemalekha31.github.io/meesho/",
    aos: "flip-right"
  },
  {
    title: "Calculator Web App",
    description: "Calculator web app using HTML5,CSS3,JAVASCRIPT .",
    features: [
      "A clean and responsive calculator built with HTML, CSS, and JavaScript, showcasing my skills in UI design, DOM manipulation, and interactive web development."

    ],
    images: [cal, calc, clr],
    link: "https://hemalekha31.github.io/calculator/",
    aos: "flip-left"

  },
  {
    title: "Static Bootstrap5 web page",
    description: "Mock interview task",
    features: [
      "I used Bootstrap to make the project responsive and speed up the design process with its grid system and ready-made components."
    ],
    images: [inrt, inr, kid],
    link: "https://hemalekha31.github.io/interview_bootstrap/",
    aos: "flip-left"
  },
  {
    title: "Calander",
    description: "A simple and interactive calendar built with HTML, CSS, and JavaScript. It shows dates clearly and is easy to navigate.",
    features: [
      "Displays days, weeks, and months in a clean layout.",

      "Highlights the current date.",

      "Lets you move between months easily.",

      "Responsive design, works on different screen sizes."
    ],
    images: [cala, cala1, cala3],
    link: "https://hemalekha31.github.io/calander/",
    aos: "flip-right"

  }
];

const ProjectCard = ({ project, index }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const carouselId = `carousel-${index}`;
  return (
    <div className="card h-100 shadow-sm" data-aos={project.aos} >
      {/* Carousel */}
      <div
        id={carouselId}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {project.images.map((img, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={img} className="d-block w-100" alt={`${project.title} screenshot ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <ul className='featur'>
          {project.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <div className="mt-auto">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="coner">
      <div data-aos="fade-right" className='cih'>
        <a href="https://github.com/hemalekha31" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fa-brands fa-github"></i><span> Github</span>
        </a>
      </div>
      <div className='cong'>
        <br /><br />
        <a href="https://github.com/hemalekha31" target="_blank" rel="noopener noreferrer">
          <button data-aos="fade-right">Explore ---</button>
        </a>
      </div>

      {/* Cards Grid */}
      <div className="container">
        <div className="row">
          {projects.map((proj, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <ProjectCard project={proj} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
