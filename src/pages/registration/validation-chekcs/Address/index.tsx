import { ReactNode, useState } from 'react';
import ValidatedStreetNameInput from './street-validation/isValidStreet';
import ValidatedCityInput from './city-validation/isValidStreet';
import ValidatedPostalCodeInput from './postal-code-validation/ValidatedPostalCode';
import CountrySelect from './CountrySelect';
import COUNTRY from './country-postalcode-map';
import { StyledBlockWrapper } from '../../RegistrationForm/style';

export default function AddressContainer({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedCountry, setCountry] = useState('');

  if (!isInCountriesRange(selectedCountry))
    throw new Error('Country is out of range');

  return (
    <StyledBlockWrapper>
      {children}
      <CountrySelect setCountry={setCountry} />
      <ValidatedPostalCodeInput chosenCountry={selectedCountry} />
      <ValidatedCityInput />
      <ValidatedStreetNameInput />
    </StyledBlockWrapper>
  );
}

function isInCountriesRange(
  selectedCountry: string
): selectedCountry is keyof typeof COUNTRY | '' {
  return selectedCountry in COUNTRY || selectedCountry === '';
}
