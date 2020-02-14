import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./Footer.module.css";

const getChartData = (correct, incorrect) => {
  const data = {
    labels: [`${correct}% Верно`, `${incorrect}% Не верно`],
    datasets: [
      {
        data: [correct, incorrect],
        backgroundColor: ["#ff6b08", "#d6d6d6"],
        hoverBackgroundColor: ["#ff6b08", "#d6d6d6"],
        borderWidth: 0
      }
    ]
  };
  return data;
};

const options = {
  legend: {
    display: true
  },
  rotation: 0.2 * Math.PI - (25 / 180) * Math.PI,
  maintainAspectRatio: true,
  tooltips: {
    mode: "point",
    callbacks: {
      label: (tooltipItem, data) => {
        let label = data.labels[tooltipItem.index] || "";
        return `${label}`;
      }
    }
  }
};

const ResultProgressBar = ({ correctAnswers, allAnswers }) => {
  const chartCorrect = Math.ceil((correctAnswers * 100) / allAnswers);
  const chartInCorrect = 100 - chartCorrect;

  return (
    <footer className={styles.footerMain}>
      <div className={styles.container}>
        <Pie
          data={() => getChartData(chartCorrect, chartInCorrect)}
          options={options}
          width={50}
          height={50}
        />
      </div>
    </footer>
  );
};

export default ResultProgressBar;
