import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import "../cssFiles/LineChart.css";


const LineChart = ({dataForChart}) => {

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
)
}


export default LineChart;