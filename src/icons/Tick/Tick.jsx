/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Tick = ({ className }) => {
  return (
    <svg
      className={`tick ${className}`}
      fill="none"
      height="7"
      viewBox="0 0 8 7"
      width="8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1 3.22L3.66571 5.44L7.22 1"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};
