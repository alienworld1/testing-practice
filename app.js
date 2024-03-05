const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const reverseString = string => {
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse = reverse.concat(string.charAt(i));
    }
    return reverse;
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

export {
    capitalize,
    reverseString,
    calculator,
};
