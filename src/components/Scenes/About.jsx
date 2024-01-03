import React from "react";
import data from "../../json/data.json";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = ({ setSelectedPage }) => {
  const tech = data.about[0].tech;
  return (
    <div
      id="about"
      className="pt-[100px] lg:pb-20 grid place-content-center w-full max-w-[1000px] mx-auto"
      style={{ minHeight: "calc(100vh - 100px)" }}>
      <motion.div
        className="flex flex-row items-center mb-5 sm:mb-6 md:mb-7 lg:mb-8"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: "all" }}
        transition={{ delay: 0, duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 35 },
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
            className="grid lg:order-2 min-w-[224px] sm:min-w-[240px] md:min-w-[256px] lg:min-w-[288px] min-h-[224px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px] overflow-hidden items-center justify-center bg-nd-white rounded-[15px] self-center lg:self-start"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: "all" }}
            transition={{ delay: 0, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: 40, scale: 0.95 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}>
            <img
              src="./img/avatar/avatar_2.png"
              alt="Naufal Photo's"
              className="min-w-max w-52 sm:w-56 md:w-60 lg:w-64 h-52 sm:h-56 md:h-60 lg:h-[264px] object-cover bg-nd-white self-end justify-self-center"
            />
          </motion.div>
          <div className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 flex-grow">
            <motion.p
              className="text-nd-white text-base sm:text-xl text-justify"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: "all" }}
              transition={{ delay: 0.3, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}>
              I'm an undergraduate student at UPN "Veteran" Jawa Timur. I have
              been immersing myself in the realm of software engineering since
              2019, during my time as a student at SMKN 1 Surabaya. I am a
              dedicated web developer with a particular emphasis on front-end
              development. Presently, I am actively engaged in learning and
              delving deeper into the JavaScript programming language,
              specifically focusing on the MERN Stack.
            </motion.p>
            <motion.p
              className="text-nd-white text-base sm:text-xl text-justify"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: "all" }}
              transition={{ delay: 0.6, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches with my skills
              and{" "}
              <Link
                className="text-nd-primary cursor-pointer underline"
                to={"experience"}
                smooth={true}
                duration={500}
                onClick={() => setSelectedPage("experience")}>
                experience
              </Link>{" "}
              then don't hesitate to{" "}
              <Link
                className="text-nd-primary cursor-pointer underline"
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
                viewport={{ once: true, amount: "all" }}
                transition={{ delay: 0.9, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0 },
                }}>
                Here are a few technologies I've been working with recently:
              </motion.p>
              <motion.ul
                className="grid grid-cols-2 gap-y-2 w-full max-w-[500px] list-inside"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: "all" }}
                transition={{ delayChildren: 1.2, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0 },
                }}>
                {tech.map((items, index) => (
                  <motion.li
                    style={{ listStyleImage: "url(./icon/arrowRight.svg)" }}
                    initial="hidden"
                    key={index}
                    whileInView={"visible"}
                    viewport={{ once: true, amount: "all" }}
                    transition={{ delay: 0.2 * index, ation: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}>
                    {items}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
