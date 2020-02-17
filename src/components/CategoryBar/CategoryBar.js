import React from 'react';
import { Bar } from 'react-chartjs-2';
import T from 'prop-types';
import styles from './CategoryBar.module.css';

const getChartData = all => {
  const data = {
    labels: [...all.allKeys],
    datasets: [
      {
        // label: "Population",

        maxBarThickness: 120,
        // minBarLength: 20,
        data: [...all.allValues],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };
  return data;
};

const CategoryBar = ({ all, title }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <Bar
        data={getChartData(all)}
        // options={options}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

CategoryBar.propTypes = {
  all: T.shape({
    allKeys: T.arrayOf(T.string).isRequired,
    allValues: T.arrayOf(T.number).isRequired,
  }).isRequired,
  title: T.string.isRequired,
};

export default CategoryBar;
