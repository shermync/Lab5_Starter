// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber returns true for valid format', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for parentheses format', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for missing digits', () => {
    expect(isPhoneNumber('123-456')).toBe(false);
});

test('isPhoneNumber returns false for text input', () => {
    expect(isPhoneNumber('phone')).toBe(false);
});

test('isEmail returns true for valid email address', () => {
  expect(isEmail('testing@gmail.com')).toBe(true);
});

test('isEmail returns true for emails with underscores', () => {
  expect(isEmail('test_ing_@gmail.com')).toBe(true);
});

test('isEmail returns false for missing @ symbol', () => {
  expect(isEmail('testinggmail.com')).toBe(false);
});

test('isEmail returns true for emails with invalid domain', () => {
  expect(isEmail('testing@gmail')).toBe(false);
});

test('isStrongPassword returns true for passwords with max char (15)', () => {
  expect(isStrongPassword('A1234567890ABCD')).toBe(true);
});

test('isStrongPassword returns true for a valid strong password', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});

test('isStrongPassword returns false if it doesn\'t start with a letter', () => {
  expect(isStrongPassword('1234567890ABCD')).toBe(false);
});

test('isStrongPassword returns false if it\'s too short', () => {
  expect(isStrongPassword('Pas')).toBe(false);
});

test('isDate returns true for standard date', () => {
    expect(isDate('12/25/2026')).toBe(true);
});

test('isDate returns true for single digit date', () => {
    expect(isDate('1/1/2026')).toBe(true);
});

test('isDate returns false for 2 digit year', () => {
    expect(isDate('12/25/26')).toBe(false);
});

test('isDate returns false for dashes instead of slashes', () => {
    expect(isDate('12-25-2026')).toBe(false);
});

test('isHexColor returns true for 6 character hex', () => {
    expect(isHexColor('#f74fd2')).toBe(true);
});

test('isHexColor returns true for 3 character hex without hash', () => {
    expect(isHexColor('000')).toBe(true);
});

test('isHexColor returns false for invalid characters', () => {
    expect(isHexColor('#G12345')).toBe(false);
});

test('isHexColor returns false for wrong length', () => {
    expect(isHexColor('1234')).toBe(false);
});