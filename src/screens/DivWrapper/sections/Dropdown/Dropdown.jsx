// src/screens/DivWrapper/sections/Dropdown/Dropdown.jsx
import React, { useState } from "react";
import { RadioGroup } from "@heroui/react";
import { Radio } from "../../../../components/Radio";
import { Checkbox } from "../../../../components/Checkbox";
import { TabGroup } from "../../../../components/TabGroup";
import "./style.css";

export const Dropdown = () => {
  const [gender, setGender] = useState("all");
  const [regionAll, setRegionAll] = useState(true);
  const [osAll, setOsAll] = useState(true);

  return (
    <div className="dropdown">
      <div className="tabs-wrapper">
        <TabGroup selectedKey="demographics" />
      </div>
      <div className="checkbox-group">
        <div className="checkboxes">
          <div className="frame-5">
            <span className="text-wrapper-33">Gender</span>
          </div>
          <RadioGroup
            value={gender}
            onValueChange={setGender}
            className="flex flex-col gap-1"
          >
            {["all", "female", "male"].map((value) => (
              <div key={value} className="radio-control">
                <Radio value={value} />
                <span className="option-a">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              </div>
            ))}
          </RadioGroup>
          <div className="frame-5">
            <span className="text-wrapper-33">Region</span>
          </div>
          <Checkbox
            isSelected={regionAll}
            onChange={() => setRegionAll(!regionAll)}
            text="All"
          />
          <Checkbox text="Midwest" />
          <Checkbox text="Northeast" />
          <div className="frame-5">
            <span className="text-wrapper-33">OS</span>
          </div>
          <Checkbox
            isSelected={osAll}
            onChange={() => setOsAll(!osAll)}
            text="All"
          />
          <Checkbox text="Apple" />
          <Checkbox text="Android" />
          <div className="frame-5">
            <span class="text-wrapper-33">Income</span>
          </div>
          <Checkbox isSelected={true} text="All" />
          <Checkbox text="Less than $25,000" />
          <div className="frame-5">
            <span class="text-wrapper-33">Ethnicity</span>
          </div>
          <Checkbox isSelected={true} text="All" />
          <Checkbox text="African American/Black" />
          <div className="frame-5">
            <span class="text-wrapper-33">Education</span>
          </div>
          <Checkbox isSelected={true} text="All" />
          <Checkbox text="Some high school or less" />
        </div>
      </div>
    </div>
  );
};