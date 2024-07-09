import React from "react";
import Typography from "../../../../components/Typography/Typography";
import { Form, Formik } from "formik";
import { Input } from "../../../../components/Inputs";
import classes from "../index.module.css"
import { UilFileDownload } from "@iconscout/react-unicons";

const ContractDetails = () => {
  return (
    <div>
      <div>
        <Typography
          content={
            "Detais for contract ALMATTI 12 PC QTRS UNDER POLICE GRUHA 2020 PKG 60"
          }
          size={4}
        />
        <>
          <Formik
            initialValues={{
              "Contractor Name": "Contractor 1",
              "Project Manager": "Contractor 1",
              "Estimate Cost In Rs": "50000000",
              "Agreement Number": "558",
              "Project Code": "ABC",
              "Scheduled Start Date": "22 DEC 2023",
              "Scheduled End Date": "25 JAN 2025",
              "Actual Start Date": "22 DEC 2023",
              "Actual End Date": "--",
              "Amount Put To Tender": "2500000",
              "Contract Amount In Rs": "56985256",
              "Project Status": "In-Progress",
              "Contract Period": "1 year 2 Months",
              "District Name": "BIJAPUR",
              "Plinth Area": "2200",
              milestone: "In-Progress",
              execution: "8888888",
              upto: "2500000",
            }}
            enableReinitialize
          >
            <Form>
              <div className="input-container">
                <div className="field-container">
                  <label htmlFor="name">Contractor Name</label>
                  <Input name="Contractor Name" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="email">Project Manager</label>
                  <Input name="Project Manager" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="email">Estimate Cost In Rs</label>
                  <Input name="Estimate Cost In Rs" disabled />
                </div>
              </div>
              <div className="input-container">
                <div className="field-container">
                  <label htmlFor="Agreement Number">Agreement Number</label>
                  <Input name="Agreement Number" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="Project Code">Project Code</label>
                  <Input name="Project Code" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="Scheduled Start Date">
                    Scheduled Start Date
                  </label>
                  <Input name="Scheduled Start Date" disabled />
                </div>
              </div>
              <div className="input-container">
                <div className="field-container">
                  <label htmlFor="name">Scheduled End Date</label>
                  <Input name="Scheduled End Date" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="Actual Start Date">Actual Start Date</label>
                  <Input name="Actual Start Date" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="Actual End Date">Actual End Date</label>
                  <Input name="Actual End Date" disabled />
                </div>
              </div>
              <div className="input-container">
                <div className="field-container">
                  <label htmlFor="name">Amount Put To Tender</label>
                  <Input name="Amount Put To Tender" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="email">Contract Amount In Rs</label>
                  <Input name="Contract Amount In Rs" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="email">Project Status</label>
                  <Input name="Project Status" disabled />
                </div>
              </div>
              <div className="input-container">
                <div className="field-container">
                  <label htmlFor="Contract Period">Contract Period</label>
                  <Input name="Contract Period" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="District Name">District Name</label>
                  <Input name="District Name" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="Plinth Area">Plinth Area(Sqm)</label>
                  <Input name="Plinth Area" disabled />
                </div>
              </div>
              <div className="input-container">
                <div className="field-container">
                  <label htmlFor="milestone">Status (Milestone)</label>
                  <Input name="milestone" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="execution">Actual Execution Period</label>
                  <Input name="execution" disabled />
                </div>
                <div className="field-container">
                  <label htmlFor="upto">Upto Date Expenditure</label>
                  <Input name="upto" disabled />
                </div>
              </div>
              <div className="field-container-full-width">
                <label htmlFor="milestone">Uploaded Docs</label>
                <div className={classes.UploadedFileWrapper}>
                  <div>Municipal Approvals Docs</div>

                  <UilFileDownload
                    style={{
                      color: "var(--color-primary)",
                    }}
                    size={"1.3vw"}
                  />
                </div>
              </div>
              {/* <div className="buttons-container">
                <div>
                  <button type="submit" className="btn-secondary">
                    Close
                  </button>
                </div>
              </div> */}
            </Form>
          </Formik>
        </>
      </div>
    </div>
  );
};

export default ContractDetails;
