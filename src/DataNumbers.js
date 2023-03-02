import DataCharts from "./DataCharts";
import "./DataNumbers.css";

const DataNumbers = (props) => {

    let P = props.principal;
    let T = props.length;
    let R = props.rate;

    let top = P * (R / 12);
    let bottom = (1 - (1 + (R / 12))**(-12 * T));
    
    let monthlyPayment = (top / bottom);
/////////////////////////////////////////////////////////
    
    const dataArray = [{
        id: `Month: 0`,
        interestPaidFromMonthlyPayment: 0,
        amountPaidToPrincipal: 0,
        cummulativeInterestPaid: 0,
        newBalance: 0
    }];

    let newPrincipal = P;
    let rate = R;
    let totalInterestPaid = 0;

    let j = 1;

    for (let i = 1; i <= T * 12; i++) {    

        dataArray.push({
            id: `Month: ${j}`,
            interestPaidFromMonthlyPayment: (newPrincipal * (rate / 12)),
            amountPaidToPrincipal: (monthlyPayment - ((newPrincipal * (rate / 12)))),
            cummulativeInterestPaid: totalInterestPaid + (newPrincipal * (rate / 12)),
            newBalance: newPrincipal - (monthlyPayment - ((newPrincipal * (rate / 12))))
        });
        newPrincipal -= (monthlyPayment - ((newPrincipal * (rate / 12))))
        totalInterestPaid += (newPrincipal * (rate / 12));
        j++;
    }
    let totalLoanPayment;
    totalLoanPayment = (parseFloat(totalInterestPaid) + parseFloat(P)).toLocaleString("en-US", {maximumFractionDigits: 2});
    return (
        <div className="dataNumbers">
            <h1 className="dataNumbersHeader">Your Projected Payments</h1>

            <div className="monthlyPaymentDiv paymentDiv">
                <h3 className="monthlyPayment paymentHeader">Monthly Payment</h3>
                <p className="monthlyPaymentAmount paymentText">Total Monthly Payment: <span className="dollarAmount">${monthlyPayment.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2})}</span></p>
            </div>


            <div className="totalPaymentDiv paymentDiv">
                <h3 className="totalPayment paymentHeader">Total Payments</h3>
                <p className="totalPaymentAmount paymentText">Total Loan Payments: <span className="dollarAmount">${totalLoanPayment}</span></p>
                <p className="totalInterestAmount paymentText">Total Interest Paid: <span className="dollarAmount">${totalInterestPaid.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2})}</span></p>
            </div>
            <DataCharts 
                monthlyPayment={monthlyPayment}
                principal={P}
                rate={R}
                length={T}
                dataArray={dataArray}
            />
        </div>
    );
}
 
export default DataNumbers;