import { useState } from "react";
import DataNumbers from "./DataNumbers";
import "../cssFiles/LoanForm.css";

const LoanForm = () => {

    const [displayData, setDisplayData] = useState(false);
    const [principal, setPrincipal] = useState(0);
    const [length, setLength] = useState(0);
    const [rate, setRate] = useState(0);

    const calculatePayments = () => {
        setPrincipal(document.getElementById("loanAmount").value);
        setLength(document.getElementById("loanLength").value);
        setRate((document.getElementById("loanInterest").value) / 100);
        setDisplayData(true);
    }

    return (
        <div className="all">
        <div className="loanFormDiv">
            <form action="/" className="loanForm">
                <div className="inputDiv">
                    <label htmlFor="loanAmount" className="loanLabel">What size is the loan, excluding commas?</label>
                    <input id="loanAmount" required type="number" min="0"  className="loanAmount inputField" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="loanLength" className="loanLabel">What is the length of the loan in years?</label>
                    <input id="loanLength" required type="number" min="0"  className="loanLengthInput inputField"/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="loanInterest" className="loanLabel">What is the interest rate?</label>
                    <input id="loanInterest" required type="number" min="0" step=".01" className="loanInterest inputField" />
                </div>
                <div className="inputDiv submitDiv">
                <input type="button" id="loanSumbitButtom" className="loanSubmitButton" value="Calculate" onClick={() => {calculatePayments()}}></input>
                </div>
            </form>
        </div>
        {displayData && <DataNumbers 
                            principal={principal} 
                            length={length} 
                            rate={rate} /> 
        }
        </div>


    );
}
 
export default LoanForm;