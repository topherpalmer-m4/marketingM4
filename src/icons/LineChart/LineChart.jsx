/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const LineChart = ({ className }) => {
  return (
    <svg
      className={`line-chart ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11 1L7.64443 7.71115C7.2759 8.4482 6.2241 8.44819 5.85557 7.71115L5.14443 6.28886C4.7759 5.55181 3.7241 5.55181 3.35557 6.28885L1 11"
        stroke="#737070"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
