import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

// components/PieChart.js
import { Pie } from 'react-chartjs-2';

// const PieData = [
//   { category: "Category A", value: 300 },
//   { category: "Category B", value: 50 },
//   { category: "Category C", value: 100 },
//   { category: "Category D", value: 80 },
//   { category: "Category E", value: 120 },
// ];

// const PieData = []

function PieChart({PieData}) {
  const data = {
    labels: PieData.map((data) => data?.item),
    datasets: [
      {
        label: "Sales",
        data: PieData.map((data) => data?.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
  };

  return (
    <div className="w-full h-full cursor-pointer">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
