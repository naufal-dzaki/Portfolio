import * as React from "react";

const Shadcn = ({size}) => (
  <svg
    className={size ? size : "h-10"}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      fill="#BCB7DB"
      d="M25.347 15.4 15.4 25.347a1.545 1.545 0 0 0 0 2.2 1.547 1.547 0 0 0 2.187 0l9.946-9.947a1.545 1.545 0 0 0 0-2.2 1.545 1.545 0 0 0-2.2 0zm.213-10.947a1.545 1.545 0 0 0-2.2 0L4.453 23.36a1.545 1.545 0 0 0 0 2.2 1.547 1.547 0 0 0 2.187 0L25.547 6.653a1.545 1.545 0 0 0 0-2.2z"
    ></path>
  </svg>
);

export default Shadcn;
