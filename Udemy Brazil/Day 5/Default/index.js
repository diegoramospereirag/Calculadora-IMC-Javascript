function carLoan(loan, rate = 2.9, years = 3) {
  return ((loan * rate) / 100) * years + loan;
}

console.log(carLoan(20000));
