function calculateFV(pv, rate, period) {

    let fv = pv * Math.pow((1 + rate), period - 1);
    return fv;
}

function roundValue(amount) {

    const precision = 100;
    const roundedValue = Math.round(amount * precision) / precision

    return roundedValue;
}

module.exports = { 
    calculateFV,
    roundValue
};