import { describe, it } from 'vitest';
import isValidDomain from './isValidDomain';
import { MAX_DOMAIN_LABEL_LENGTH, MAX_DOMAIN_TOTAL_LENGTH } from './constants';

describe('Email domain (part of an email after "@"-sign)', () => {
  it('should conform to the form "smth.com"', () => {
    const validDomain = 'smth.com';
    expect(isValidDomain(validDomain)).toBeTruthy();
  });
  it('may contain hyphen', () => {
    const domainWithHyphen = 'exm-ple.ru';
    expect(isValidDomain(domainWithHyphen)).toBeTruthy();
  });
  it(`should not exceed ${MAX_DOMAIN_TOTAL_LENGTH} characters`, () => {
    const tooLongDomain = Array(MAX_DOMAIN_TOTAL_LENGTH + 1).fill('a').join('');
    expect(isValidDomain(tooLongDomain)).toBeFalsy();
  });
  it('should be composed of at least 2 labels', () => {
    const domainWithSingleLabel = 'outlook';
    expect(isValidDomain(domainWithSingleLabel)).toBeFalsy();
  });
  describe('consists of comma-separated labels, each of which', () => {
    it(`shold not exceed ${MAX_DOMAIN_LABEL_LENGTH} characters`, () => {
      const domainWithTooLongLabel = `example.${Array(MAX_DOMAIN_LABEL_LENGTH + 1).fill('a').join('')}.su`;
      expect(isValidDomain(domainWithTooLongLabel)).toBeFalsy();
    });
  });
});