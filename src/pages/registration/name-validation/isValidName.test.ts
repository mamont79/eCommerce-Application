import { describe, it } from 'vitest';
import isValidName from './isValidName';

describe('User name or second name', () => {
  it('must conform the pattern "Abcd"', () => {
    const validName = 'Abcd';
    expect(isValidName(validName)).toBeTruthy();
  });
  it('can be in russian', () => {
    const russianName = 'Кирилл';
    expect(isValidName(russianName)).toBeTruthy();
  });
  it('must be min 1 char long', () => {
    const nullName = '';
    expect(isValidName(nullName)).toBeFalsy();
  });
  it('must NOT include non-letters', () => {
    expect(isValidName('Amvr0sy')).toBeFalsy();
    expect(isValidName('Amvr_sy')).toBeFalsy();
    expect(isValidName('Amvr$sy')).toBeFalsy();
  });
});
