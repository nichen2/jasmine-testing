window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {
    amount: 0,
    years: 0,
    rate: 0
  };
  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");
  amount.addEventListener("input",function(e){
    values.amount = e.target.value;
    calculateMonthlyPayment(values);
  });
  years.addEventListener("input",function(e){
    values.years = e.target.value;
    calculateMonthlyPayment(values);
  });
  rate.addEventListener("input",function(e){
    values.rate = e.target.value;
    calculateMonthlyPayment(values);
  });
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = values.rate / 12;
  let n = values.years * 12;
  let x = (p * i) / (1 - (1 + i)**-n);
  let num = x.toFixed(2);
  let result = "" + num;
  console.log(result);
  return result;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const month = document.querySelector("#monthly-payment");
  month.innerHTML = monthly;
}
