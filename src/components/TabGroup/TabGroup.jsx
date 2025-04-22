// src/components/Tab/Tab.jsx
import React from "react";
import { Tabs as HeroTabs, Tab as HeroTab } from "@heroui/react";
import "./style.css";

export const TabGroup = ({ selectedKey = "demographics", tabs = ["Audiences", "Demographics"] }) => {
  return (
    <HeroTabs
      selectedKey={selectedKey}
      size="sm"
      classNames={{
        base: "tabs",
        tabList: "tab-list",
        tab: "tab-item",
        tabContent: "tab-content",
      }}
    >
      {tabs.map((tab) => (
        <HeroTab key={tab.toLowerCase()} title={tab} />
      ))}
    </HeroTabs>
  );
};