import React from "react";

const GitHub = ({ size }) => {
  return (
    <svg
      className={size ? size : "w-6 h-6"}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30">
      <path
        stroke="#938FB1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.25 23.784C5 25.659 5 20.659 2.5 20.034m17.5 7.5v-4.838a4.212 4.212 0 00-1.175-3.263c3.925-.437 8.05-1.924 8.05-8.75A6.8 6.8 0 0025 5.997a6.338 6.338 0 00-.113-4.713S23.413.846 20 3.133a16.725 16.725 0 00-8.75 0C7.838.846 6.362 1.283 6.362 1.283a6.337 6.337 0 00-.112 4.713 6.8 6.8 0 00-1.875 4.725c0 6.775 4.125 8.262 8.05 8.75a4.213 4.213 0 00-1.175 3.225v4.837"></path>
    </svg>
  );
};

export default GitHub;
