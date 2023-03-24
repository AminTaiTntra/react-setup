import * as Yup from 'yup';

const signupSchema = Yup.object({
  username: Yup.string()
    .required('This field is required.')
    .email('Enter valid email address.'),
  password: Yup.string()
    .required('This field is required.')
    .min(6, 'Password must be 6 characters long.')
    .max(12, "Password can't be longer than 12 characters."),
  confirmPassword: Yup.string()
    .required('This field is required.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  firstName: Yup.string().required('This field is required.'),
  lastName: Yup.string().required('This field is required.'),
  companyName: Yup.string().required('This field is required.'),
  employeeCode: Yup.string().required('This field is required.'),
  address1: Yup.string().required('This field is required.'),
  // address2: Yup.string().required('This field is required.'),
  country: Yup.string().required('This field is required.'),
  city: Yup.string().required('This field is required.'),
  // zipCode: Yup.string().required('This field is required.'),
  // isd: Yup.string().required('This field is required.'),
  mobile1: Yup.string().required('This field is required.'),
  // mobile2: Yup.string().required('This field is required.'),
  // areaCode: Yup.string().required('This field is required.'),
  // officePhone1: Yup.string().required('This field is required.'),
  // officePhone2: Yup.string().required('This field is required.'),
  // faxNo: Yup.string().required('This field is required.'),
  emilAddress1: Yup.string().required('This field is required.'),
  // emilAddress2: Yup.string().required('This field is required.'),
  // website: Yup.string().required('This field is required.'),
  // skype: Yup.string().required('This field is required.'),
  // weChat: Yup.string().required('This field is required.'),
  // business: Yup.string().required('This field is required.'),
  // businessRegNo: Yup.string().required('This field is required.'),
  // rapId: Yup.string().required('This field is required.'),
});

export default signupSchema;
