import { EmailField } from './fields/EmailField';
import { FirstNameField } from './fields/FirstNameField';
import { LastNameField } from './fields/LastNameField';
import { StyledFieldsBlockWrapper } from './style';
import { type ICommonPersonalDataBlockProps } from './types';

export function PersonalDataBlock({ customer }: ICommonPersonalDataBlockProps) {
  return (
    <StyledFieldsBlockWrapper>
      <FirstNameField customer={customer} />
      <LastNameField customer={customer} />
      <EmailField customer={customer} />
    </StyledFieldsBlockWrapper>
  );
}
