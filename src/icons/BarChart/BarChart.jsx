/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BarChart = ({ className }) => {
  return (
    <svg
      className={`bar-chart ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 11V4.75M11 11V1M1 11V8.5"
        stroke="#737070"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
