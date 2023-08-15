export default function isValidPostalCode(value: string, pattern: RegExp) {
  return pattern.test(value);
}
