import {capitalize} from './app';

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