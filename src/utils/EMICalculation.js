/**
 * @param {object} loanObject
 */
function calculateEMI(loanObject) {
  const { principalAmount, interestRate, tentureYears } = loanObject;

  var loanAmount = principalAmount ? principalAmount : 0;
  var numberOfMonths = tentureYears >= 1 ? tentureYears * 12 : 0;
  var rateOfInterest = interestRate;
  var monthlyInterestRatio = rateOfInterest / 100 / 12;

  var top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
  var bottom = top - 1;
  var sp = top / bottom;
  var emi = loanAmount * monthlyInterestRatio * sp;
  var full = numberOfMonths * emi;
  var interest = full - loanAmount;

  const calculatedLoan = {
    emi: Math.round(emi),
    principalAmount: principalAmount,
    totalInterest: Math.round(interest),
    totalAmount: Math.round(full),
  };
  console.log(calculatedLoan);
  return calculatedLoan;
}

export default calculateEMI;
