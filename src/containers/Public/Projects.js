import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Typography from "../../components/Typography/Typography";
import classes from "./index.module.css";
import ModalComponent from "../../components/ModalComponent";
import Table from "../../components/Table/Table";
import { AuthContext } from "../../context/AuthContext";
import { Form, Formik } from "formik";
import { Input } from "../../components/Inputs";
import FileUpload from "../../components/Inputs/FileUpload";

const tenersData = {
  ongoing: 5,
  completed: 9,
  allProjects: 14,
  tnders: [
    "KEMBHAVI POLICE STATION GRADE-4 AT YADGIR PKG-69",
    "SHORAPUR POLICE STATION BUILDING IN YADGIR DIST",
    "WADGERA POLICE STATION BUILDING IN YADGIR DIST",
    "YADGIR 72 PC QTRS IN YADGIR DIST PG2025 PHASE1 PKG03",
    "YADGIR 96 PC AND 8 SI QTRS IN",
    "YADGIR DIST PG2020 PHASE3 PKG16",
    "YADGIR BACK SIDE COMPOUND WALL",
    "AND CC ROAD FOR DPO BUILDING AT YADGIR",
    "YADGIR DPO COMPLEX PHASE - I AND II",
    "8	YADGIR INTERIOR FUNITURE FOR DPO BUILDING AT YADGIR",
    "YADGIR TOWN POLICE STATION GRADE-5 AT YADGIR PKG-7",
  ],
};

const tabledata = [
  { a: "Project Manager", b: "AE1BIJ" },
  { a: "Estimate Cost In Rs.", b: "22933000.00" },
  {
    a: "Agreement Number",
    b: "PHC/CONTRACTS/PG2020/LS/2015-16/67 DATED.04.03.2016",
  },
  { a: "Project Code", b: "116" },
  { a: "Scheduled Start Date", b: "30 Mar 2016" },
  { a: "Scheduled End Date", b: "29 Nov 2017" },
  { a: "Actual Start Date", b: "30 Mar 2016" },
  { a: "Actual End Date", b: "31 Oct 2016" },
  { a: "Amount Put To Tender", b: "17579000.00" },
  { a: "Contract Amount In Rs", b: "17737000.00" },
  { a: "Project Status", b: "Completed" },
  { a: "Contract Period", b: "1 year 8 months 4 days" },
  { a: "District Name", b: "BIJAPUR" },
  { a: "Plinth Area(Sqm)", b: "0.00" },
  { a: "Status (Milestone)", b: "Completion of Handing over to police" },
  { a: "Actual Execution Period", b: "0 year 7 months 5 days" },
  { a: "ActuaUpto Date Expenditure", b: "0.00" },
];

