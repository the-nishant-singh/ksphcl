import React from "react";
import TabsComponent from "../../../components/Tabs/Tabs";
import { Stats } from "./Stats";

const Statistics = () => {
  const tabs = [
    {
      name: "Statistics",
      component: <Stats />,
    },
  ];
  return (
    <div className="react-tabs-background">
      <TabsComponent tabs={tabs} />
    </div>
  );
};

export default Statistics;
