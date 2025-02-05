
function calculateLoan(){
    const loanElement=document.getElementById('bil').value;
    const interestElement=document.getElementById('bill').value;
    const monthsEl=document.getElementById('bills').value;
   let interest=(loanElement*(interestElement*0.01))/monthsEl;
    let monthlyPayment=(loanElement/monthsEl+interest).toFixed(2);
    document.querySelector(
        ".payment"
      ).innerHTML = `Monthly Payment: ${monthlyPayment}`;

}
