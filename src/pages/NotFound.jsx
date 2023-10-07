import React from "react";
import NavBar from "../components/Nav/NavBar";
import SocialMedia from "../components/Contact/SocialMedia";
import Gmail from "../components/Contact/GMail";
import Footer from "../components/Scenes/Footer";

import "./index.css";

const NotFound = () => {
  return (
    <div className="bg-nd-dark min-h-screen flex flex-col overflow-hidden">
      <NavBar isNotFoundPage={true} />
      <main className="pb-5 px-6 sm:px-12 md:px-16 flex flex-col custom-h">
        <div className="grid place-content-center h-screen flex-1">
          <p className="text-nd-third tex-xl sm:text-2xl md:text-3xl">
            <span className="text-nd-primary">404</span>{" "}
            <span className="text-nd-code-tag">|</span> Page Not Found
          </p>
        </div>

        <SocialMedia />
        <Gmail />
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
