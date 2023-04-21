import React from "react";
import data from "../../json/data.json";
import GitHub from "../../assets/Logos/GitHub";
import ExternalLink from "../../assets/icons/ExternalLink";
import { motion } from "framer-motion";
import HandleTechIcon from "../../utils/HandleTechIcon";
import "./index.css";

const Project = ({ setSelectedPage }) => {
  const projectData = data.project;

  return (
    <div
      id="project"
      className="pt-[100px] lg:pb-20 flex flex-col w-full max-w-[900px] mx-auto">
      <motion.div
        className="flex flex-row items-center mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}>
        <h2 className="text-nd-primary text-2xl sm:text-3xl md:text-4xl">
          Some Things I've Build
        </h2>
        <hr className="border-t border-nd-primary ml-5 flex-grow max-w-[450px]" />
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("project")}>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full mx-0 sm:mx-5">
          {projectData.map((value, index) => (
            <div
              className="relative h-[220px] sm:h-[280px] md:h-[310px] lg:h-[360px] xl:h-[400px] w-full"
              key={index}>
              <motion.img
                src={value.imgUrl}
                alt={value.title}
                className="img-hover object-cover h-[156px] sm:h-[234px] md:h-[273px] lg:h-[299px] xl:h-[325px] w-[240px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[500px] rounded-[15px] shadow-md"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 * index, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              />
              <motion.div
                className="absolute right-0 bottom-0 z-10 h-[182px] sm:h-[234px] md:h-[273px] lg:h-[299px] xl:h-[325px] w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[500px] bg-nd-code-bg-4/5 backdrop-blur-md rounded-[15px] p-3 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-md"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5 * index, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}>
                <div className="relative flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 w-full h-full">
                  <h1 className="text-nd-white text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {value.title}
                  </h1>
                  <div className="flex gap-x-1 sm:gap-x-2">
                    {value.tech.map((items, index) => (
                      <span key={index}>{HandleTechIcon(items)}</span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base md:text-xl text-nd-secondary mt-1">
                    {value.description}
                  </p>
                  <div className="absolute bottom-0 right-0 flex gap-2 items-center">
                    {value.linkGithub && (
                      <a href={value.linkGithub} target={"_blank"}>
                        <GitHub size={"w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"} />
                      </a>
                    )}
                    {value.linkWebsite && (
                      <a href={value.linkWebsite} target="_blank">
                        <ExternalLink
                          size={"w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
