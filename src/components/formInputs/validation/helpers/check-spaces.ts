export default function checkSpaces(value: string) {
  return value.slice(0, 1) === ' ' || value.slice(-1) === ' ';
}
