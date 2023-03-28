import * as Yup from 'yup';

const signupSchema = Yup.object({
  username: Yup.string()
    .required('This field is required.')
    .min(8, 'Length of the user name field should be 8 to 15 characters')
    .max(15, 'Length of the user name field should be 8 to 15 characters'),
  password: Yup.string()
    .required('This field is required.')
    .min(6, 'Password must be 6 characters long.')
    .max(12, "Password can't be longer than 12 characters."),
  confirmPassword: Yup.string()
    .required('This field is required.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  firstName: Yup.string()
    .required('This field is required.')
    .max(50, 'Maximum 50 characters are allowed.'),
  lastName: Yup.string()
    .required('This field is required.')
    .max(50, 'Maximum 50 characters are allowed.'),
  companyName: Yup.string().required('Enter Company Name'),
  address1: Yup.string().required('Enter Address 1'),
  country: Yup.string().required('Select Country'),
  city: Yup.string().required('Select City'),
  zipCode: Yup.string().matches(/^.*^[a-z0-9]+$/, 'Please Enter valid number'),
  mobile1: Yup.string()
    .required('This field is required.')
    .matches(/^.*^[0-9]+$/, 'Please Enter valid number')
    .min(5, 'minimum 5')
    .max(13, 'maximum 13'),
  mobile2: Yup.string()
    .matches(/^.*^[0-9]+$/, 'Please Enter valid number')
    .min(5, 'minimum 5')
    .max(13, 'maximum 13'),
  officePhone1: Yup.string()
    .matches(/^.*^[0-9]+$/, 'Please Enter valid number')
    .min(4, 'minimum 4')
    .max(13, 'maximum 13'),
  officePhone2: Yup.string()
    .matches(/^.*^[0-9]+$/, 'Please Enter valid number')
    .min(4, 'minimum 4')
    .max(13, 'maximum 13'),
  faxNo: Yup.string()
    .matches(/^.*^[0-9]+$/, 'Please Enter valid number')
    .min(4, 'minimum 4')
    .max(13, 'maximum 13'),
  emilAddress1: Yup.string()
    .required('This field is required.')
    .email('Please enter a valid email address.'),
  emilAddress2: Yup.string().email('Please enter a valid email address.'),
  rapId: Yup.string()
    .matches(/^.*^[0-9]+$/, 'Please Enter valid number')
    .min(4, 'minimum 4')
    .max(13, 'maximum 13'),
});

export default signupSchema;
