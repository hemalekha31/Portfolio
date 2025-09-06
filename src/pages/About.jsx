import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <p data-aos="fade-up" data-aos-delay="100">
          Hi, I’m Hemalekha S — a passionate Frontend Developer and MERN Stack
          enthusiast from Coimbatore. I recently completed my B.Sc. in Computer
          Science (2025) with a strong academic foundation and hands-on
          experience in building responsive, user-friendly web applications.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          Over the past few years, I’ve worked on projects ranging from chatbot
          development to e-commerce platforms. During my internship at Favor, I
          developed the Amanah Chatbot, which improved user engagement by 30%
          and reduced response times by 40%. I also built a full-stack
          e-commerce website with features like cart functionality and checkout
          flow, and created a Meesho homepage clone to sharpen my frontend
          design skills.
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          I love bringing ideas to life using React.js, JavaScript, and
          Bootstrap, while also working with Python and MySQL on the backend. My
          certifications in MERN Stack Development and participation in the
          Frappe AI Workshop have fueled my curiosity to explore modern
          technologies further.
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          Beyond coding, I’m deeply motivated by solving problems, crafting
          clean UI/UX, and continuously learning new tools to stay ahead in web
          development. My goal is to contribute to innovative projects where I
          can merge creativity with technology.
        </p>
      </div>
    </div>
  );
};

export default About;
