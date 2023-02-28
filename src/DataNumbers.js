
import DataCharts from "./DataCharts";
import "./DataNumbers.css";

const DataNumbers = (props) => {

    let P = props.principal;
    let T = props.length;
    let R = props.rate;

    let top = P * (R / 12);
    let bottom = (1 - (1 + (R / 12))**(-12 * T));
    
    let monthlyPayment = (top / bottom);


    return (
        <div className="dataNumbers">
            <h1 className="dataNumbersHeader">Your Projected Payments</h1>

            <div className="monthlyPaymentDiv paymentDiv">
                <h3 className="monthlyPayment paymentHeader">Monthly Payment</h3>
                <p className="monthlyPaymentAmount paymentText">Total Monthly Payment: <span className="dollarAmount">${monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></p>
                <p className="monthlyInterestAmount paymentText">Interest Paid Per Month: <span className="dollarAmount">${`0.00`}</span></p>
            </div>


            <div className="totalPaymentDiv paymentDiv">
                <h3 className="totalPayment paymentHeader">Total Payment</h3>
                <p className="totalPaymentAmount paymentText">Total Loan Payments: <span className="dollarAmount">${`0.00`}</span></p>
                <p className="totalInterestAmount paymentText">Total Interest Paid: <span className="dollarAmount">${`0.00`}</span></p>
            </div>

            <DataCharts 
                monthlyPayment={monthlyPayment}
                principal={P}
                rate={R}
                length={T}
            />
        </div>
    );
}
 
export default DataNumbers;