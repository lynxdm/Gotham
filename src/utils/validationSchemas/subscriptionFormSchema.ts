import { object } from 'yup';
import { emailValidation, defaultValidation } from '.';

export const subscriptionFormValidationSchema = object().shape({
  name: defaultValidation('Name'),
  email: emailValidation(),
});
