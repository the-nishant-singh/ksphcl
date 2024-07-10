import React from "react";
import TabsComponent from "../../../components/Tabs/Tabs";
import Trans from "./Trans";

const Transactions = () => {
  const tabs = [
    {
      name: "Transactions",
      component: <Trans />,
    },
  ];
  return (
    <div className="react-tabs-background">
      <TabsComponent tabs={tabs} />
    </div>
  );
};

export default Transactions;
