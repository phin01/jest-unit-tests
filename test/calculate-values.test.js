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

    test('2+ decimals, 1.005= => Round up to 1.01', () => {
        // Operation
        const amount = Calculator.roundValue(1.005);

        // Expected result
        expect(amount).toBe(1.01);
    });

    test('2+ decimals, 0.005= => Round up to 0.01', () => {
        // Operation
        const amount = Calculator.roundValue(0.005);

        // Expected result
        expect(amount).toBe(0.01);
    });
});

describe('calculatePmt', () => {
    
    test('Number of payments returned is correct', () => {
        // Given
        const numberOfPayments = 6;
        const amount = 200;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);

        // Expected result
        expect(payments.length).toBe(numberOfPayments);
    });

    test('Total amount => Single payment value', () => {
        // Given
        const numberOfPayments = 1;
        const amount = 76;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        const sumOfPayments = payments.reduce((a, b) => a + b, 0);
        
        // Expected result
        expect(sumOfPayments).toBe(amount);
    });

    test('Total amount => Sum of all payments', () => {
        // Given
        const numberOfPayments = 12;
        const amount = 1200;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        const sumOfPayments = payments.reduce((a, b) => a + b, 0);
        
        // Expected result
        expect(sumOfPayments).toBe(amount);
    });

    test('Total amount (with decimals) => Sum of all payments', () => {
        // Given
        const numberOfPayments = 12;
        const amount = 1200.60;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        const sumOfPayments = payments.reduce((a, b) => Calculator.roundValue(a + b), 0);
        
        // Expected result
        expect(sumOfPayments).toBe(amount);
    });

    test('Total amount => Sum of all payments (with rounding adjustment to first payment)', () => {
        // Given
        const numberOfPayments = 3;
        const amount = 100;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        const sumOfPayments = payments.reduce((a, b) => a + b, 0);
        
        // Expected result
        expect(sumOfPayments).toBe(amount);
    });

    test('Total amount (with 3+ decimals) => Sum of all payments (with rounding adjustment to first payment)', () => {
        // Given
        const numberOfPayments = 16;
        const amount = 487.187424;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        const sumOfPayments = payments.reduce((a, b) => Calculator.roundValue(a + b), 0);
        
        // Expected result
        expect(sumOfPayments).toBe(Calculator.roundValue(amount));
    });
});