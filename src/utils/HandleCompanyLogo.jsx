import React from "react";
import GoToImpact from "../assets/Logos/GoToImpact";
import DjavaOptik from "../assets/Logos/DjavaOptik";
import Peduly from "../assets/Logos/Peduly";

const HandleCompanyLogo = (company) => {
  if (company === "Go To Impact Foundation") return <GoToImpact />;
  if (company === "Djava Optik") return <DjavaOptik />;
  if (company === "Peduly") return <Peduly />;
  return console.error(`Error can't found logo's of ${company}`);
};

export default HandleCompanyLogo;
