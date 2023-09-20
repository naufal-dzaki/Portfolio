import React from "react";

const NodeLogo = ({ size }) => {
  return (
    <svg
      className={size ? size : "h-6"}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="28"
      fill="none"
      viewBox="0 0 24 28">
      <mask
        id="mask0_705_287"
        style={{ maskType: "luminance" }}
        width="24"
        height="28"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M11.354.173L.647 6.353A1.292 1.292 0 000 7.473V19.84c0 .462.246.889.647 1.12l10.708 6.185c.4.23.894.23 1.293 0l10.707-6.185c.398-.231.645-.658.645-1.12V7.473c0-.462-.247-.889-.648-1.12L12.647.173a1.302 1.302 0 00-1.296 0"></path>
      </mask>
      <g mask="url(#mask0_705_287)">
        <path
          fill="url(#paint0_linear_705_287)"
          d="M34.82 5.303L4.65-9.485l-15.47 31.558 30.17 14.79 15.47-31.56z"></path>
      </g>
      <mask
        id="mask1_705_287"
        style={{ maskType: "luminance" }}
        width="24"
        height="28"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M.265 20.626c.103.133.23.248.381.335l9.185 5.305 1.53.88a1.297 1.297 0 001 .122L23.653 6.59a1.279 1.279 0 00-.3-.239l-7.011-4.049L12.636.171A1.35 1.35 0 0012.3.036L.265 20.626z"></path>
      </mask>
      <g mask="url(#mask1_705_287)">
        <path
          fill="url(#paint1_linear_705_287)"
          d="M-12.78 9.677L8.524 38.511l28.174-20.816-21.305-28.833L-12.78 9.677z"></path>
      </g>
      <mask
        id="mask2_705_287"
        style={{ maskType: "luminance" }}
        width="24"
        height="28"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M11.872.007c-.18.018-.356.074-.518.166L.678 6.335l11.513 20.97c.16-.024.317-.077.46-.16l10.707-6.184c.33-.192.556-.516.625-.883L12.247.027a1.344 1.344 0 00-.369-.02"></path>
      </mask>
      <g mask="url(#mask2_705_287)">
        <path
          fill="url(#paint2_linear_705_287)"
          d="M.678.002v27.303h23.3V.002H.679z"></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_705_287"
          x1="19.726"
          x2="4.257"
          y1="-2.114"
          y2="29.442"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.3" stopColor="#626080"></stop>
          <stop offset="0.5" stopColor="#7D799E"></stop>
          <stop offset="0.8" stopColor="#7A769B"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_705_287"
          x1="-2"
          x2="26.175"
          y1="24.259"
          y2="3.441"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.57" stopColor="#6F6C8C"></stop>
          <stop offset="0.72" stopColor="#7E7B9E"></stop>
          <stop offset="1" stopColor="#9390B1"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_705_287"
          x1="0.686"
          x2="23.983"
          y1="13.654"
          y2="13.654"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.16" stopColor="#938FB1"></stop>
          <stop offset="0.38" stopColor="#807C9F"></stop>
          <stop offset="0.47" stopColor="#767298"></stop>
          <stop offset="0.7" stopColor="#6F6C8C"></stop>
          <stop offset="0.9" stopColor="#625F80"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NodeLogo;
