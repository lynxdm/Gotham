import { string } from 'yup';

export const defaultValidation = (name: string) => string().required(`${name} is required`);

export const emailValidation = () =>
  string()
    .email('Enter a valid email address e.g janedoe@gmail.com')
    .required('Email address is required');
