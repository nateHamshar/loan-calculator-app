const DataNumbers = () => {
    return (
        <div className="dataNumbers">
            <h1 className="dataNumberHeader">How much you will pay</h1>

            <div className="monthlyPaymentDiv">
                <h3 className="monthlyPayment">Monthly Payment: </h3>
                <p className="monthlyPaymentAmount">...</p>
                <p className="monthlyInterestAmount">...</p>
            </div>

            <div className="annualPaymentDiv">
                <h3 className="annualPayment">Annual Payment: </h3>
                <p className="annualPaymentAmount">...</p>
                <p className="annualInterestAmount">...</p>
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