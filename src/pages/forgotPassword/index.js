import { Formik } from 'formik';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import forgotPasswordSchema from '../../schema/forgotPassword';
import ForgotPasswordPage from './forgotPasswordPage';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const getData = () => {
    const data = {
      username: '',
    };
    return {
      ...data,
    };
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Formik
          initialValues={getData()}
          validationSchema={forgotPasswordSchema}
          onSubmit={(values) => {
            console.log(values, 'values');
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
                <ForgotPasswordPage
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <div className="text-center">
                  <Button
                    label={t('forgotPassword.recoverButton')}
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                </div>
                <div className="text-center">
                  <Link to="/login">{t('forgotPassword.back_to_login')}</Link>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default ForgotPassword;
