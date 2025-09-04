import React, { useEffect } from 'react'
import "./Experience.css"
import AOS from 'aos';
import "aos/dist/aos.css"

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, []);
    return (
        <div className='conerr'>
            <h5 data-aos="fade-left">Frontend Developer Intern – Amanah Chempharm</h5>
            <h3 data-aos="fade-right">(Chatbot Development, Jun 2025)</h3>
            <ul data-aos="flip-up">
                <li>Built a customer support chatbot using React.js, JavaScript, and DOM APIs.</li>
                <li>
                    Improved user engagement by 30% and reduced response time by 40%.</li>
                <li>
                    Collaborated with the dev team to integrate chatbot features into the company’s support system.</li>
            </ul>
        </div>
    )
}

export default Experience