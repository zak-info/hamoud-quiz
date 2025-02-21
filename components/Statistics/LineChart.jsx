"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "January", sales: 100 },
  { month: "February", sales: 150 },
  { month: "March", sales: 200 },
  { month: "April", sales: 120 },
  { month: "May", sales: 180 },
  { month: "June", sales: 250 },
];
const salesData2 = [
  { month: "January", sales: 70 },
  { month: "February", sales: 50 },
  { month: "March", sales: 20 },
  { month: "April", sales: 10 },
  { month: "May", sales: 80 },
  { month: "June", sales: 50 },
];

const lineData = []
function LineChart() {
  const data = {
    labels: lineData.map((data) => data?.month),
    datasets: [
      {
        label: "Revenue",
        data: lineData.map((data) => data?.sales),
        borderColor: "orange",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "orange");
          gradient.addColorStop(1, "white");
          return gradient;
        },
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
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">
        Benefits of this month
      </h1>
      <div className="w-full h-full  cursor-pointer">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;