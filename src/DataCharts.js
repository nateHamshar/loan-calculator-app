
import { useState } from "react";
import LineChart from "./LineChart";

const DataCharts = ({dataArray, length}) => {

    // const dataArray = [{
    //     id: 1,
    //     interestPaidFromMonthlyPayment: 0,
    //     amountPaidToPrincipal: 0,
    //     cummulativeInterestPaid: 0,
    //     newBalance: 0
    // // }];

    // const [dataArray, setDataArray] = useState([{
    //     id: 1,
    //     interestPaidFromMonthlyPayment: 0,
    //     amountPaidToPrincipal: 0,
    //     cummulativeInterestPaid: 0,
    //     newBalance: 0
    // }])

    const [dataForChart, setDataForChart] = useState({
        labels: dataArray.map((object) => object.id
        ),
        datasets: [{
            label: "Cummulative Interest Paid",
            data: dataArray.map((object) => object.cummulativeInterestPaid),
            borderColor: "darkblue"
        },
        {
            label: "Principal Balance",
            data: dataArray.map((object) => object.newBalance),
            borderColor: "orangered"
        }],
    })


    // let newPrincipal = principal;
    // let totalInterestPaid = 0;

    // let j = 2

    // for (let i = 1; i <= length * 12; i++) {    

    //     dataArray.push({
    //         id: j,
    //         interestPaidFromMonthlyPayment: (newPrincipal * (rate / 12)),
    //         amountPaidToPrincipal: (monthlyPayment - ((newPrincipal * (rate / 12)))),
    //         cummulativeInterestPaid: totalInterestPaid + (newPrincipal * (rate / 12)),
    //         newBalance: newPrincipal - (monthlyPayment - ((newPrincipal * (rate / 12))))
    //     });
    //     newPrincipal -= (monthlyPayment - ((newPrincipal * (rate / 12))))
    //     totalInterestPaid += (newPrincipal * (rate / 12));
    //     j++;
    // }


    return (
        <div className="DataCharts">
            <LineChart dataForChart={dataForChart}  />
        </div>
    )
}
 
export default DataCharts;