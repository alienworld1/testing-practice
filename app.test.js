import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './app';

test('capitalize object to Object', () => (
    expect(capitalize('object')).toBe('Object')
));

test('capitalize apple tree to Apple tree', () => (
    expect(capitalize('apple tree')).toBe('Apple tree')
));

test('string starting with a number remains unchanged', () => (
    expect(capitalize('1 is a very cool number')).toBe('1 is a very cool number')
));

test('string starting with a capital letter remains unchanged', () => (
    expect(capitalize('Object')).toBe('Object')
));

test('reverse object to tcejbo', () => (
    expect(reverseString('object')).toBe('tcejbo')
));

test('reverse xyz to zyx', () => (
    expect(reverseString('xyz')).toBe('zyx')
));

test('calculator.add(3, 4) gives 7', () => (
    expect(calculator.add(3, 4)).toBe(7)
));

test('calculator.subtract(10, 3) gives 7', () => (
    expect(calculator.subtract(10, 3)).toBe(7)
));

test('calculator multiply(3, 4) gives 12', () => (
    expect(calculator.multiply(3, 4)).toBe(12)
));

test('calculator.divide(12, 4) gives 3', () => (
    expect(calculator.divide(12, 4)).toBe(3)
));

test('caesar cipher: single letter shift', () => (
    expect(caesarCipher('abcd', 1)).toBe('bcde')
));

test('caesar cipher: multiple letter shift', () => {
    expect(caesarCipher('abcd', 3)).toBe('defg');
    expect(caesarCipher('abcd', 5)).toBe('fghi');
});

test('caesar cipher: cycling from z to a', () => (
    expect(caesarCipher('xyz', 2)).toBe('zab')
));

test('caesar cipher: keeps the same case', () => (
    expect(caesarCipher('AbCd', 1)).toBe('BcDe')
));

test('caesar cipher: punctuation', () => (
    expect(caesarCipher('abc? d!', 2)).toBe('cde? f!')
));

test('analyzeArray: correct average, min, max and length', () => (
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })
));
