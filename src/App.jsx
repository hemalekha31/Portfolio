import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<About/>}/>
        <Route path="/projects"element={<Projects/>}/>
        <Route path="/exper" element={<Experience/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/sh" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
