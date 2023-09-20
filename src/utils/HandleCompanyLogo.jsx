import React from "react";
import GoToImpact from "../assets/Logos/GoToImpact";
import DjavaOptik from "../assets/Logos/DjavaOptik";
import Peduly from "../assets/Logos/Peduly";

// {
//   "id": 2,
//   "company": "Djava Optik",
//   "linkCompany": "https://optikdjava.com/",
//   "position": "Wordpress Developer (FreeLance)",
//   "startDate": "05-16-2023",
//   "endDate": "06-30-2023",
//   "tech": ["wordpress"],
//   "jobDesc": ["Created an online store website using wordpress, showcasing eye glass products and ensuring a user friendly browsing experience", "Optimized website performance by implementing caching and image compression", "Collaborated with a friend to successfully build Djava Optik's online store, integrating payment gateways and order management system"]
// },

const HandleCompanyLogo = (company) => {
  if (company === 1) return <GoToImpact />;
  if (company === 2) return <DjavaOptik />;
  if (company === 3) return <Peduly />;
  return console.log(`Error can't found logo's of ${company}`);
};

export default HandleCompanyLogo;
