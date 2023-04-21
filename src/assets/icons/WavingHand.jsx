import React from "react";
import "./index.css";

const WavingHand = ({ size, isWaving }) => {
  return (
    // credit : https://icon-icons.com/icon/waving-hand/100830
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={`${isWaving && "wave"}  ${size ? size : "h-6"}`}>
      <path
        fill="#BCB7DB"
        d="M33.46 19.26l-.13 3.26-11.22-11.23a2.59 2.59 0 00-3.44-.29 2.49 2.49 0 00-.19 3.7l-1.59-1.59a2.77 2.77 0 00-3.77-.21 2.67 2.67 0 00-.1 3.87l-.02-.05a2.53 2.53 0 00-3-.46 2.5 2.5 0 00-.53 3.94l3 3a2.19 2.19 0 00-3.24.16 2.28 2.28 0 00.24 3L22 39a9.39 9.39 0 0013.37-.06 14.47 14.47 0 004-10.81L39 16a1.08 1.08 0 00-1.08-1 4.45 4.45 0 00-4.46 4.26z"
        data-name="&lt;Path&gt;"></path>
      <g fill="#BCB7DB" data-name="&lt;Group&gt;">
        <path
          d="M33.33 22.52L22.11 11.29a2.59 2.59 0 00-3.44-.29 2.48 2.48 0 00-.36 3.49 1.8 1.8 0 01.36-.37 2.59 2.59 0 013.44.27l9.66 9.67z"
          data-name="&lt;Path&gt;"></path>
        <path
          d="M39.09 19.12L39 16a1.08 1.08 0 00-1.08-1 4.45 4.45 0 00-4.45 4.29l-.13 3.26.13-.14a4.46 4.46 0 014.45-4.29 1.17 1.17 0 011.17 1z"
          data-name="&lt;Path&gt;"></path>
      </g>
      <path
        fill="none"
        stroke="#6C6889"
        d="M33.46 19.26l-.13 3.26-11.22-11.23a2.59 2.59 0 00-3.44-.29 2.49 2.49 0 00-.19 3.7l-1.59-1.59a2.77 2.77 0 00-3.77-.21 2.67 2.67 0 00-.1 3.87l-.02-.05a2.53 2.53 0 00-3-.46 2.5 2.5 0 00-.53 3.94l3 3a2.19 2.19 0 00-3.24.16 2.28 2.28 0 00.24 3L22 39a9.39 9.39 0 0013.37-.06 14.47 14.47 0 004-10.81L39 16a1.08 1.08 0 00-1.08-1h0a4.45 4.45 0 00-4.46 4.26z"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M12.34 23.18L18.4 29.23"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M13.02 16.78L21.93 25.69"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M18.48 14.72L25.69 21.94"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M33.33 22.52l-3.57 3.57a6 6 0 000 8.49h0"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M24.11 8.76a9.06 9.06 0 014.31 2 9.72 9.72 0 012.7 4"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M24.68 6.09A11.06 11.06 0 0130 8.51a11.84 11.84 0 013.33 4.93"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M4.65 24.24a9 9 0 00.79 4.67 9.65 9.65 0 003.17 3.63"
        data-name="&lt;Path&gt;"></path>
      <path
        fill="none"
        stroke="#6C6889"
        d="M1.92 24.1a11.07 11.07 0 001 5.77 12 12 0 003.91 4.49"
        data-name="&lt;Path&gt;"></path>
    </svg>
  );
};

export default WavingHand;
