import React from 'react';

export default function handleInput(validator: (value: string) => boolean) {
  return (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const isValidInput = validator(target.value);
    if (isValidInput) target.classList.remove('invalid');
    else target.classList.add('invalid');
  };
}
