// src/components/Checkbox/Checkbox.jsx
import React from "react";
import { Checkbox as HeroCheckbox } from "@heroui/react";
import "./style.css";

export const Checkbox = ({
  isSelected = false,
  onChange,
  text = "Option",
  className = "",
  isDisabled = false,
}) => {
  return (
    <HeroCheckbox
      isSelected={isSelected}
      onValueChange={onChange}
      isDisabled={isDisabled}
      classNames={{
        base: `checkbox ${className}`,
        wrapper: "checkbox-wrapper",
        label: "checkbox-label",
      }}
    >
      {text}
    </HeroCheckbox>
  );
};