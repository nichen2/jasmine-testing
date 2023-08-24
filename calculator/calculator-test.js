
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 0.055 })).toEqual('108.53');
  expect(calculateMonthlyPayment({ amount: 200000, years: 15, rate: 0.05 })).toEqual('1581.59');
  expect(calculateMonthlyPayment({ amount: 123456, years: 12, rate: 0.03 })).toEqual('1021.95');
  expect(calculateMonthlyPayment({ amount: 4444444, years: 4, rate: 0.04 })).toEqual('100351.34');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const value1 = calculateMonthlyPayment({ amount: 12345, years: 5, rate: 3.2 });
  expect(value1.split('.')[1].length).toEqual(2);
  const value2 = calculateMonthlyPayment({ amount: 6000, years: 3, rate: 1.5 });
  expect(value2.split('.')[1].length).toEqual(2);
  const value3 = calculateMonthlyPayment({ amount: 7890, years: 4, rate: 2.5 });
  expect(value3.split('.')[1].length).toEqual(2);
});

/// etc
