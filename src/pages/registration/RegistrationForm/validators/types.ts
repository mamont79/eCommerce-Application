import { getBirthDateErrorMsg } from './getBirthDateErrorMsg';
import { getPostalCodeValidator } from './getPostalCodeErrorMsg';
import { getRequiredErrorMsg } from './getRequiredErrorMsg';
import { getTextErrorMsg } from './getTextErrorMsg';
import { cancelValidate } from './cancelValidate';
import getEmailErrorMsg from '../../../../components/formInputs/validation/getEmailErrorMsg';
import getPasswordErrorMsg from '../../../../components/formInputs/validation/passwordValidator/getPasswordErrorMsg';

export type IValidator =
  | typeof getEmailErrorMsg
  | typeof getBirthDateErrorMsg
  | typeof getTextErrorMsg
  | typeof getPasswordErrorMsg
  | ReturnType<typeof getPostalCodeValidator>
  | typeof cancelValidate
  | typeof getRequiredErrorMsg;
