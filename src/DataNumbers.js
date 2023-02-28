const DataNumbers = (props) => {



    let P = props.principal;
    let T = props.length;
    let R = props.rate;


    let top = P * (R / 12);
    let bottom = (1 - (1 + (R / 12))**(-12 * T));
    let monthlyPayment = (top / bottom);

    return (
        <div className="dataNumbers">
            <h1 className="dataNumberHeader">How much you will pay</h1>

            <div className="monthlyPaymentDiv">
                <h3 className="monthlyPayment">Monthly </h3>
                <p className="monthlyPaymentAmount">Total Monthly Payment: ${monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                <p className="monthlyInterestAmount">Interest Paid Per Month: ${}</p>
            </div>

            <div className="annualPaymentDiv">
                <h3 className="annualPayment">Annually</h3>
                <p className="annualPaymentAmount">Total Annual Payments: ${(monthlyPayment * 12).toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                <p className="annualInterestAmount">Interest Paid Per Year:</p>
            </div>

            <div className="totalPaymentDiv">
                <h3 className="totalPayment">Total Payment:</h3>
                <p className="totalPaymentAmount">...</p>
                <p className="totalInterestAmount">...</p>
            </div>

        </div>
    );
}
 
export default DataNumbers;