const Calculator = require('../src/calculate-values');

// Tests for calculateFV function
describe('calculateFV', () => {

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
});


// Tests for roundValue function
describe('roundValue', () => {
    
    test('No decimals => Return same number', () => {
        // Operation
        const amount = Calculator.roundValue(100);

        // Expected result
        expect(amount).toBe(100);
    });

    test('1 decimal => Return same number', () => {
        // Operation
        const amount = Calculator.roundValue(75.2);

        // Expected result
        expect(amount).toBe(75.2);
    });

    test('2 decimals => Return same number', () => {
        // Operation
        const amount = Calculator.roundValue(33.12);

        // Expected result
        expect(amount).toBe(33.12);
    });

    test('2+ decimals, .5+ => Round up', () => {
        // Operation
        const amount = Calculator.roundValue(50.2550001);

        // Expected result
        expect(amount).toBe(50.26);
    });

    test('2+ decimals, .5- => Round down', () => {
        // Operation
        const amount = Calculator.roundValue(50.254999);

        // Expected result
        expect(amount).toBe(50.25);
    });

    test('2+ decimals, .5= => Round up', () => {
        // Operation
        const amount = Calculator.roundValue(50.255);

        // Expected result
        expect(amount).toBe(50.26);
    });
});