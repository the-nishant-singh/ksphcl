import React from "react";
import Typography from "../../../components/Typography/Typography";
import Table from "../../../components/Table/Table";
import classes from "./index.module.css"

const data = [
  {
    Stakeholder: "Government",
    "Chief Concern": "Budgetary control on Projects",
    "Response in WBPMS": "Financial controls in place",
    Metric: "% Cost Over Run",
    "Measuring Outcome": "% Projects with NO cost over-run",
    "2017-18": "95.21%",
    "2018-19": "86.79%",
  },
  {
    Stakeholder: "Client Department",
    "Chief Concern": "Speedy work execution",
    "Response in WBPMS": "Alert generation",
    Metric: "% Time Over Run",
    "Measuring Outcome": "% projects with NO time over-run",
    "2017-18": "79.64%",
    "2018-19": "59.46%",
  },
  {
    Stakeholder: "Police Personnel",
    "Chief Concern": "Congenial working places",
    "Response in WBPMS": "Green Building, Rain Water Harvesting, solar energy",
    Metric: "How well work place requirements are met",
    "Measuring Outcome": "Number of complaints received",
    "2017-18": "--",
    "2018-19": "--",
  },
];

const lidata = [
  "The Government, the de facto owner of the Corporation, is concerned about budgetary utilization and cost over-run of projects entrusted.",
  "The client departments are concerned about the product quality and its timely delivery.",
  "End users of the buildings are concerned about how well the construction meets their requirements.",
  "If the project happens to be a work area, the user department is concerned about the work place conveniences provided.",
  'If the project involves housing, the end user"s family is concerned about how well it would meet the family"s requirement.',
  "The public is concerned about how public funds are utilized.",
  "The Contractors are concerned about transparency in award of contracts and immediate payment of their bills.",
  "Financial institutions desire proper fund utilization; remote monitoring of project progress and cost / sq ft of construction data available in the WBPMS meets the requirement. Contractors are satisfied with e-tendering, e-billing and ability for remote monitoring of status of bills.",
  "KSPH&IDCL employees are concerned about their work environment, the betterment of which increases their productivity; this is measured by productivity/employee.",
  "Auditors are concerned about traceability, fund flow details and data security; e-billing capabilities, accounting and WBPMS integration, job progress monitoring, and log sheet meet their requirements. Password protection, firewalls, backup facility, and server farms allay their security concerns.",
  "Process integrity, a constant concern of management, is assured by the internal and surveillance audits carried out as part of ISO 9001 requirements that include Project Management features of ISO 10006.",
  "Environmental concerns are being addressed by planning of implementation of ISO 14001 during 2007.",
  "Information Security Management in line with BS 7799 will be initiated soon after.",
];

const Act = () => {
  return (
    <div className="rounded-content-area">
      <div className="content-header">
        <div>
          <Typography content={`Accountability`} />
        </div>
      </div>
      <div>
        <p className={classes.Description}>
          Accountability is an inescapable responsibility of (Good) Corporate
          Governance or Public Service, especially with increasing emphasis on
          citizen charter, right to information and Transparency in public
          service as well as the private corporate world. Accountability ensures
          that there is someone ready to answer for any lapse or blemish in the
          goods and services offered by the entity.
        </p>
        <p className={classes.Description}>
          KSPH&IDCL adheres to Total transparency and Right to Information and
          is committed to strive for continual improvement in order to organize
          itself as Total Quality People to achieve world-class standards in all
          its endeavors and evolve into a role model in Public service.
        </p>
        <p className={classes.Description}>
          In KSPH&IDCL transparency is not simply confined to just Public
          Procurement, as mandated by the Karnataka Transparency in Public
          Procurement Act 1999. Transparency in all actions - thought and deed -
          is the endeavor. The KSPH&IDCL portal makes available all information
          about its working, resources and project status and other details. It
          is interactive and responsive – officials concerned will receive your
          feedback for effecting necessary improvements. KSPH&IDCL sets for
          itself quality objectives on annual basis so that these may be
          measured from time to time to see how the institution is progressing
          to achieve customer satisfaction.
        </p>
        <p className={classes.Description}>
          In addition KSPH&IDCL strives to identify the chief concerns of its
          stakeholders so that by setting out to fulfill them, the organization
          earns the trust of its client departments.
        </p>

        <ul>
          {lidata.map((l) => (
            <li className={classes.DescriptionPoint}>{l}</li>
          ))}
        </ul>

        <p className={classes.Description}>
          KSPH&IDCL has designed the Web Based Project Management System and
          computerization of its activities, and integrated its activities in
          WBPMS to deliver satisfactory resolution of the concerns of its
          stakeholders. The aim of being accountable is to be able to show
          measurable improvements that can be independently evaluated.
        </p>
        <p className={classes.Description}>
          The following table summarizes the Company’s achievements as against
          the stakeholders’ expectations for the last two years
        </p>
      </div>
      <Table
        data={data}
        head={[
          "Stakeholder",
          "Chief Concern",
          "Response in WBPMS",
          "Metric",
          "Measuring Outcome",
          "2017-18",
          "2018-19",
        ]}
        keys={[
          "Stakeholder",
          "Chief Concern",
          "Response in WBPMS",
          "Metric",
          "Measuring Outcome",
          "2017-18",
          "2018-19",
        ]}
      />
    </div>
  );
};

export default Act;
