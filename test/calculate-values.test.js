const Calculator = require('../src/calculate-values');
require('./custom-matchers');

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


// Tests for calculatePmt function
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
        
        // Expected result
        expect(payments).AddsUpTo(amount);
        
    });

    test('Total amount => Sum of all payments', () => {
        // Given
        const numberOfPayments = 12;
        const amount = 1200;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);

        // Expected result
        expect(payments).AddsUpTo(amount);
    });

    test('Total amount (with decimals) => Sum of all payments', () => {
        // Given
        const numberOfPayments = 12;
        const amount = 1200.60;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        
        // Expected result
        expect(payments).AddsUpTo(amount);
        
    });

    test('Total amount => Sum of all payments (with rounding adjustment to first payment)', () => {
        // Given
        const numberOfPayments = 3;
        const amount = 100;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        
        // Expected result
        expect(payments).AddsUpTo(amount);
    });

    test('Total amount (with 3+ decimals) => Sum of all payments (with rounding adjustment to first payment)', () => {
        // Given
        const numberOfPayments = 16;
        const amount = 487.187424;
        
        // Operation
        const payments = Calculator.calculatePmt(amount, numberOfPayments);
        
        // Expected result
        expect(payments).AddsUpTo(amount);
        
    });
});


// Tests for custom matcher AddsUpTo
describe('AddsUpTo', () =>{

    test('Integer array sum', () => {
        // Given
        array = [1, 5, 2, 7];
        sum = 1+5+2+7;

        // Expected Result
        expect(array).AddsUpTo(sum);
    });

    test('Decimal array sum', () => {
        // Given
        array = [1.36, 5.12, 2.63, 7.95];
        sum = 1.36 + 5.12 + 2.63 + 7.95;

        // Expected Result
        expect(array).AddsUpTo(sum);
    });

    test('Test error path for Matcher', () => {
        // Given
        array = [1.3, 5.1, 2.6, 7.9];
        sum = 0;

        // Expected Result
        expect(array).not.AddsUpTo(sum);
    });
})