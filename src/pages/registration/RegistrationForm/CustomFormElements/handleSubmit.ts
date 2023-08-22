import { RegistrationFormFields } from '../formFields';

export function handleSubmit(formData: RegistrationFormFields) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(formData, null, 2));
}
