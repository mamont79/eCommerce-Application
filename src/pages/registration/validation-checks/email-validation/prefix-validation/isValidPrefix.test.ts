import { describe, it } from 'vitest';
import isValidPrefix from './isValidPrefix';
import VALID_SPECIAL_CHARACTERS from './constants';

describe('Email prefix (part of an email before "@"-sign)', () => {
  it('should conform to the form "example"', () => {
    const validPrefix = 'example';
    expect(isValidPrefix(validPrefix)).toBeTruthy();
  });
  it(`may contain special characters: ${VALID_SPECIAL_CHARACTERS.join(
    ' '
  )}`, () => {
    const validPrefix = 'ex.a_m-ple';
    expect(isValidPrefix(validPrefix)).toBeTruthy();
  });
  it('should not exceed 64 characters', () => {
    const tooLongPrefix = Array(65).fill('a').toString();
    expect(isValidPrefix(tooLongPrefix)).toBeFalsy();
  });
  it('should not contain illigal characters', () => {
    const prefixWithIllegalCharsInPrefix = 'asf,ad';
    expect(isValidPrefix(prefixWithIllegalCharsInPrefix)).toBeFalsy();
  });
  it('shold not start with a special character', () => {
    const prefixStartWithSpecialChar = '_afaa';
    expect(isValidPrefix(prefixStartWithSpecialChar)).toBeFalsy();
  });
  it('should not end with a special character', () => {
    const prefixEndWithSpecialChar = 'afaa.';
    expect(isValidPrefix(prefixEndWithSpecialChar)).toBeFalsy();
  });
  it('should not have two special characters in a row', () => {
    const prefixWithTwoNeighbouringSpecialChars = 'a_.faa';
    expect(isValidPrefix(prefixWithTwoNeighbouringSpecialChars)).toBeFalsy();
  });
});
