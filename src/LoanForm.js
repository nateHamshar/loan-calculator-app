import "./LoanForm.css";

const LoanForm = () => {
    return (
        <div className="loanFormDiv">
            <form action="" className="loanForm">
                <div className="inputDiv">
                    <label htmlFor="loanAmount" className="loanLabel">What size is the loan, excluding commas?</label>
                    <input id="loanAmount" required type="number" min="0" step="0.01" className="loanAmount inputField" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="loanLength" className="loanLabel">What is the length of the loan in years?</label>
                    <input id="loanLength" required type="number" min="0" step="0.1" className="loanLengthInput inputField" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="loanInterest" className="loanLabel">What is the interest rate? (ex 3.54)</label>
                    <input id="loanInterest" required type="number" step=".01" className="loanInterest inputField" />
                </div>
                <div className="inputDiv submitDiv">
                <input type="" id="loanSumbitButtom" className="loanSubmitButton" value="Calculate"></input>
                </div>
            </form>
        </div>
    );
}
 
export default LoanForm;