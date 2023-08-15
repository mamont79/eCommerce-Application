import isLettersOnly from '../../../isLettersOnly';

export default function isValidCityName(name: string) {
  return name.length > 0 && isLettersOnly(name);
}
