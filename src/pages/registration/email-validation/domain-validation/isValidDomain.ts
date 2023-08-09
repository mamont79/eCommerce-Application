import { MAX_DOMAIN_LABEL_LENGTH, MAX_DOMAIN_TOTAL_LENGTH, VALID_DOMAIN_LABEL_SYMBOLS_PATTERN } from './constants';

export default function isValidDomain(domain: string): boolean {
  let isValid = true;
  if (domain.length > MAX_DOMAIN_TOTAL_LENGTH) isValid = false;
  const labels = domain.split('.');
  if (labels.length < 2) isValid = false;
  labels.forEach((label) => {
    if(!isValidLabel(label)) isValid = false;
  })
  return isValid;
}

function isValidLabel(label: string): boolean {
  let isValid = true;
  const labelChars = label.split('');

  if (label.length > MAX_DOMAIN_LABEL_LENGTH) isValid = false;
  labelChars.forEach((char) => {
    if (!VALID_DOMAIN_LABEL_SYMBOLS_PATTERN.test(char)) isValid = false;
  })

  return isValid;
}