const palindromes = function (input) {

    const plainInput = input.replace(/[\W]|_/g, '').toLowerCase();
    return plainInput === plainInput.split('').reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
