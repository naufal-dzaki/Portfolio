import React from "react";

const GoToImpact = ({ size }) => {
  return (
    <svg
      className={size ? size : "h-10"}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40">
      <rect width="40" height="40" fill="#fff" rx="20"></rect>
      <path
        fill="#0C3"
        d="M19.996 8a11.996 11.996 0 100 23.992 11.996 11.996 0 000-23.992zm7.428 11.996a6.433 6.433 0 01-6.653 6.441h-1.55a6.446 6.446 0 01-4.696-11.073 6.442 6.442 0 014.695-1.809h1.548a6.425 6.425 0 016.656 6.44z"></path>
      <path fill="#0C3" d="M32 8a11.998 11.998 0 100 23.997V8z"></path>
      <path
        fill="#002E6D"
        d="M25.988 9.614a12.091 12.091 0 00-4.18 4.014 6.42 6.42 0 010 12.732 12.073 12.073 0 004.18 4.013 11.982 11.982 0 000-20.759z"></path>
    </svg>
  );
};

export default GoToImpact;
