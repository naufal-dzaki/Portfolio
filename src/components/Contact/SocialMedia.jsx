import React from "react";
import Instagram from "../../assets/Logos/Instagram";
import GitHub from "../../assets/Logos/GitHub";
import LinkedIn from "../../assets/Logos/LinkedIn";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className="w-full md:w-10 md:fixed md:bottom-0 md:left-2 lg:left-4 xl:left-7 md:right-auto md:z-10">
      <motion.ul className="flex flex-row md:flex-col items-center justify-center m-0 p-0 gap-5">
        <motion.li
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}>
          <a href="http://github.com/naufal-dzaki" target="_blank">
            <GitHub />
          </a>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}>
          <a href="http://linkedin.com/in/naufal-dzaki" target="_blank">
            <LinkedIn />
          </a>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}>
          <a href="http://instagram.com/naufal.dza" target="_blank">
            <Instagram />
          </a>
        </motion.li>
        <motion.li
          className="hidden min-[768px]:block"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}>
          <hr className="hidden md:flex border-l border-nd-secondary flex-grow h-0 min-[768px]:h-[calc(60vh-132px)]" />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default SocialMedia;
