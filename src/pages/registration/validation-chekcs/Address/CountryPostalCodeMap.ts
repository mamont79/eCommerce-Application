const COUNTRY = {
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

export default COUNTRY;
