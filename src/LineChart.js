import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import "./LineChart.css";

const LineChart = ({dataForChart}) => {


    return (
        <div className="lineChartDiv">
            <Line data={dataForChart} />
        </div>
)}

export default LineChart;