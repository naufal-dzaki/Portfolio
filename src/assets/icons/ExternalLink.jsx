import React from "react";

const ExternalLink = ({ size }) => {
  return (
    <svg
      className={size ? size : "w-6 h-6"}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25">
      <path
        stroke="#938FB1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.75 13.542v6.25a2.083 2.083 0 01-2.083 2.083H5.208a2.083 2.083 0 01-2.083-2.083V8.333A2.083 2.083 0 015.208 6.25h6.25M15.625 3.125h6.25v6.25M10.416 14.583L21.875 3.125"></path>
    </svg>
  );
};

export default ExternalLink;
