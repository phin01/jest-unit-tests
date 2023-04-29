const Calculator = require('../src/calculate-values');

expect.extend({

    AddsUpTo(array, amount){
        const arraySum = array.reduce((a, b) => Calculator.roundValue(a + b), 0);
        const result = arraySum === Calculator.roundValue(amount);
        
        return {
            message: () => `Sum ${arraySum} should be ${amount}`,
            pass: result
        }
    }

});