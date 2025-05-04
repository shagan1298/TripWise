import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses }) => {
  // Group expenses by category and sum the amounts
  const categoryTotals = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = acc[category] || 0;
    acc[category] += parseFloat(amount);
    return acc;
  }, {});

  // Prepare the data for the Pie chart
  const labels = Object.keys(categoryTotals);
  const dataValues = Object.values(categoryTotals);
  const backgroundColors = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF9F40", "#9966FF"
  ]; // Add more colors as needed

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expense by Category",
        data: dataValues,
        backgroundColor: backgroundColors.slice(0, labels.length),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
