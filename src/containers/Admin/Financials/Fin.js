import React from "react";
import Typography from "../../../components/Typography/Typography";
import ReactApexChart from "react-apexcharts";
import classes from "./index.module.css";

const barChartData = [
  {
    name: "Cost in Crores",
    data: [30000, 10000, 20000, 20000, 50000],
  },
];

const barChartData2 = [
  {
    name: "Cost in Crores",
    data: [30000, 45000, 70000, 50000, 40000],
  },
];

const Fin = () => {
  return (
    <>
      <div className={classes.GraphParent}>
        <div className={`rounded-content-area ${classes.GraphChild}`}>
          <div className="content-header">
            <div>
              <Typography
                content={`Cost of Buildings cornpleted and handed over`}
                size={14}
              />
            </div>
          </div>

          <ReactApexChart
            type="bar"
            options={{
              xaxis: {
                categories: [
                  "2020-21",
                  "2019-20",
                  "2019-19",
                  "2017-18",
                  "2016-17",
                ],
              },
              plotOptions: {
                bar: {
                  columnWidth: "50%",
                },
              },
            }}
            series={barChartData}
            height={300}
          />
        </div>
        <div className={`rounded-content-area ${classes.GraphChild}`}>
          <div className="content-header">
            <div>
              <Typography content={`Direct Work Expenditure`} size={14} />
            </div>
          </div>
          
          <ReactApexChart
            type="bar"
            options={{
              xaxis: {
                categories: [
                  "2020-21",
                  "2019-20",
                  "2019-19",
                  "2017-18",
                  "2016-17",
                ],
              },
              plotOptions: {
                bar: {
                  columnWidth: "50%",
                },
              },
            }}
            series={barChartData2}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Fin;