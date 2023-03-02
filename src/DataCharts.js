
import { useState } from "react";
import LineChart from "./LineChart";
import "./DataCharts.css";


const DataCharts = ({dataArray, length}) => {


    const [dataForChart] = useState({
        labels: dataArray.map((object) => object.id
        ),
        datasets: [{
            label: "Cummulative Interest Paid",
            data: dataArray.map((object) => object.cummulativeInterestPaid),
            borderColor: "darkblue",
            pointStyle: "line"
        },
        {
            label: "Principal Balance",
            data: dataArray.map((object) => object.newBalance),
            borderColor: "orangered",
            pointStyle: "line"
        }],
    })



    return (
        <div className="dataCharts">
            <h1 className="amortizationChartHeader">Amortization Chart</h1>
            <LineChart dataForChart={dataForChart} />
        </div>
    )
}
 
export default DataCharts;