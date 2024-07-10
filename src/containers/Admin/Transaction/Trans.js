import React from "react";
import Typography from "../../../components/Typography/Typography";
import CreateButton from "../../../components/Buttons/CreateButton";
import Table from "../../../components/Table/Table";
import Dropdown from "../../../components/Inputs/Dropdown/indexNoState";
import { UilInfoCircle } from "@iconscout/react-unicons";

const data = [
  {
    orderDetails: "Fiat Deposit",
    orderId: "VUVX709ET7BY",
    source: "**** 1111",
    contractAmount: "₹56,787.00",
    status: "Completed",
  },
  {
    orderDetails: "Fiat Deposit",
    orderId: "23M3UOG65G8K",
    source: "**** 1111",
    contractAmount: "₹56,787.00",
    status: "Completed",
  },
  {
    orderDetails: "Fiat Deposit",
    orderId: "F6JHK65MS818",
    source: "**** 1111",
    contractAmount: "₹56,787.00",
    status: "Completed",
  },
  {
    orderDetails: "Fiat Deposit",
    orderId: "QJFAI7N84LGM",
    source: "**** 1111",
    contractAmount: "₹56,787.00",
    status: "Completed",
  },
  {
    orderDetails: "Fiat Deposit",
    orderId: "BO5KFSYGC0YW",
    source: "**** 1111",
    contractAmount: "₹56,787.00",
    status: "Failed",
  },
  {
    orderDetails: "Fiat Deposit",
    orderId: "VUVX709ET7BY",
    source: "**** 1111",
    contractAmount: "₹56,787.00",
    status: "Pending",
  },
];

const options = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Failed",
    value: "failed",
  },
];

const Trans = () => {
  const processedData = data.map((d) => {
    d.actions = (
      <div>
        <UilInfoCircle
          size={"1.2vw"}
          style={{ color: "var(--color-primary)" }}
          //   onClick={() => setOpen(true)}
        />
      </div>
    );
    return d;
  });
  return (
    <div className="rounded-content-area">
      <div className="content-header">
        <div>
          <Typography content={`All Transactions`} />
          <div className="table-count">
            Total Count :
            <span>
              <Typography size="14" content={data.length} />
            </span>
          </div>
          <div style={{ minWidth: "10vw" }}>
            <Dropdown options={options} defaultValue={options[0]} />
          </div>
        </div>
        <div className="action-container">
          <CreateButton size="medium" text="Create Transaction" />
        </div>
      </div>
      <Table
        data={processedData}
        head={[
          "Order Details",
          "Order Id",
          "Source",
          "Contract Amount",
          "Status",
          "Actions",
        ]}
        keys={[
          "orderDetails",
          "orderId",
          "source",
          "contractAmount",
          "status",
          "actions",
        ]}
      />
    </div>
  );
};

export default Trans;
