import React, { useState, useEffect, useRef } from "react";
import Headroom from "react-headroom";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./index.css";

const NavBar = ({ selectedPage, setSelectedPage, isNotFoundPage = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const menus = ["home", "about", "experience", "project", "contact"];

  const handleClickMenu = (menu) => {
    setIsOpen(false);
    setSelectedPage(menu);
  };

  // on click outside
  useEffect(() => {
    let handler = (e) => {
      if (!navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Headroom
      style={{
        WebkitTransition: "all .5s ease-in-out",
        MozTransition: "all .5s ease-in-out",
        OTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
      wrapperStyle={{ height: "96px" }}>
      <header
        className={
          isOpen &&
          "absolute z-30 backdrop-blur-sm bg-nd-dark-1/2 md:bg-transparent md:backdrop-blur-0 transition ease-in duration-200 w-full h-screen md:h-auto"
        }>
        <nav
          className={`flex px-6 sm:px-12 h-24 items-center w-full ${
            !isOpen && "bg-nd-dark-1/2"
          } z-20 backdrop-blur-lg`}>
          <div className="flex flex-wrap items-center justify-between w-full">
            <div className="text-nd-primary text-4xl">nd,</div>
            <div
              ref={navRef}
              className={`${
                isOpen &&
                "bg-nd-code-bg-4/5 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 rounded-2xl p-2 md:p-0 fixed right-[16px] sm:right-10 md:right-12 top-[16px] md:top-[22px] z-40 flex flex-col shadow-sm md:shadow-none"
              } transition ease-in duration-100`}>
              <span className="md:hidden self-end hover:bg-nd-code-bg-4/5">
                <Hamburger
                  easing="ease-in"
                  color="#52459F"
                  rounded
                  toggled={isOpen}
                  toggle={setIsOpen}
                />
              </span>
              <div
                className={`${
                  isOpen ? "flex px-12 md:px-0 pb-6 md:pb-0" : "hidden"
                } md:flex justify-between w-full`}>
                <ul className="flex flex-col text-center md:text-left md:flex-row space-x-0 md:space-x-8 text-lg text-nd-white">
                  {isNotFoundPage && (
                    <motion.li
                      className={`py-3 hover:text-nd-primary cursor-pointer w-full capitalize`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}>
                      <a href="/">Home</a>
                    </motion.li>
                  )}
                  {!isNotFoundPage &&
                    menus.map((menu, index) => (
                      <motion.li
                        key={index}
                        className={`py-3 hover:text-nd-primary cursor-pointer w-full capitalize ${
                          selectedPage === menu && "text-nd-primary"
                        }`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3 * index, duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}>
                        <Link
                          to={menu}
                          smooth={true}
                          duration={500}
                          onClick={() => handleClickMenu(menu)}>
                          {menu}
                        </Link>
                      </motion.li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Headroom>
  );
};

export default NavBar;
