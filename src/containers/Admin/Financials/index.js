import React from "react";
import TabsComponent from "../../../components/Tabs/Tabs";
import Fin from "./Fin";

const Finanacials = () => {
  const tabs = [
    {
      name: "Finanacials",
      component: <Fin />,
    },
  ];
  return (
    <div className="react-tabs-background">
      <TabsComponent tabs={tabs} />
    </div>
  );
};

export default Finanacials;
