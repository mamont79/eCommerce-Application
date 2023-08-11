import { describe, it } from 'vitest';
import isValidDateOfBirth from './isValidAge';
import USER_MIN_AGE from './constants';

describe('User age', () => {
  const currentDate = new Date();
  it('shold conform to the simple pattern "example@mail.ru"', () => {
    const minimumValidDateOfBirth = new Date(
      currentDate.getFullYear() - 13,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    expect(isValidDateOfBirth(minimumValidDateOfBirth)).toBeTruthy();
  });
  it(`must be >= ${USER_MIN_AGE} years`, () => {
    const underagedDateOfBirth = new Date(
      currentDate.getFullYear() - 13,
      currentDate.getMonth() + 1,
      currentDate.getDate() + 1
    );
    expect(isValidDateOfBirth(underagedDateOfBirth)).toBeFalsy();
  });
});
