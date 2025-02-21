import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// components/BarChart.js
import { Bar } from 'react-chartjs-2';

// const BarData = [
//   { month: "January", sales: 100 },
//   { month: "February", sales: 150 },
//   { month: "Januay", sales: 100 },
//   { month: "Februay", sales: 150 },
//   { month: "Januy", sales: 100 },
//   { month: "Febrry", sales: 150 },
// ];

// const BarData = []

function BarChart({BarData}) {
  const data = {
    labels: Object.entries(BarData).map(([key, data]) => key+" point"),
    datasets: [
      {
        label: "Points",
        data:  Object.entries(BarData).map(([key, data]) => data),
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgb(255, 159, 64)");
          gradient.addColorStop(1, "rgba(255, 159, 64, 0.2)");
          return gradient;
        },
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
    },
  };

  return (

    <div className="w-full h-full cursor-pointer">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
