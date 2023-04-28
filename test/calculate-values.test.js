const Calculator = require('../src/calculate-values');

test('Only one payment => FV equal to Present Value', () => {
    // Operation
    const amount = Calculator.calculateFV(100, 0.0175, 1);

    // Expected result
    expect(amount).toBe(100);
});

test('4 payments => FV = PV with interest', () => {
    // Operation
    const amount = Calculator.calculateFV(500, 0.025, 4);

    // Expected result
    expect(amount).toBe(538.45);
});