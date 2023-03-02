import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import "./LineChart.css";

const LineChart = ({dataForChart}) => {

    console.log(dataForChart);
    
    return (
        <div className="lineChartDiv">
            <Line data={dataForChart} 
                  className="ammortizationChart"
                  options={{maintainAspectRatio: false,
                            scales: {
                                y: {
                                    min: 0,
                                }
                            },          
                  }
                 } />
        </div>
)}


export default LineChart;