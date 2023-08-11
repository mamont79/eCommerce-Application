import isValidDomain from './domain-validation/isValidDomain';
import isValidPrefix from './prefix-validation/isValidPrefix';

export default function isValidEmail(text: string): boolean {
  if (text.split('@').length > 2) return false;
  const [prefix, domain] = text.split('@');
  return isValidPrefix(prefix) && isValidDomain(domain);
}
