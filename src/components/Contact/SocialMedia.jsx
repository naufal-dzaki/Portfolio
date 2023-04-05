import React from "react";
import Instagram from "../../assets/Logos/Instagram";
import GitHub from "../../assets/Logos/GitHub";
import LinkedIn from "../../assets/Logos/LinkedIn";
import { motion } from "framer-motion";
import "./index.css";

const SocialMedia = () => {
  return (
    <div className="w-full md:w-10 md:fixed md:bottom-0 md:left-2 lg:left-4 xl:left-7 md:right-auto md:z-10">
      <motion.ul
        className="flex flex-row md:flex-col items-center justify-center m-0 p-0 gap-5"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <li>
          <a href="http://github.com/naufal-dzaki">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="http://linkedin.com/in/nd-naufaldzaki">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/naufal.dza">
            <Instagram />
          </a>
        </li>
        <li>
          <hr className="hidden md:flex border-l border-nd-secondary flex-grow socialMedia-line" />
        </li>
      </motion.ul>
    </div>
  );
};

export default SocialMedia;
