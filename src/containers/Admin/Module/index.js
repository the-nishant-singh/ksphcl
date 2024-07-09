import React, { useState } from "react";
import AllModules from "./AllModules";
import TabsComponent from "../../../components/Tabs/Tabs";

const Modules = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeTab = (index) => {
    setSelectedIndex(index);
  };

  const tabs = [
    {
      name: "All Modules",
      component: <AllModules />,
    },
  ];

  return (
    <div className="react-tabs-background">
      <TabsComponent
        tabs={tabs}
        selectedIndex={selectedIndex}
        onChangeTab={handleChangeTab}
      />
    </div>
  );
};

export default Modules;
