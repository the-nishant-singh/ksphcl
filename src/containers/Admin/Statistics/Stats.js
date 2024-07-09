import React from "react";
import Typography from "../../../components/Typography/Typography";
import ReactApexChart from "react-apexcharts";

const caostBearedData = [
  {
    name: "Series",
    data: [
      {
        x: 2,
        y: 500000,
      },
      {
        x: 3,
        y: 5124544,
      },
      {
        x: 4,
        y: 522454,
      },
      {
        x: 5,
        y: 532454,
      },
      {
        x: 6,
        y: 54245444,
      },
      {
        x: 7,
        y: 552454,
      },
      {
        x: 8,
        y: 50000,
      },
      {
        x: 9,
        y: 512454,
      },
      {
        x: 10,
        y: 5225454,
      },
      {
        x: 11,
        y: 5324544,
      },
      {
        x: 12,
        y: 5424544,
      },
      {
        x: 13,
        y: 55245994,
      },
    ],
  },
  {
    name: "Series 2",
    data: [
      {
        x: 2,
        y: 4885222,
      },
      {
        x: 3,
        y: 90211556,
      },
      {
        x: 4,
        y: 61121121,
      },
      {
        x: 5,
        y: 7232132,
      },
      {
        x: 6,
        y: 3545312,
      },
      {
        x: 7,
        y: 2000005,
      },
      {
        x: 8,
        y: 5654522,
      },
      {
        x: 9,
        y: 9966615,
      },
      {
        x: 10,
        y: 1054455,
      },
      {
        x: 11,
        y: 5656332,
      },
      {
        x: 12,
        y: 45543222,
      },
      {
        x: 13,
        y: 7854522,
      },
    ],
  },
];

const barChartData = [
  {
    name: "Cost in Crores",
    data: [30, 20, 25, 15, 10, 5, 3, 2],
  },
];

export const Stats = () => {
  return (
    <>
      <div className="rounded-content-area">
        <div>
          <Typography content={"Cost Beared"} size={14} />
          <ReactApexChart
            type="line"
            options={{
              grid: {
                row: {
                  colors: ["#f3f3f3", "transparent"],
                  opacity: 0.5,
                },
              },
            }}
            series={caostBearedData}
            height={300}
          />
        </div>
      </div>
      <div className="rounded-content-area" style={{ marginTop: "1vw" }}>
        <div>
          <Typography content={"category Wise Cost"} size={14} />
          <ReactApexChart
            type="bar"
            options={{
              xaxis: {
                categories: [
                  "Land Acquisition",
                  "Materials",
                  "Labor",
                  "Architect Fees",
                  "Permits & Licenses",
                  "Utilities",
                  "Marketing",
                  "Contingencies",
                ],
              },
              plotOptions: {
                bar: {
                  columnWidth: "50%",
                },
              },
            }}
            series={barChartData}
            height={400}
          />
        </div>
      </div>
    </>
  );
};
