function calculateFV(pv, rate, period) {

    let fv = pv * Math.pow((1 + rate), period - 1);
    return roundValue(fv);
}

function roundValue(amount) {

    const precision = 100;
    const round = parseFloat((amount * precision).toFixed(11));
    return Math.round(round) / precision;
}

module.exports = { 
    calculateFV,
    roundValue
};