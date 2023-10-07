import React, { useState } from "react";
import NavBar from "../components/Nav/NavBar";
import Home from "../components/Scenes/Home";
import About from "../components/Scenes/About";
import ProfesionalExperience from "../components/Scenes/ProfesionalExperience";
import Project from "../components/Scenes/Project";
import Contact from "../components/Scenes/Contact";
import SocialMedia from "../components/Contact/SocialMedia";
import Gmail from "../components/Contact/GMail";
import Footer from "../components/Scenes/Footer";

const Landing = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="bg-nd-dark min-h-screen flex flex-col overflow-hidden">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main className="pb-5 px-6 sm:px-12 md:px-16">
        <Home setSelectedPage={setSelectedPage} />
        <About setSelectedPage={setSelectedPage} />
        <ProfesionalExperience setSelectedPage={setSelectedPage} />
        <Project setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />

        <SocialMedia />
        <Gmail />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
