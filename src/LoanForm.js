import { useState } from "react";
import DataCharts from "./DataCharts";
import DataNumbers from "./DataNumbers"
import "./LoanForm.css";

const LoanForm = ({dataObject}) => {


    const [principal, setPrincipal] = useState();
    const [length, setLength] = useState();
    const [rate, setRate] = useState();

    const calculatePayments = () => {
        setPrincipal(document.getElementById("loanAmount").value);
        setLength((document.getElementById("loanLength").value) * 12);
        setRate((document.getElementById("loanInterest").value) / 100);
    }
    return (
        <div className="all">
        <div className="loanFormDiv">
            <form action="#" className="loanForm">
                <div className="inputDiv">
                    <label htmlFor="loanAmount" className="loanLabel">What size is the loan, excluding commas?</label>
                    <input id="loanAmount" required type="number" min="0" step="0.01" className="loanAmount inputField" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="loanLength" className="loanLabel">What is the length of the loan in years?</label>
                    <input id="loanLength" required type="number" min="0" step="0.1" className="loanLengthInput inputField" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="loanInterest" className="loanLabel">What is the interest rate?</label>
                    <input id="loanInterest" required type="number" step=".01" className="loanInterest inputField" />
                </div>
                <div className="inputDiv submitDiv">
                <input type="" id="loanSumbitButtom" className="loanSubmitButton" value="Calculate" onClick={() => {calculatePayments()}}></input>
                </div>
            </form>
        </div>
        <DataNumbers principal={principal} length={length} rate={rate} />
        <DataCharts />
        </div>
    );
}
 
export default LoanForm;