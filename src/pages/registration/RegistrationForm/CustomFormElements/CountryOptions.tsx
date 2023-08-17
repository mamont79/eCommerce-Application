import { type CountriesData, type SingleCountryData } from './constants';

export function makeCountryOptions(countries: CountriesData) {
  return Object.entries(countries).map((country) => makeOption(country));
}

function makeOption(data: [string, SingleCountryData]) {
  return (
    <option value={data[0]} key={data[1].name + Math.random() ** 2}>
      {data[1].name}
    </option>
  );
}
