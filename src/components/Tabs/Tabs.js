import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsComponent = ({
  tabs = [],
  selectedIndex = 0,
  resetIndex = null,
  onChangeTab = null,
}) => {
  const [tabIndex, setTabIndex] = useState(selectedIndex);
  
  useEffect(() => {
    if (selectedIndex) setTabIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    if (resetIndex) setTabIndex(0);
  }, [resetIndex]);

  const handleTabChange = (index) => {
    setTabIndex(index);
    onChangeTab && onChangeTab(index);
  };

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => handleTabChange(index)}>
      <TabList>
        {tabs.map((tab) => (
          <Tab>{tab.name}</Tab>
        ))}
      </TabList>

      {tabs.map((tab) => (
        <TabPanel style={{ marginTop: "1.5vw" }}>{tab.component}</TabPanel>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
