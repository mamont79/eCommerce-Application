import { ChangeEventHandler } from 'react';
import StyledSelect from '../../../../components/StyledSelect';

export function CountrySelect({
  value,
  handleChange,
  name,
}: {
  value: string;
  handleChange: ChangeEventHandler;
  name: string;
}) {
  return (
    <StyledSelect value={value} onChange={handleChange} name={name}>
      <option value="" hidden>
        Country
      </option>
      <option value="de">Germany</option>
      <option value="us">United States</option>
      <option value="au">Australia</option>
      <option value="es">Spain</option>
    </StyledSelect>
  );
}
