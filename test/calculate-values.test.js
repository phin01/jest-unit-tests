const Calculator = require('../src/calculate-values');

test('Only one payment = equal to Future Value', () => {
    // Operation
    const amount = Calculator.calculateFV(100, 0.0175, 1);

    // Expected result
    expect(amount).toBe(100);
});