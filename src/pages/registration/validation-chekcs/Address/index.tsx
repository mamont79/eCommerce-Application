import { ReactNode, useState } from 'react';
import ValidatedStreetNameInput from './ValidatedStreetInput';
import ValidatedCityInput from './ValidatedCityInput';
import ValidatedPostalCodeInput from './ValidatedPostalCodeInput';
import CountrySelect from './CountrySelect';
import COUNTRY from './CountryPostalCodeMap';
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
