const fibonacci = function(numIndex) {
    numIndex = Number.parseInt(numIndex);
    let previous = 0;
    let current = 1;
    let next;
if (numIndex > 0) {
    for (let index = 1; index < numIndex; index++) {
        next = previous + current;
        previous = current;
        current = next;
    }

    return current;

} else if (numIndex === 0) {
    return 0;
} else {
    return 'OOPS'
};
};

// Do not edit below this line
module.exports = fibonacci;
