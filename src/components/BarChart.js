import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["ม.ค", "ก.พ.", "มี.ค", "เม.ย."],
          datasets: [
            {
              label: "Alzheimer's",
              data: [1, 2, 3, 4],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
