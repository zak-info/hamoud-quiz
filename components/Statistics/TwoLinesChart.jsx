import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const salesData = {
    months: ["January", "February", "March", "April", "May", "June"],
    dataset1: [100, 150, 200, 120, 180, 250],
    dataset2: [80, 130, 180, 110, 160, 230]
};

function TwoLinesChart() {
    const data = {
        labels: salesData.months,
        datasets: [
            {
                label: "Line 1",
                data: salesData.dataset1,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.5,
                fill: false,
            },
            {
                label: "Line 2",
                data: salesData.dataset2,
                borderColor: "rgb(255, 99, 132)",
                tension: 0.5,
                fill: false,
            }
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
            },
        },
        responsive: true,
        scales: {
            
            
        },
    };

    return (
        <div>
            <h1 className="font-bold text-3xl text-center mt-10">
                Two Lines Chart using ChartJS
            </h1>
            <div  className="w-full h-full cursor-pointer">
                <Line data={data} options={options}></Line>
            </div>
        </div>
    );
}

export default TwoLinesChart;
