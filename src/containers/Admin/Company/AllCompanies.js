import React, { useEffect, useState } from "react";
import Typography from "../../../components/Typography/Typography";
import Table from "../../../components/Table/Table";
import ModalComponent from "../../../components/ModalComponent";
import { UilInfoCircle } from "@iconscout/react-unicons";
import ContractDetails from "./ModalComponent/ContractDetails";
import TabsComponent from "../../../components/Tabs/Tabs";
import ContractProgress from "./ModalComponent/ContractProgress";
const tableData = [
  {
    sno: 1,
    projectName: "ALMATTI 12 PC QTRS UNDER POLICE GRUHA 2020 PKG 60",
    contractAmount: "52456321",
    uptoDateExp: "5566456456",
    SiteHandOver: "25 Dec 2022",
    EstimateEndDate: "25 Dec 2022",
  },
  {
    sno: 2,
    projectName: "ALMEL 12 PC QTRS UNDER POLICE GRUHA 2020 PKG 60",
    contractAmount: "5521452",
    uptoDateExp: "323332332",
    SiteHandOver: "01 Dec 2024",
    EstimateEndDate: "25 Dec 2022",
  },
  {
    sno: 3,
    projectName:
      "ALMEL 2 SI QTRS UNDER POLICE GRUHA 2020 PHASE III PKG 15 2017 18",
    contractAmount: "4545445454",
    uptoDateExp: "23121213",
    SiteHandOver: "15 Dec 2023",
    EstimateEndDate: "25 Dec 2022",
  },
  {
    sno: 4,
    projectName: "AND 12 FM QTRS IN VIJAYPURA DIST UNDER K-SAFE",
    contractAmount: "5454544",
    uptoDateExp: "54123121",
    SiteHandOver: "15 Dec 2024",
    EstimateEndDate: "25 Dec 2022",
  },
  {
    sno: 5,
    projectName: "	INDI 2 SI QTRS UNDER POLICE GRUHA 2020 PKG 60",
    contractAmount: "333262322",
    uptoDateExp: "323313213",
    SiteHandOver: "19 Dec 2022",
    EstimateEndDate: "25 Dec 2022",
  },
];

const files = [{}];

const AllCompanies = ({ companies = [], setRefresh, handleUsersTab }) => {
  const [processedCompanies, setProcessedCompanies] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    processCompanies();
  }, []);

  const processCompanies = () => {
    const processed = tableData.map((item, index) => ({
      ...item,
      sno: index + 1,
      // access: (
      //   <div className="action-container">
      //     <ToggleButtonWithState
      //       value={item.hasAccess}
      //       onChange={(e) => handleChangeAccess(item.id, e.target.checked)}
      //     />
      //   </div>
      // ),
      action: (
        <div className="action-container">
          <div>
            <UilInfoCircle
              size={"1.2vw"}
              style={{ color: "var(--color-primary)" }}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      ),
    }));
    setProcessedCompanies(processed);
  };

  const tabs = [
    {
      name: "Details",
      component: <ContractDetails />,
    },
    {
      name: "Progress",
      component: <ContractProgress />,
    },
  ];

  return (
    <div className="rounded-content-area">
      <div className="content-header">
        <div>
          <Typography content={"All Contracts"} />
          <div className="table-count">
            Total Count :
            <span>
              <Typography size="14" content={companies.length} />
            </span>
          </div>
        </div>
        {/* <div className="action-container">
          <CreateButton
            size="medium"
            text="Create Company"
            onClick={handleCreateEditCompany}
          />
          <CreateButton
            size="medium"
            text="Create User"
            onClick={() => setCreateuserModal(true)}
          />
        </div> */}
      </div>
      <Table
        data={processedCompanies}
        head={[
          "S.No.",
          "Project Name",
          "Contract Amount",
          "Upto date Exp",
          "Site Handover",
          "Est End Date",
          "Action",
        ]}
        keys={[
          "sno",
          "projectName",
          "contractAmount",
          "uptoDateExp",
          "SiteHandOver",
          "EstimateEndDate",
          "action",
        ]}
      />
      {/* <ModalComponent
        isOpen={createEditModal.status}
        // setOpen={() => handleCreateEditCompany(false)}
      >
        <CreateEditCompany
          editData={createEditModal.editData}
          // setOpen={handleCreateEditCompany}
          setRefresh={setRefresh}
        />
      </ModalComponent>
      <ModalComponent
        isOpen={createUserModal}
        setOpen={() => setCreateuserModal(false)}
      >
        <CreateEditUser setOpen={setCreateuserModal} companies={companies} />
      </ModalComponent> */}
      {/* <DeleteModal
        opendeleteModal={deleteModal.status}
        setOpenDeleteModal={(status) => setDeleteModal({ status, id: null })}
        deletefunction={handleDelete}
        functionParam={deleteModal.id}
        text="Deleting company will also delete its users"
      ></DeleteModal> */}
      <ModalComponent isOpen={open} setOpen={setOpen}>
        <TabsComponent tabs={tabs} />
      </ModalComponent>
    </div>
  );
};

export default AllCompanies;
