import * as Yup from 'yup';

const forgotPasswordSchema = Yup.object({
  username: Yup.string()
    .required('This field is required.')
    .min(8, 'Length of the user name field should be 8 to 15 characters')
    .max(15, 'Length of the user name field should be 8 to 15 characters'),
});

export default forgotPasswordSchema;
