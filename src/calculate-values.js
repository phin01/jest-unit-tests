function calculateFV(pv, rate, period) {

    let fv = pv * Math.pow((1 + rate), period - 1);
    return roundValue(fv);
}

function roundValue(amount) {

    const precision = 100;
    const roundedValue = Math.round((amount + Number.EPSILON) * precision) / precision;

    return roundedValue;
}

module.exports = { 
    calculateFV,
    roundValue
};