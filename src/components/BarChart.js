import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ expenses }) => {
  // Group expenses by month and sum the amounts
  const monthlyTotals = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString("default", { month: "short" }); // Get the short month name (e.g., "Jan")
    const amount = parseFloat(expense.amount);
    
    if (!acc[month]) {
      acc[month] = 0;
    }
    
    acc[month] += amount;
    
    return acc;
  }, {});

  // Prepare the data for the Bar chart
  const months = Object.keys(monthlyTotals).sort(); // Sort months in order (optional)
  const dataValues = months.map((month) => monthlyTotals[month]);
  const backgroundColor = "#36A2EB"; // Set the background color for the bars

  const data = {
    labels: months, // Months (e.g., "Jan", "Feb", "Mar")
    datasets: [
      {
        label: "Monthly Expenses",
        data: dataValues, // Total expenses for each month
        backgroundColor: backgroundColor, // Color for each bar
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Expenses",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
