import React from "react";
import data from "../../json/data.json";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = ({ setSelectedPage }) => {
  const tech = data.about[0].tech;
  return (
    <div
      id="about"
      className="pt-[100px] grid place-content-center w-full max-w-[1000px] mx-auto"
      style={{ minHeight: "calc(100vh - 100px)" }}>
      <motion.div
        className="flex flex-row items-center mb-5 sm:mb-6 md:mb-7 lg:mb-8"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}>
        <h2 className="text-nd-primary text-2xl sm:text-3xl md:text-4xl element">
          WHO AM I?
        </h2>
        <hr className="border-t border-nd-primary ml-5 flex-grow max-w-[450px]" />
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("about")}>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-7 mx-5">
          <motion.div
            className="lg:order-2 w-56 sm:w-60 md:w-64 lg:w-72 h-56 sm:h-60 md:h-64 lg:h-72 bg-nd-white rounded-[15px] self-center"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}>
            <img
              src=""
              alt="Naufal Photo's"
              className=" w-56 sm:w-60 md:w-64 lg:w-72 h-56 sm:h-60 md:h-64 lg:h-72 object-cover bg-nd-white rounded-[15px] self-center"
            />
          </motion.div>
          <div className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 flex-grow">
            <motion.p
              className="text-nd-white text-base sm:text-xl"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}>
              Hello! My name is Muhammad Naufal Dzaki Adani. I’m a junior web
              developer based on Surabaya, Indonesia. I enjoy to learn about Web
              Programming since 2019 when I was studying at Vocational High
              School.
            </motion.p>
            <motion.p
              className="text-nd-white text-base sm:text-xl"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches with my skills
              and{" "}
              <Link
                className="text-nd-primary cursor-pointer"
                to={"experience"}
                smooth={true}
                duration={500}
                onClick={() => setSelectedPage("experience")}>
                experience
              </Link>{" "}
              then don't hesitate to{" "}
              <Link
                className="text-nd-primary cursor-pointer"
                to={"contact"}
                smooth={true}
                duration={500}
                onClick={() => setSelectedPage("contact")}>
                contact me.
              </Link>
            </motion.p>
            <div className="text-nd-white text-base sm:text-xl">
              <motion.p
                className="mb-3"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}>
                Here are a few technologies I've been working with recently:
              </motion.p>
              <ul className="grid grid-cols-2 gap-y-2 w-full max-w-[500px] list-inside">
                {tech.map((items, index) => (
                  <motion.li
                    style={{ listStyleImage: "url(./icon/arrowRight.svg)" }}
                    initial="hidden"
                    key={index}
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}>
                    {items}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
