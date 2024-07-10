import React from "react";
import TabsComponent from "../../../components/Tabs/Tabs";
import Act from "./Act";


const Accountability = () => {
  const tabs = [
    {
      name: "Accountability",
      component: <Act />,
    },
  ];
  return (
    <div className="react-tabs-background">
      <TabsComponent tabs={tabs} />
    </div>
  );
};

export default Accountability;
