import { Formik } from 'formik';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginSchema from '../../schema/login';
import { constants } from '../../constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/common/form.scss';
import '../../styles/common/button.scss';
import '../../styles/login.scss';
import { Button, Input } from '../../components';
import { Link } from 'react-router-dom';
const GetLoginPageInformation = () => {
  const { title, buttons, emailPlaceholder, passwordPlaceholder } =
    constants.loginPage;
  const getInitialState = () => {
    const data = {
      email: '',
      password: '',
    };

    return {
      ...data,
    };
  };

  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div>
      <div className="text-center">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <h1 className="heading">{title}</h1>
      </div>
      <Formik
        initialValues={getInitialState()}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values', values);
        }}
        validateOnChange
        validateOnBlur>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setValues,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Input
                    label={'Email'}
                    placeholder={'Enter email'}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="email"
                    onBlur={handleBlur}
                    value={values.username}
                    showError={errors.email && touched.email}
                    error={errors.email}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Input
                    label={'Password'}
                    type="password"
                    placeholder={'Enter password'}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={values.password}
                    showError={errors.password && touched.password}
                    error={errors.password}
                    name="password"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
              <div>
                Don't have an account?
                <Link to={'/signup'}>sign Up</Link>
              </div>
              </Row>
              <div className="text-center">
                <Button
                  label={'Login'}
                  onClick={() => {
                    handleSubmit();
                  }}
                />
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default GetLoginPageInformation;
