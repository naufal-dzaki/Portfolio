import React from "react";
import ReactTyped from "react-typed";
import CodePreview from "../CodePreview";
import OutlineButton from "../Form/OutlineButton";
import { motion } from "framer-motion";

const Home = ({ setSelectedPage }) => {
  const handleClickButton = () => {
    window.open(
      "https://drive.google.com/file/d/10dWXGOgNSgRxoRhqzTKmsT1NgfqP9u-i/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div id="home" className="pt-0 sm:pt-12 md:pt-14 lg:pt-0">
      <motion.div
        onViewportEnter={() => setSelectedPage("home")}
        className="grid grid-cols-1 lg:grid-cols-10 lg:gap-8 pb-0 sm:pb-11 md:pb-12 lg:py-0 items-center md:px-8"
        style={{ minHeight: "calc(100vh - 100px)" }}>
        <div className="md:col-span-6 flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 pb-0 sm:pb-12 md:pb-14 lg:pb-0">
          <motion.h3
            className="text-nd-white text-base sm:text-lg md:text-xl ml-1 h-7"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}>
            <ReactTyped
              strings={[
                "Halo! Nama saya",
                "Hi! My name is",
                "Bonjour! mon nom est",
                "¡Hola! mi nombre es",
              ]}
              typeSpeed={80}
              backSpeed={60}
              backDelay={2000}
              loop
              cursorChar=""
            />
          </motion.h3>
          <motion.h1
            className="text-nd-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}>
            Muhammad Naufal Dzaki.
          </motion.h1>
          <motion.h2
            className="text-nd-white text-lg sm:text-xl md:text-2xl lg:text-3xl"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}>
            I'm Junior Web Developer based On Surabaya.
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}>
            <OutlineButton OnClickEvent={handleClickButton}>
              Resume
            </OutlineButton>
          </motion.div>
        </div>
        <motion.div
          className="md:col-span-4 pt-6 sm:pt-8 md:pt-10 lg:pt-0"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 40, scale: 0.95 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}>
          <CodePreview />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
