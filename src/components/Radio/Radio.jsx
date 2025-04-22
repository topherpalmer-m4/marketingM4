// src/components/Radio/Radio.jsx
import React from "react";
import { Radio as HeroRadio } from "@heroui/react";
import "./style.css";

export const Radio = ({ value, className = "", isDisabled = false, onChange }) => {
  return (
    <HeroRadio
      value={value}
      isDisabled={isDisabled}
      onChange={() => onChange?.(value)}
      classNames={{
        base: `radio ${className}`,
        wrapper: "radio-wrapper",
        control: "radio-control",
        label: "radio-label",
      }}
    />
  );
};