import { StyledCustomerDataFieldContainer } from './style';

export function CustomerDataField({
  label,
  value,
}: {
  label: string;
  value: string | boolean | number;
}) {
  return (
    <StyledCustomerDataFieldContainer>
      <span>
        <strong>{label}</strong>: {value}
      </span>
    </StyledCustomerDataFieldContainer>
  );
}
