import React from "react";
import { RadioGroup, Radio as HeroRadio } from "@heroui/react";
import { Radio } from "./Radio";

export const TestRadio = () => {
  console.log("TestRadio rendering");
  return (
    <div style={{ padding: "20px" }}>
      <h1>Test Radio</h1>
      <RadioGroup defaultValue="test1" name="test-group">
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", paddingLeft: "16px" }}>
          <Radio
            value="test1"
            className="radio-2"
            controlClassName="radio-instance"
          />
          <span style={{ color: "#192138", fontSize: "14px", fontFamily: "Inter" }}>Test Radio 1</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", paddingLeft: "16px" }}>
          <Radio
            value="test2"
            className="radio-4"
            controlClassName="radio-4"
            ellipseClassName="radio-3"
          />
          <span style={{ color: "#192138", fontSize: "14px", fontFamily: "Inter" }}>Test Radio 2</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px", paddingLeft: "16px" }}>
          <HeroRadio
            value="test3"
            classNames={{
              base: `relative inline-flex items-center justify-center w-[16px] h-[16px] border-2 rounded-full border-[#c7c7c7] data-[selected=true]:border-[#006fee] !opacity-100`,
              control: `absolute w-[6px] h-[6px] rounded-full bg-[#59c09f] data-[selected=false]:hidden !opacity-100`,
            }}
          >
            Raw Radio
          </HeroRadio>
        </div>
      </RadioGroup>
    </div>
  );
};