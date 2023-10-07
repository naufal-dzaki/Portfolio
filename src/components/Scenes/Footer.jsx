import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col w-full max-w-[800px] mx-auto items-center mb-4 sm:mb-5 md:mb-6"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}>
      <hr className="flex-grow border-t border-nd-white-1/10 w-[60%] sm:w-[50%] md:w-[40%] mb-3 sm:mb-4 md:mb-6" />
      <p className="text-sm md:text-base text-nd-third text-center max-w-[350px] sm:max-w-none">
        Crafted by me, inspired by the exceptional web portfolio design of{" "}
        <a href="https://brittanychiang.com/">Brittany Chiang.</a>
      </p>
    </motion.footer>
  );
};

export default Footer;
