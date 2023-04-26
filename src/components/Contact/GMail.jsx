import React from "react";
import { motion } from "framer-motion";

const Gmail = () => {
  return (
    <div className="w-10 fixed bottom-0 md:right-2 lg:right-4 xl:right-7 left-auto z-10 hidden md:flex">
      <motion.div className="flex flex-col items-center gap-5">
        <motion.a
          href="mailto:nd.naufaldzaki@gmail.com"
          className="text-nd-secondary text-xl rotate-180"
          style={{ writingMode: "vertical-rl" }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}>
          nd.naufaldzaki@gmail.com
        </motion.a>
        <motion.hr
          className="border-l border-nd-secondary"
          style={{ height: "calc(60vh - 240.19px)" }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Gmail;
