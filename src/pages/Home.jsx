import React,{useEffect}from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css";

  
const Home = () => {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    return (
        <div className='cone'>
            <div className='cont'>
                <h1 data-aos="fade-left">Hi! I'm Hemalekha S</h1>
                <h2 data-aos="fade-right">MERN STACK Learner</h2>
            </div>
            <div className='but'>
                <Link to="/contact" data-aos="flip-right">
                    <button >Contact</button>
                </Link>
                <Link to="/projects" data-aos="flip-left">
                    <button>View My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
