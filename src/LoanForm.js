const LoanForm = () => {
    return (
        <div className="loanFormDiv">
            <form action="" className="loanForm">
                <div className="inputField">
                    <label htmlFor="loanAmount" className="loanAmountLabel">What size is the loan, excluding commas?</label>
                    <input id="loanAmount" required type="number" min="0" step="0.01" className="loanAmount" />
                </div>
                <div className="inputField">
                    <label htmlFor="loanLength" className="loanLengthLabel">What is the length of the loan in years?</label>
                    <input id="loanLength" required type="number" min="0" step="0.1" className="loanLengthInput" />
                </div>
                <div className="inputField">
                    <label htmlFor="loanInterest" className="loanInterestLabel">What is the interest rate? (ex 3.54)</label>
                    <input id="loanInterest" required type="number" step=".01" className="loanInterest" />
                </div>
                <div className="inputField">
                <input type="submit" id="loanSumbitButtom" className="loanSubmitButton"/>
                </div>
            </form>
        </div>
    );
}
 
export default LoanForm;