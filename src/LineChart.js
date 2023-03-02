import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import "./LineChart.css";

const LineChart = ({dataForChart}) => {
    
    

    return (
        <div className="lineChartDiv">
            <Line data={dataForChart} 
                  style={{width: "95vw", height: "40vh"}} options={{maintainAspectRatio: false,
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