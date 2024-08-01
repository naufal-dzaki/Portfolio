import React from "react";
import GoToImpact from "../assets/Logos/GoToImpact";
import DjavaOptik from "../assets/Logos/DjavaOptik";
import Peduly from "../assets/Logos/Peduly";
import GMP from "../assets/Logos/GMP";

const HandleCompanyLogo = (company) => {
  if (company === "Go To Impact Foundation") return <GoToImpact />;
  if (company === "Djava Optik") return <DjavaOptik />;
  if (company === "Peduly") return <Peduly />;
  if (company === "PT. Graha Mutu Persada") return <GMP />;
  return console.error(`Error can't found logo's of ${company}`);
};

export default HandleCompanyLogo;
