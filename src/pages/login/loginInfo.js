import { Formik } from 'formik';
import { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import loginSchema from '../../schema/login';
import { constants } from '../../constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/common/form.scss';
import '../../styles/common/button.scss';
import '../../styles/login.scss'; 
import { Input } from '../../components';
const GetLoginPageInformation = () => {
  const { title, buttons, emailPlaceholder, passwordPlaceholder } =
    constants.loginPage;
  const getInitialData = () => {
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
    <>
      <div className="text-center">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <h1 className="heading">{title}</h1>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      </div>
      <Formik
        initialValues={getInitialData()}
        validationSchema={loginSchema}
        onSubmit = {(values) =>{
          console.log("values",values);
        }}
        validateOnChange
        validateOnBlur
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) =>{
          return(
            <form onSubmit={handleSubmit}>
              <Row>
                <Col>
                <Input 
                label ={'Email'}
                placeholder={'Enter email'}
                onChange = {(e) =>{
                  handleChange(e)
                }}
                name ='email'
                onBlur = {handleBlur}
                value = {values.email}
                showError = {errors.email && touched.email}
                errors = {errors.email}
                />
                </Col>
                <Col>
                  <Input 
                  label={''}
                  />
                </Col>
              </Row>
            </form>
          )
        }}

        </Formik>
    </>
  );
};

export default GetLoginPageInformation;
