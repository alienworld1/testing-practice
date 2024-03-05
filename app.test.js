import {
    capitalize,
    reverseString,
    calculator,
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
