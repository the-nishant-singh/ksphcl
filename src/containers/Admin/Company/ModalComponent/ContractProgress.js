import React from "react";
import Table from "../../../../components/Table/Table";
import Typography from "../../../../components/Typography/Typography";

const data = [
  {
    status: "Pending",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "22 DEC 2023",
    updatedBY: "JEE",
  },
  {
    status: "Approved",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "20 DEC 2023",
    updatedBY: "AE",
  },
  {
    status: "Approved",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "19 DEC 2023",
    updatedBY: "EE",
  },
  {
    status: "Approved",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "18 DEC 2023",
    updatedBY: "JEE",
  },
  {
    status: "Pending",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "22 DEC 2023",
    updatedBY: "JEE",
  },
  {
    status: "Approved",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "20 DEC 2023",
    updatedBY: "AE",
  },
  {
    status: "Approved",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "19 DEC 2023",
    updatedBY: "EE",
  },
  {
    status: "Approved",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "18 DEC 2023",
    updatedBY: "JEE",
  },
];

const ContractProgress = () => {
  return (
    <div style={{ width: "50vw" }}>
      <Typography
        content={
          "Detais for contract ALMATTI 12 PC QTRS UNDER POLICE GRUHA 2020 PKG 60"
        }
        size={4}
      />
      <Table
        data={data}
        head={["Status", "Updated By", "Description", "Date"]}
        keys={["status", "updatedBY", "desc", "date"]}
      />
    </div>
  );
};

export default ContractProgress;
