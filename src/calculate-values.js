function calculateFV(pv, rate, period) {

    let fv = pv * Math.pow((1 + rate), period - 1);
    return roundValue(fv);
}

function roundValue(amount) {

    const precision = 100;
    const roundedValue = Math.round((amount + Number.EPSILON) * precision) / precision;

    return roundedValue;
}

function calculatePmt(amount, numberOfPayments) {
    const basePayment = roundValue(roundValue(amount) / numberOfPayments);
    const payments = Array(numberOfPayments).fill(basePayment);

    //check if any rounding left over needs to be adjusted in the first payment
    const leftOverRounding = roundValue(amount - payments.reduce((a, b) => roundValue(a + b), 0));
    if(leftOverRounding != 0) {
        payments[0] = roundValue(payments[0] + leftOverRounding);
    }

    return payments;

}

module.exports = { 
    calculateFV,
    roundValue,
    calculatePmt
};