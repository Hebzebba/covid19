import React from "react";
import { Bar } from "react-chartjs-2";
const BarChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const barchart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["yellow", "green", "blue "],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <>{country === undefined ? "" : barchart} </>;
};

export default BarChart;
