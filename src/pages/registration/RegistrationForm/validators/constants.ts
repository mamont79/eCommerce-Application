export const MILLISECONDS_IN_YEAR = 1000 * 60 * 60 * 24 * 365;
export const MINIMUM_ALLOWED_USER_AGE_IN_YEARS = 13;

export const MINIMUM_PASSWORD_LENGTH = 8;

export const COUNTRY_DATA = {
  us: {
    name: 'United States',
    postalCodePattern: /^[0-9]{5}(?:-[0-9]{4})?$/,
    example: '12345 or 12345-1234',
  },
  de: { name: 'Germany', postalCodePattern: /^[0-9]{5}$/, example: '12345' },
  es: {
    name: 'Spain',
    postalCodePattern: /^(?:(?:[0-4]{1}[0-9]{1})|(?:5[0-2]{1}))[0-9]{3}$/,
    example: '12345 (but < 53000)',
  },
  au: { name: 'Australia', postalCodePattern: /^[0-9]{4}$/, example: '1234' },
};

export type CountryValues = keyof typeof COUNTRY_DATA;
