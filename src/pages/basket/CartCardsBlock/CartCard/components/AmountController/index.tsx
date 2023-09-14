import { ChangeEvent, useState } from 'react';

export function AmountController() {
  const [amount, setAmount] = useState<number>(1);

  function increaseByOne() {
    setAmount(amount + 1);
  }

  function decreaseByOne() {
    setAmount(amount - 1);
  }

  function handleChange(e: ChangeEvent) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  return (
    <div>
      <button type="button" onClick={decreaseByOne}>
        -
      </button>
      <input type="number" value={amount} onChange={handleChange} />
      <button type="button" onClick={increaseByOne}>
        +
      </button>
    </div>
  );
}
