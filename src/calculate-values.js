function calculateFV(pv, rate, period) {

    let fv = pv * Math.pow((1 + rate), period - 1);
    return fv;
}

module.exports = { 
    calculateFV 
};