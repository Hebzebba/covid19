import React, { useState, useEffect } from "react";
//eslint-disable-next-line
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import "./chartStyle.css";
//eslint-disable-next-line
import { Card } from "@material-ui/core";

const Chat = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApi();
  }, [setDailyData]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Infected",
            borderColor: "red",
            backgroundColor: "rgba(255.0.0.0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className="chart-area">{lineChart}</div>;
};

export default Chat;
