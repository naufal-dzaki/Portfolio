import Tooltip from "../components/Tooltip";
import MongodbLogo from "../assets/Logos/MongodbLogo";
import ExpressLogo from "../assets/Logos/ExpressLogo";
import ReactLogo from "../assets/Logos/ReactLogo";
import NodeLogo from "../assets/Logos/NodeLogo";
import Tailwind from "../assets/Logos/Tailwind";
import Bootstrap from "../assets/Logos/Bootstrap";
import SCSS from "../assets/Logos/SCSS";
import WordPress from "../assets/Logos/WordPress";
import Laravel from "../assets/Logos/Laravel";
import Jquery from "../assets/Logos/Jquery";
import Mysql from "../assets/Logos/Mysql";

const HandleTechIcon = (tech) => {
  if (tech === "React JS") return <Tooltip text={tech}><ReactLogo size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "Mongo DB") return <Tooltip text={tech}><MongodbLogo size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "Express JS") return <Tooltip text={tech}><ExpressLogo size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "Node JS") return <Tooltip text={tech}><NodeLogo size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "Tailwind CSS") return <Tooltip text={tech}><Tailwind size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "Bootstrap") return <Tooltip text={tech}><Bootstrap size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "SCSS") return <Tooltip text={tech}><SCSS size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "wordpress") return <Tooltip text={tech}><WordPress size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "Laravel") return <Tooltip text={tech}><Laravel size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "JQuery") return <Tooltip text={tech}><Jquery size={"h-5 md:h-6"} /></Tooltip>;
  else if (tech === "MySQL") return <Tooltip text={tech}><Mysql size={"h-5 md:h-6"} /></Tooltip>;
  else return console.log(`error, ${tech} icon not found`);
};

export default HandleTechIcon;
