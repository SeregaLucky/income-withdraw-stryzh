import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./ResultProgressBar.module.css";

const getChartData = (correct, incorrect) => {
  const data = {
    labels: [`${correct}% Income`, `${incorrect}% Withdraw`],
    datasets: [
      {
        data: [correct, incorrect],
        backgroundColor: ["#32B76C", "#ff6347"],
        hoverBackgroundColor: ["#32B76C", "#ff6347"],
        borderWidth: 0
      }
    ]
  };
  return data;
};

const options = {
  legend: {
    display: true
  }
  // rotation: 0.2 * Math.PI - (25 / 180) * Math.PI,
  // maintainAspectRatio: true,
  // tooltips: {
  //   mode: "point",
  //   callbacks: {
  //     label: (tooltipItem, data) => {
  //       let label = data.labels[tooltipItem.index] || "";
  //       return `${label}`;
  //     }
  //   }
  // }
};

const ResultProgressBar = ({ income, all }) => {
  const chartIncome = Math.ceil((income * 100) / all);
  const chartWithdraw = 100 - chartIncome;

  return (
    <div className={styles.pie}>
      <Pie
        data={() => getChartData(chartIncome, chartWithdraw)}
        options={options}
        width={50}
        height={50}
      />
    </div>
  );
};

export default ResultProgressBar;
