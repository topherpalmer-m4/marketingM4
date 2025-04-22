import React from "react";
import { Tab } from "../../components/Tab";
import { ArrowIosBackOutline2 } from "../../icons/ArrowIosBackOutline2";
import { BarChart } from "../../icons/BarChart";
import { LineChart } from "../../icons/LineChart";
import { List } from "../../icons/List";
import { PieChart } from "../../icons/PieChart";
import { Settings2 } from "../../icons/Settings2";
import { Dropdown } from "./sections/Dropdown";
import { Group } from "./sections/Group";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="overlap-wrapper-2">
        <div className="overlap-23">
          <div className="overlap-24">
            <Group />
            <div className="group-12">
              <div className="overlap-25">
                <div className="text-wrapper-35">+ Audience</div>

                <div className="rectangle-10" />
              </div>
            </div>

            <div className="tabs-3">
              <Tab
                className="tab-4"
                color="default"
                divClassName="tab-5"
                isSelected="on"
                radius="full"
                size="sm"
                text="Full Chat"
                variant="default"
              />
              <Tab
                className="tab-6"
                color="default"
                divClassName="tab-7"
                isSelected="off"
                radius="full"
                size="sm"
                text="Prompt"
                variant="default"
              />
              <Tab
                className="tab-6"
                color="default"
                divClassName="tab-7"
                isSelected="off"
                radius="full"
                size="sm"
                text="Response"
                variant="default"
              />
            </div>

            <div className="tabs-4">
              <Tab
                className="tab-6"
                color="default"
                divClassName="tab-7"
                isSelected="off"
                radius="full"
                size="sm"
                text="All brands"
                variant="default"
              />
              <Tab
                className="tab-4"
                color="default"
                divClassName="tab-5"
                isSelected="on"
                radius="full"
                size="sm"
                text="My brands"
                variant="default"
              />
            </div>

            <div className="group-wrapper">
              <div className="group-13">
                <div className="arrow-ios-back-wrapper">
                  <ArrowIosBackOutline2 className="arrow-ios-back" />
                </div>

                <div className="text-wrapper-36">Product</div>
              </div>
            </div>

            <div className="group-14">
              <div className="arrow-ios-back-wrapper">
                <ArrowIosBackOutline2 className="arrow-ios-back" />
              </div>

              <div className="text-wrapper-36">% of total mentions</div>
            </div>

            <OverlapWrapper />
            <div className="header-wrapper">
              <div className="header" />
            </div>

            <div className="rectangle-11" />

            <div className="group-15">
              <div className="overlap-26">
                <div className="text-wrapper-35">+ Brand</div>

                <div className="rectangle-12" />
              </div>
            </div>

            <div className="segmented-icon">
              <div className="list-wrapper">
                <List className="icon-instance-node" />
              </div>

              <div className="segmented-icon-2">
                <BarChart className="icon-instance-node" />
              </div>

              <div className="segmented-icon-2">
                <LineChart className="icon-instance-node" />
              </div>

              <div className="pie-chart-wrapper">
                <PieChart className="icon-instance-node" />
              </div>
            </div>

            <Dropdown />
          </div>

          <div className="group-16">
            <div className="overlap-27">
              <div className="group-17">
                <div className="overlap-group-10">
                  <div className="text-wrapper-37">Footwear</div>

                  <div className="text-wrapper-38">Category</div>
                </div>
              </div>

              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/2o30tgAo/img/vector-1.svg"
              />
            </div>
          </div>

          <div className="group-18">
            <div className="overlap-27">
              <div className="group-17">
                <div className="overlap-group-10">
                  <div className="text-wrapper-37">Past 3 months</div>

                  <div className="text-wrapper-38">Time frame</div>
                </div>
              </div>

              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/2o30tgAo/img/vector-1.svg"
              />
            </div>
          </div>

          <div className="settings-wrapper">
            <Settings2 className="settings" />
          </div>

          <div className="group-19" />

          <p className="chatrank-adidas">
            <span className="span">ChatRank </span>

            <span className="text-wrapper-39">-</span>

            <span className="span"> Adidas</span>
          </p>
        </div>
      </div>
    </div>
  );
};
