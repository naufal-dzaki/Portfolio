import React from "react";
import OutlineButton from "../Form/OutlineButton";
import Chat from "../../assets/icons/Chat";
import WavingHand from "../../assets/icons/WavingHand";
import { motion } from "framer-motion";

const Contact = ({ setSelectedPage }) => {
  const handleClickButton = () => {
    window.location.href = "mailto:nd.naufaldzaki@gmail.com";
  };

  return (
    <div
      id="contact"
      className="pt-[100px] pb-20 lg:pt-20 flex flex-col w-full max-w-[800px] mx-auto gap-y-6 sm:gap-y-7 lg:gap-y-8 items-center">
      <motion.div
        className="flex items-center justify-center w-full mx-auto"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0, duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        }}>
        <hr className="flex-grow border-t border-nd-primary max-w-[200px]" />
        <h2 className="text-nd-primary text-2xl sm:text-3xl md:text-4xl mx-5">
          Connect With Me
        </h2>
        <hr className="flex-grow border-t border-nd-primary max-w-[200px]" />
      </motion.div>
      <motion.div
        onViewportEnter={() => setSelectedPage("contact")}
        className="flex flex-col items-center gap-y-6 sm:gap-y-7 lg:gap-y-8">
        <motion.h1
          className="flex items-center gap-4 text-nd-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}>
          Dont be a stranger!{" "}
          <motion.span
            className="flex flex-col items-center justify-center"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}>
            <WavingHand
              size={"h-[30px] sm:h-9 md:h-12 lg:h-[60px]"}
              isWaving={true}
            />
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-nd-secondary text-center mb-8"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}>
          Feel free to contact me. My inbox is always open. Whether you have any
          questions or just want to say hello, I'll try my best to back to you!
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}>
          <OutlineButton OnClickEvent={handleClickButton}>
            Start a Conversation <Chat />
          </OutlineButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
