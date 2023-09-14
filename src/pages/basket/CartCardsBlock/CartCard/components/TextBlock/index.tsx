/* eslint-disable no-console */
import { LineItem } from '@commercetools/platform-sdk';

export function TextBlock({
  textData: {
    name,
    variant: { attributes },
  },
}: {
  textData: Pick<LineItem, 'name' | 'variant'>;
}) {
  console.log(name);
  console.log(attributes);

  return (
    <div>
      <h4>Abyr</h4>
      <div>color: green</div>
      <div>size: xxl</div>
    </div>
  );
}
