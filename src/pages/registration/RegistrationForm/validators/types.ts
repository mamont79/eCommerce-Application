import { getBirthDateErrorMsg } from './getBirthDateErrorMsg';
import { getEmailErrorMsg } from './getEmailErrorMsg';
import { getPasswordErrorMsg } from './getPasswordErrorMsg';
import { getPostalCodeValidator } from './getPostalCodeErrorMsg';
import { getRequiredErrorMsg } from './getRequiredErrorMsg';
import { getTextErrorMsg } from './getTextErrorMsg';
import { cancelValidate } from './noValidate';

export type IValidator =
  | typeof getEmailErrorMsg
  | typeof getBirthDateErrorMsg
  | typeof getTextErrorMsg
  | typeof getPasswordErrorMsg
  | ReturnType<typeof getPostalCodeValidator>
  | typeof cancelValidate
  | typeof getRequiredErrorMsg;
