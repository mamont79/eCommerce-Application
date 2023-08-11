import { describe, it } from 'vitest';
import isValidPassword from './isValidPassword';
import PASSWORD_MIN_LENGTH from './constants';

describe('Password validator', () => {
  it('validates correct password', () => {
    const minLengthPassword = 'Aaaaaaa8';
    expect(isValidPassword(minLengthPassword)).toBeTruthy();
  });
  it(`checks min length of ${PASSWORD_MIN_LENGTH} characters`, () => {
    const tooShortPassword = 'Aaaaaa8';
    expect(isValidPassword(tooShortPassword)).toBeFalsy();
  });
  it('checks password has min 1 uppercase letter', () => {
    const noUppercasePassword = 'aaaaaaa8';
    expect(isValidPassword(noUppercasePassword)).toBeFalsy();
  });
  it('checks password has min 1 lowercse letter', () => {
    const noLowercasePassword = 'AAAAAAA8';
    expect(isValidPassword(noLowercasePassword)).toBeFalsy();
  });
  it('checks password has min 1 digit', () => {
    const noFiguresPassword = 'Aaaaaaaa';
    expect(isValidPassword(noFiguresPassword)).toBeFalsy();
  });
});
