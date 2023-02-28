const DataCharts = ({monthlyPayment, principal, rate, length}) => {
    const dataObject = [{
        id: 1,
        interestPaidFromMonthlyPayment: 0,
        amountPaidToPrincipal: 0,
        cummulativeInterestPaid: 0,
        newBalance: 0
    }];

    let newPrincipal = principal;
    let totalInterestPaid = 0;

    let j = 2

    for (let i = 1; i <= length * 12; i++) {    

        dataObject.push({
            id: j,
            interestPaidFromMonthlyPayment: (newPrincipal * (rate / 12)),
            amountPaidToPrincipal: (monthlyPayment - ((newPrincipal * (rate / 12)))),
            cummulativeInterestPaid: totalInterestPaid + (newPrincipal * (rate / 12)),
            newBalance: newPrincipal - (monthlyPayment - ((newPrincipal * (rate / 12))))
        });
        newPrincipal -= (monthlyPayment - ((newPrincipal * (rate / 12))))
        totalInterestPaid += (newPrincipal * (rate / 12));
        j++;
    }

    console.log(dataObject)

    return (
        <div className="DataCharts">
            
        </div>
    )
}
 
export default DataCharts;