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

const isUpperCase = string => /^[A-Z]+$/.test(string); 
const isAlphabet = string => /^[a-zA-Z]$/.test(string);

const caesarCipher = (string, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedText = '';

    for (const letter of string) {
        if (!isAlphabet(letter)) {
            encryptedText = encryptedText.concat(letter);
            continue;
        };

        const index = alphabet.indexOf(letter.toLowerCase());
        const newIndex = (index + shift) % 26;

        const shiftedLetter = alphabet.charAt(newIndex)
        encryptedText = encryptedText.concat(isUpperCase(letter)? shiftedLetter.toUpperCase(): shiftedLetter); 
    }

    return encryptedText;
}

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
};
