import isValidPrefix from './recipient-name-validation/isValidPrefix';

export default function isValidEmail(text: string): boolean {
  const [prefix] = text.split('@');
  return isValidPrefix(prefix);
}
