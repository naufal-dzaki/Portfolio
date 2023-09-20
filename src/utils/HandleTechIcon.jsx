import MongodbLogo from "../assets/Logos/MongodbLogo";
import ExpressLogo from "../assets/Logos/ExpressLogo";
import ReactLogo from "../assets/Logos/ReactLogo";
import NodeLogo from "../assets/Logos/NodeLogo";
import Tailwind from "../assets/Logos/Tailwind";
import Bootstrap from "../assets/Logos/Bootstrap";
import SCSS from "../assets/Logos/SCSS";
import WordPress from "../assets/Logos/WordPress";
import Laravel from "../assets/Logos/Laravel";

const HandleTechIcon = (tech) => {
  if (tech === "React JS") return <ReactLogo size={"h-5 md:h-6"} />;
  else if (tech === "Mongo DB") return <MongodbLogo size={"h-5 md:h-6"} />;
  else if (tech === "Express JS") return <ExpressLogo size={"h-5 md:h-6"} />;
  else if (tech === "Node JS") return <NodeLogo size={"h-5 md:h-6"} />;
  else if (tech === "Tailwind CSS") return <Tailwind size={"h-5 md:h-6"} />;
  else if (tech === "Bootstrap") return <Bootstrap size={"h-5 md:h-6"} />;
  else if (tech === "SCSS") return <SCSS size={"h-5 md:h-6"} />;
  else if (tech === "wordpress") return <WordPress size={"h-5 md:h-6"} />;
  else if (tech === "Laravel") return <Laravel size={"h-5 md:h-6"} />;
  else return console.log(`error, ${tech} icon not found`);
};

export default HandleTechIcon;
