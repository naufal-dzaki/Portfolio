import * as React from "react";

const Prostudio = ({size}) => (
  <svg
    className={size ? size : "h-10"}
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
  >
    <rect width="40" height="40" fill="#fff" rx="20"></rect>
    <path
      fill="#000"
      fillRule="evenodd"
      stroke="#000"
      strokeMiterlimit="22.93"
      strokeWidth="0.57"
      d="M19.999 8c2.773-.004 5.46.956 7.603 2.717l-10.505 6.065V8.356c.95-.237 1.924-.357 2.902-.356Zm8.648 3.68A11.96 11.96 0 0 1 32 20q0 .874-.125 1.737L21.55 15.776l7.095-4.102zm2.94 11.454a12.03 12.03 0 0 1-6.817 7.883V19.196zm-8.172 8.375a12.03 12.03 0 0 1-10.577-1.883l10.577-6.104zm-11.679-2.807A11.97 11.97 0 0 1 8 20q0-.874.127-1.74l10.646 6.377-7.031 4.065zm-3.32-11.846a12.03 12.03 0 0 1 7.324-8.077l-.086 12.411-7.226-4.334z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Prostudio;
