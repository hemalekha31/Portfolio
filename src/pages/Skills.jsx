import React, { useEffect } from "react";
import "./Skills.css";
import AOS from 'aos'
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


return (
  <div className="conts">
    <div className="container my-5">
      <h1 className="text-center mb-4 text-white" style={{ fontFamily: "Segoe UI" }} data-aos="fade-right">My Skills</h1>
      <div className="skillcontainer">
        <div className="mb-4">
          <div className="d-flex justify-content-between text-white">
            <span data-aos="fade-left">HTML5</span>
            <span data-aos="fade-right">90%</span>
          </div>
          <div className="progress"  style={{ height: "15px" }}>
            <div className="progress-bar bg-success" role="progressbar" data-aos="fade-right" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>


        <div className="mb-4">
          <div className="d-flex justify-content-between text-white">
            <span data-aos="fade-right">CSS3</span>
            <span data-aos="fade-left">75%</span>
          </div>
          <div className="progress" style={{ height: "15px" }}>
            <div className="progress-bar bg-success" data-aos="fade-right" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>


        <div className="mb-4">
          <div className="d-flex justify-content-between text-white">
            <span data-aos="fade-left">JAVASCRIPT</span>
            <span data-aos="fade-right">50%</span>
          </div>
          <div className="progress" style={{ height: "15px" }}>
            <div className="progress-bar bg-success"  data-aos="fade-right"role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>




        <div className="mb-4">
          <div className="d-flex justify-content-between text-white">
            <span data-aos="fade-right">MYSQL</span>
            <span data-aos="fade-left">70%</span>
          </div>
          <div className="progress" style={{ height: "15px" }}>
            <div className="progress-bar bg-success"  data-aos="fade-right"role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>



      </div>
    </div>
  </div>

);

}
export default Skills;
