import { Formik } from 'formik';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '../../components';
import signupSchema from '../../schema/signup';
import CompanyDetailsFrom from './companyDetailsFrom';
import EmailInformationForm from './emailInformationForm';
import GeneralInformationForm from './generalInformationForm';

const Signup = () => {
  const getInitialState = () => {
    const data = {
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      companyName: '',
      employeeCode: '',
      address1: '',
      address2: '',
      country: '',
      city: '',
      zipCode: '',
      isd: '',
      mobile1: '',
      mobile2: '',
      areaCode: '',
      officePhone1: '',
      officePhone2: '',
      faxNo: '',
      emilAddress1: '',
      emilAddress2: '',
      website: '',
      skype: '',
      weChat: '',
      business: '',
      businessRegNo: '',
      rapId: '',
    };

    return {
      ...data,
    };
  };
  // const getValidationSchema = () => {
  //   return signupSchema();
  // };
  const { t } = useTranslation();
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Formik
          initialValues={getInitialState()}
          validationSchema={signupSchema}
          onSubmit={(values, { validate }) => {
            console.log('values', values);
            // validate(values);
          }}
          validateOnChange
          validateOnBlur>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <GeneralInformationForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <CompanyDetailsFrom
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <EmailInformationForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <div className="text-center">
                  <Button
                    label={t('signup.signupButton')}
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                </div>
              </form>
            </div>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Signup;
