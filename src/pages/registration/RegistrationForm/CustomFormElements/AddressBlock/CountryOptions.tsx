import {
  ICountriesData,
  ISingleCountryData,
} from '../../../../../types/countryTypes';

export function makeCountryOptions(countries: ICountriesData) {
  return Object.entries(countries).map((country) => makeOption(country));
}

function makeOption([value, { name }]: [string, ISingleCountryData]) {
  return (
    <option value={value} key={name + Math.random() ** 2}>
      {name}
    </option>
  );
}
