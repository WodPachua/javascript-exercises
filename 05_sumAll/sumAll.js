const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR'
    } else if (start < end) {
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    } else if (start > end) {
        for (let i = end; i <= start; i++) {
            sum += i;
    }
}
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
