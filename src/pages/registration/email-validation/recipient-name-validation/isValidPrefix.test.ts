import { describe, it } from 'vitest';
import isValidPrefix from './isValidPrefix';

describe('isValidPrefix', () => {
  it('should return false if prefix is more than 64 characters long', () => {
    const tooLongPrefix = Array(65).fill('a').toString();
    expect(isValidPrefix(tooLongPrefix)).toBeFalsy();
  });
});
