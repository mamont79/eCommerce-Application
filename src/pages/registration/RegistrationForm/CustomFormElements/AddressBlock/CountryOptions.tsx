import {
  ICountriesData,
  ISingleCountryData,
} from '../../../../../types/countryTypes';

export function makeCountryOptions(countries: ICountriesData) {
  return Object.entries(countries).map((country) => makeOption(country));
}

function makeOption(data: [string, ISingleCountryData]) {
  return (
    <option value={data[0]} key={data[1].name + Math.random() ** 2}>
      {data[1].name}
    </option>
  );
}
