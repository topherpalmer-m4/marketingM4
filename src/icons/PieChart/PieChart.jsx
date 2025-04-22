/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const PieChart = ({ className }) => {
  return (
    <svg
      className={`pie-chart ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.605 7.94662C10.2869 8.69904 9.78942 9.36206 9.15598 9.87772C8.52254 10.3934 7.77245 10.746 6.9713 10.9047C6.17015 11.0634 5.34233 11.0234 4.5602 10.7882C3.77808 10.553 3.06547 10.1297 2.48468 9.55533C1.90389 8.98098 1.4726 8.27308 1.22851 7.49349C0.98443 6.71391 0.934984 5.88638 1.0845 5.08327C1.23401 4.28016 1.57794 3.5259 2.0862 2.88646C2.59447 2.24701 3.2516 1.74183 4.00014 1.4151M11 6.00117C11 5.34441 10.8707 4.69407 10.6194 4.0873C10.3681 3.48053 9.99985 2.92921 9.53556 2.46481C9.07128 2.00041 8.5201 1.63202 7.91348 1.38069C7.30686 1.12936 6.6567 1 6.0001 1V6.00117H11Z"
        stroke="#737070"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
