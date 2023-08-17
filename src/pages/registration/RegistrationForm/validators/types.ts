import { getBirthDateErrorMsg } from './getBirthDateErrorMsg';
import { getEmailErrorMsg } from './getEmailErrorMsg';
import { getPasswordErrorMsg } from './getPasswordErrorMsg';
import { getTextErrorMsg } from './getTextErrorMsg';

export type IValidator =
  | typeof getEmailErrorMsg
  | typeof getBirthDateErrorMsg
  | typeof getTextErrorMsg
  | typeof getPasswordErrorMsg;
