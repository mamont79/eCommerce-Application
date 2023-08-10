import { describe, it } from 'vitest';
import isValidEmail from './isValidEmail';

describe('Email', () => {
  it('shold conform to the simple pattern "example@mail.ru"', () => {
    const validEmail = 'example@mail.ru';
    expect(isValidEmail(validEmail)).toBeTruthy();
  });
  it('can be this short "a@s.c"', () => {
    const shortestValidEmail = 'a@s.c';
    expect(isValidEmail(shortestValidEmail)).toBeTruthy();
  });
  it('shold consist of prefix and domain separated by "@" sign', () => {
    const emailWithdoubleAtSign = 'example@@mail.ru';
    expect(isValidEmail(emailWithdoubleAtSign)).toBeFalsy();
  });
});
