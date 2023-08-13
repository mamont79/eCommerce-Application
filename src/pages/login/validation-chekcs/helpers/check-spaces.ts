import { ChangeEvent } from 'react';

export default function checkSpaces(e: ChangeEvent<HTMLInputElement>) {
  return (
    e.target.value.toString().slice(0, 1) === ' ' ||
    e.target.value.toString().slice(-1) === ' '
  );
}