const Projects = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const district = searchParams.get("districtName");
  const { state } = useContext(AuthContext);
  console.log(state, "state");
  const [open, setOpen] = useState(false);

  const handleFileChange = () => {};

  return (
    <div>
      {!!district ? (
        <div>
          <div>
            <Typography content={`Details for the District of ${district}`} />
          </div>
          <div className={classes.TenderCount}>
            <div className="tableCount">
              Ongoing :
              <span>
                <Typography size="14" content={tenersData.ongoing} />
              </span>
            </div>
            <div className="tableCount">
              Completed :
              <span>
                <Typography size="14" content={tenersData.completed} />
              </span>
            </div>
            <div className="tableCount">
              All Projects :
              <span>
                <Typography size="14" content={tenersData.allProjects} />
              </span>
            </div>
          </div>
          <div>
            {tenersData.tnders.map((t, i) => (
              <div className={classes.TenderItem} onClick={() => setOpen(true)}>
                <div>{i + 1}</div>
                <div className={classes.TenderItemDetails}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Typography
              content={
                "Please click on the district on the map below to know the details of the projects"
              }
            />
          </div>
          <div className={classes.TenderMap}>
            <img
              src="https://www.ksphc.org/pictures/final.jpg"
              useMap="#karnatakamap"
            />
          </div>
          <div>
            <map name="karnatakamap">
              <area
                shape="POLY"
                alt="District of Bidar"
                coords="223, 52, 214, 47, 209, 47, 207, 44, 198, 42, 195, 46, 186, 46, 181, 42, 185, 37, 185, 32, 193, 32, 193, 25, 193, 19, 203, 14, 209, 10, 211, 4, 218, 0, 222, 2, 221, 8, 231, 10, 233, 20, 230, 24, 238, 28, 228, 37, 231, 42, 226, 44"
                href="/?tab=3&districtName=bidar"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Udupi"
                coords="47, 258, 42, 258, 45, 276, 51, 291, 51, 297, 53, 314, 73, 310, 75, 307, 73, 297, 73, 292, 70, 287, 68, 272, 60, 261"
                href="/?tab=3&districtName=Udupi"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Hassan"
                coords="150, 283, 155, 288, 149, 294, 154, 304, 167, 313, 168, 318, 159, 328, 150, 324, 152, 340, 144, 337, 137, 342, 126, 340, 126, 324, 119, 333, 108, 333, 101, 319, 114, 312, 116, 302, 129, 302, 129, 296, 145, 285, 143, 285, 154, 285, 154, 287"
                href="/?tab=3&districtName=Hassan"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Mandya"
                coords="147, 342, 148, 326, 159, 330, 167, 317, 174, 317, 184, 329, 192, 329, 197, 345, 202, 347, 207, 357, 196, 362, 188, 362, 183, 352, 172, 357, 167, 352, 161, 354"
                href="/?tab=3&districtName=Mandya"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Bangalore Rural"
                coords="218, 303, 218, 299, 213, 301, 213, 303, 212, 293, 218, 298, 209, 298, 214, 297, 212, 289, 218, 288, 232, 294, 231, 292, 246, 306, 241, 299, 246, 310, 246, 303, 243, 308, 244, 306, 248, 307, 245, 314, 248, 309, 248, 317, 244, 311, 246, 313, 243, 313, 244, 312, 246, 316, 245, 317, 244, 312, 241, 316, 238, 317, 233, 320, 229, 313, 224, 308, 226, 312, 216, 305, 215, 297, 219, 306, 221, 303, 217, 303, 215, 301, 215, 300, 214, 304"
                href="/?tab=3&districtName=Bangalore Rural"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Bangalore Urban"
                coords="230, 344, 205, 350, 220, 348, 201, 353, 199, 348, 202, 353, 197, 350, 199, 344, 202, 338, 205, 333, 214, 330, 240, 323, 229, 346, 223, 349, 222, 349, 211, 349, 203, 351"
                href="/?tab=3&districtName=Bangalore Urban"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Bangalore Urban 2"
                coords="200, 334, 228, 331, 229, 329, 199, 333, 231, 327, 225, 328, 230, 332, 226, 329, 230, 333, 231, 332, 225, 330, 226, 329, 227, 327, 223, 326, 228, 326, 231, 328, 231, 332, 229, 331, 216, 299, 229, 326, 230, 329, 226, 333, 228, 331, 225, 329, 227, 324, 228, 334, 219, 334, 229, 330, 227, 328, 223, 328, 228, 333, 230, 333, 227, 320, 220, 333, 232, 326, 223, 329, 229, 332, 230, 333, 224, 328, 226, 331, 230, 328, 231, 331, 216, 297, 196, 303"
                href="/?tab=3&districtName=Bangalore Urban 2"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Ramanagar"
                coords="238, 372, 236, 370, 232, 377, 227, 378, 222, 378, 219, 375, 218, 369, 213, 363, 210, 364, 211, 358, 205, 356, 206, 349, 208, 348, 217, 348, 196"
                href="/?tab=3&districtName=Ramanagar"
                target="_blank"
              />

              <area
                shape="POLY"
                alt="District of Kolar"
                coords="243, 298, 248, 297, 254, 298, 257, 297, 262, 299, 264, 293, 267, 290, 269, 284, 272, 280, 280, 279, 280, 283, 279, 286, 280, 291, 279, 293, 278, 294, 283, 297, 287, 300, 286, 294, 289, 300, 290, 308, 280, 305, 284, 316, 283, 320, 281, 323, 277, 322, 276, 325, 272, 327, 271, 330, 267, 332, 263, 329, 260, 327, 258, 326, 258, 328, 256, 330, 252, 327, 250, 325, 247, 327, 245, 323, 247, 318, 251, 310, 253, 305, 250, 303, 247, 302, 242, 300"
                href="/?tab=3&districtName=Kolar"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Chikkaballapur"
                coords="218, 274, 222, 273, 229, 271, 234, 274, 235, 269, 239, 266, 239, 262, 240, 262, 242, 262, 243, 264, 247, 262, 249, 262, 248, 264, 247, 267, 251, 266, 254, 265, 257, 267, 258, 270, 257, 275, 259, 279, 262, 282, 262, 287, 261, 291, 259, 294, 258, 296, 257, 297, 257, 300, 252, 300, 249, 300, 246, 299, 241, 298, 237, 299, 233, 296, 232"
                href="/?tab=3&districtName=Chikkaballapur"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Bagalkot"
                coords="123, 147, 101, 146, 102, 130, 93, 126, 89, 120, 78, 114, 79, 111, 78, 103, 85, 96, 92, 98, 100, 88, 104, 109, 134, 115, 145, 128, 154, 143, 143, 143, 140, 138, 133, 142, 125, 137"
                href="/?tab=3&districtName=Bagalkot"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Gadag"
                coords="115, 199, 111, 198, 107, 191, 101, 191, 101, 177, 106, 171, 105, 169, 110, 161, 108, 154, 98, 156, 89, 154, 103, 145, 123, 146, 131, 146, 135, 151, 131, 151, 125, 163, 125, 169, 127, 185"
                href="/?tab=3&districtName=Gadag"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Mysore"
                coords="146, 392, 135, 385, 132, 379, 135, 371, 126, 359, 118, 353, 121, 344, 135, 344, 143, 341, 160, 353, 163, 353, 171, 358, 179, 354, 188, 361, 193, 364, 193, 368, 181, 368, 179, 376, 167, 376, 156, 382"
                href="/?tab=3&districtName=Mysore"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Dakshin Kannad"
                coords="52, 318, 54, 337, 63, 333, 68, 339, 78, 346, 86, 352, 90, 349, 95, 351, 102, 350, 105, 341, 98, 324, 93, 313, 86, 309, 76, 312"
                href="/?tab=3&districtName=Dakshin Kannad"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Uttar Kannad"
                coords="59, 172, 69, 180, 64, 186, 66, 193, 76, 193, 76, 203, 75, 217, 74, 222, 68, 225, 67, 230, 69, 239, 58, 245, 49, 247, 51, 257, 44, 260, 38, 235, 32, 218, 25, 213, 21, 202, 29, 199, 32, 190, 32, 179, 34, 177, 32, 165, 47, 175"
                href="/?tab=3&districtName=Uttar Kannad"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Gulbarga"
                coords="175, 35, 184, 40, 191, 41, 196, 37, 202, 38, 214, 42, 221, 45, 229, 47, 234, 51, 228, 55, 226, 59, 222, 58, 221, 63, 218, 66, 217, 66, 217, 69, 222, 76, 225, 80, 221, 83, 210, 88, 205, 89, 177, 94, 168, 95, 160, 95, 161, 83, 157, 67, 149, 67, 140, 58, 143, 57, 147, 59, 153, 56, 158, 58, 159, 54, 157, 43, 162, 40, 171, 33, 174, 33"
                href="/?tab=3&districtName=Gulbarga"
                target="_blank"
              />

              <area
                shape="POLY"
                alt="District of Yadgir"
                coords="162, 96, 168, 95, 171, 97, 179, 95, 184, 92, 188, 90, 193, 88, 196, 87, 203, 89, 209, 91, 214, 89, 218, 87, 223, 84, 223, 88, 224, 93, 223, 95, 223, 97, 221, 101, 223, 103, 224, 105, 221, 107, 219, 110, 216, 112, 215, 113, 211, 113, 209, 116, 204, 114, 199, 111, 197, 110, 194, 107, 189, 110, 184, 112, 180, 113, 174, 117, 169, 119, 163, 123, 157, 124, 155, 124, 153, 120, 156, 114, 160, 112, 160, 106, 159, 100, 161, 98, 162, 96"
                href="/?tab=3&districtName=Yadgir"
                target="_blank"
              />

              <area
                shape="POLY"
                alt="District of Davangere"
                coords="124, 269, 137, 260, 134, 250, 142, 232, 156, 230, 164, 221, 146, 214, 139, 200, 125, 203, 117, 211, 117, 225, 109, 237, 103, 237, 99, 248, 118, 251"
                href="/?tab=3&districtName=Davangere"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Shimoga"
                coords="76, 288, 83, 280, 92, 280, 100, 269, 123, 267, 120, 249, 107, 251, 96, 248, 102, 239, 97, 232, 92, 221, 77, 216, 67, 222, 66, 238, 56, 241, 50, 242, 50, 255, 63, 257, 70, 273"
                href="/?tab=3&districtName=Shimoga"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Bijapur"
                coords="138, 56, 134, 56, 131, 50, 125, 53, 118, 46, 112, 50, 115, 62, 115, 75, 109, 78, 101, 76, 95, 78, 97, 87, 101, 89, 102, 107, 119, 112, 133, 114, 141, 127, 155, 121, 151, 115, 157, 110, 159, 96, 159, 79, 157, 66, 145, 65, 133, 55, 132, 50, 127, 54"
                href="/?tab=3&districtName=Bijapur"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of ChitraDurga"
                coords="174, 197, 181, 200, 186, 205, 180, 216, 180, 223, 188, 232, 188, 238, 189, 246, 189, 253, 185, 256, 177, 265, 177, 271, 168, 273, 164, 280, 152, 286, 147, 286, 142, 278, 132, 265, 138, 263, 134, 254, 141, 235, 153, 234, 163, 224, 175, 213"
                href="/?tab=3&districtName=ChitraDurga"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Tumkur"
                coords="217, 276, 212, 282, 213, 291, 210, 300, 205, 300, 193, 313, 197, 320, 197, 334, 185, 332, 178, 319, 168, 319, 155, 309, 150, 299, 154, 295, 150, 286, 165, 280, 166, 271, 177, 270, 177, 266, 185, 254, 195, 261, 191, 273, 203, 274, 203, 267, 215, 268"
                href="/?tab=3&districtName=Tumkur"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Chikmagalur"
                coords="77, 309, 86, 305, 95, 310, 100, 321, 112, 313, 112, 304, 128, 302, 128, 298, 146, 285, 151, 285, 131, 265, 123, 269, 99, 269, 91, 279, 81, 281, 76, 290"
                href="/?tab=3&districtName=Chikmagalur"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Koppal"
                coords="149, 143, 138, 143, 136, 137, 131, 142, 120, 137, 119, 142, 133, 150, 131, 155, 127, 152, 120, 164, 123, 170, 123, 186, 131, 186, 137, 182, 179, 167, 163, 152"
                href="/?tab=3&districtName=Koppal"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Haveri"
                coords="76, 219, 76, 197, 82, 189, 100, 190, 109, 195, 117, 203, 116, 213, 119, 218, 119, 225, 107, 241, 99, 236, 92, 225"
                href="/?tab=3&districtName=Haveri"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Raichur"
                coords="148, 133, 156, 144, 160, 146, 166, 155, 184, 167, 191, 154, 199, 148, 215, 144, 225, 147, 228, 137, 225, 126, 232, 126, 223, 120, 211, 114, 196, 107"
                href="/?tab=3&districtName=Raichur"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Bellary"
                coords="181, 168, 165, 174, 148, 179, 142, 180, 137, 185, 129, 185, 116, 198, 114, 214, 121, 212, 121, 204, 139, 201, 143, 207, 146, 214, 162, 221, 176, 208, 175, 195, 180, 192, 196, 198, 203, 191, 198, 178, 203, 174, 194, 168, 199, 161, 200, 147, 189, 150"
                href="/?tab=3&districtName=Bellary"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Dharwad"
                coords="79, 194, 70, 192, 68, 184, 74, 179, 60, 169, 71, 158, 89, 154, 109, 156, 112, 161, 107, 174, 105, 191, 99, 191, 98, 187, 94, 189, 85, 185"
                href="/?tab=3&districtName=Dharwad"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Chamarajnagar"
                coords="185, 370, 183, 373, 171, 374, 170, 379, 161, 380, 148, 383, 138, 394, 145, 399, 153, 406, 166, 406, 172, 397, 185, 397, 205, 396, 209, 386, 217, 385, 224, 380, 220, 371, 208, 369, 196, 363"
                href="/?tab=3&districtName=Chamarajnagar"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Belgaum"
                coords="100, 83, 104, 90, 98, 97, 81, 102, 81, 114, 95, 124, 104, 129, 105, 147, 98, 151, 81, 157, 70, 157, 63, 167, 56, 173, 47, 172, 36, 165, 32, 158, 27, 157, 34, 147, 42, 148, 42, 143, 48, 137, 42, 133, 50, 130, 50, 121, 42, 117, 42, 111, 38, 103, 53, 97, 56, 100, 63, 100, 63, 91, 74, 91, 78, 81, 86, 80, 95, 84"
                href="/?tab=3&districtName=Belgaum"
                target="_blank"
              />
              <area
                shape="POLY"
                alt="District of Kodagu"
                coords="90, 348, 97, 357, 103, 365, 114, 371, 120, 378, 133, 378, 138, 369, 129, 358, 122, 350, 128, 342, 128, 326, 123, 333, 111, 333, 108, 343, 98, 343"
                href="/?tab=3&districtName=Kodagu"
                target="_blank"
              />
            </map>
          </div>
        </div>
      )}
      <ModalComponent isOpen={open} setOpen={setOpen}>
        <div className={classes.TenderDetails}>
          <div>
            <Typography
              content={"WADGERA POLICE STATION BUILDING IN YADGIR DIST"}
            />
          </div>
          {state.user?.userRole === "contractor" ? (
            <>
              <Formik initialValues={{}}>
                <Form>
                  <div className="input-container">
                    <div className="field-container">
                      <label htmlFor="name">Contractor Name</label>
                      <Input name="Contractor Name" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="email">Project Manager</label>
                      <Input name="Project Manager" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="email">Estimate Cost In Rs</label>
                      <Input name="Estimate Cost In Rs" />
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="field-container">
                      <label htmlFor="Agreement Number">Agreement Number</label>
                      <Input name="Agreement Number" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="Project Code">Project Code</label>
                      <Input name="Project Code" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="Scheduled Start Date">Scheduled Start Date</label>
                      <Input name="Scheduled Start Date" />
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="field-container">
                      <label htmlFor="name">Scheduled End Date</label>
                      <Input name="Scheduled End Date" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="Actual Start Date">Actual Start Date</label>
                      <Input name="Actual Start Date" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="Actual End Date">Actual End Date</label>
                      <Input name="Actual End Date" />
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="field-container">
                      <label htmlFor="name">Amount Put To Tender</label>
                      <Input name="Amount Put To Tender" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="email">Contract Amount In Rs</label>
                      <Input name="Contract Amount In Rs" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="email">Project Status</label>
                      <Input name="Project Status" />
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="field-container">
                      <label htmlFor="Contract Period">Contract Period</label>
                      <Input name="Contract Period" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="District Name">District Name</label>
                      <Input name="District Name" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="Plinth Area">Plinth Area(Sqm)</label>
                      <Input name="Plinth Area" />
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="field-container">
                      <label htmlFor="milestone">Status (Milestone)</label>
                      <Input name="milestone" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="execution">Actual Execution Period</label>
                      <Input name="email" />
                    </div>
                    <div className="field-container">
                      <label htmlFor="upto">Upto Date Expenditure</label>
                      <Input name="upto" />
                    </div>
                  </div>
                  <div className="field-container-full-width">
                    <label htmlFor="upload">Upload Files</label>
                    <FileUpload
                      name="file"
                      onChange={handleFileChange}
                      id="file"
                      multiple="multiple"
                    />
                  </div>
                  <div className="buttons-container">
                    <div>
                      <button type="submit" className="btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </>
          ) : (
            <Table
              data={tabledata}
              head={[
                "Contractor Name",
                "Contractor-M/s Standard Infratech India",
              ]}
              keys={["a", "b"]}
            />
          )}
        </div>
      </ModalComponent>
    </div>
  );
};

export default Projects;
