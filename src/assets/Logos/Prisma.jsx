import * as React from "react";

const Prisma = ({size}) => (
  <svg
    className={size ? size : "h-10"}
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="32"
    fill="none"
    viewBox="0 0 27 32"
  >
    <g clipPath="url(#clip0_901_217)">
      <path
        fill="#BCB7DB"
        d="M26.33 24.276 15.406 1.195A1.75 1.75 0 0 0 13.913.2a1.74 1.74 0 0 0-1.596.824L.469 20.118a1.78 1.78 0 0 0 .02 1.917L6.28 30.96a1.871 1.871 0 0 0 2.092.766l16.81-4.948a1.85 1.85 0 0 0 1.158-.994 1.79 1.79 0 0 0-.01-1.509zm-2.446.99L9.62 29.463c-.435.128-.852-.247-.762-.684L13.953 4.5c.096-.454.726-.525.926-.105l9.434 19.933a.674.674 0 0 1-.43.938z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_901_217">
        <path fill="#fff" d="M0 0h27v32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default Prisma;
