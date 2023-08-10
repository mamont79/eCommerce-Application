import USER_MIN_AGE from './constants';

export default function isValidDateOfBirth(date: Date): boolean {
  const ageInYears = getAge(date);
  return USER_MIN_AGE <= ageInYears;
}

function getAge(date: Date): number {
  const ageInMilliseconds = Date.now() - date.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
  return Math.trunc(ageInMilliseconds / millisecondsInYear);
}
