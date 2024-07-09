import React from "react";
import TabsComponent from "../../../components/Tabs/Tabs";
import AllCompanies from "./AllCompanies";
import { useState } from "react";
import { AdminCompanyService } from "../../../services/companyService";
import { useLoader } from "../../../hooks/use-loader.hook";
import { useEffect } from "react";
import { toast } from "react-toastify";
import AllUsers from "./AllUsers";

const Company = () => {
  const [startLoader, stopLoader] = useLoader();
  const [refresh, setRefresh] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [usersTab, setUsersTab] = useState({ status: false, company: {} });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = () => {
    AdminCompanyService.GetAll(
      {},
      () => startLoader("getAll"),
      handleSuccess,
      handleError,
      () => stopLoader("getAll")
    );
  };

  const handleSuccess = ({ data }) => {
    if (Array.isArray(data?.data)) setCompanies(data.data);
  };

  const handleError = (err) => {
    if (err && err.response) toast.error(err.response.data.message);
  };

  const handleUsersTab = (status = false, company = {}) => {
    setUsersTab({ status, company });
    if (status) setSelectedIndex(1);
  };

  const handleChangeTab = (index) => {
    handleUsersTab(false);
    setSelectedIndex(index);
  };

  const tabs = [
    {
      name: "All Contracts",
      component: (
        <AllCompanies
          companies={companies}
          setRefresh={setRefresh}
          handleUsersTab={handleUsersTab}
        />
      ),
    },
    ...(usersTab.status
      ? [
          {
            name: "Users",
            component: (
              <AllUsers companies={companies} company={usersTab.company} />
            ),
          },
        ]
      : []),
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

export default Company;
