import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../components';
import { Formik } from 'formik';
import signupSchema from '../../schema/signup';

const GeneralInformationForm = () => {
  const getInitialState = () => {
    const data = {
      username: '',
      password: ''
    }

    return {
      ...data
    }
  }
  const getValidationSchema = () => {
    return signupSchema();
  };
  return (
    <div>
      <h4>General Information</h4>
      <Formik
        // enableReinitialize
        initialValues={getInitialState()}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values',values);
        }}
        vali      dateOnChange
        validateOnBlur
      >
        {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            setValues
          }) => {
            console.log('errors',values);
            return (
              <form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Input
                      label={'Username'}
                      placeholder={'Enter Username'}
                      onChange={(e) => {
                        handleChange(e)
                      }
                      }
                      name="username"
                      onBlur={handleBlur}
                      value={values.username}
                      showError={errors.username && touched.username}
                      error={errors.username}
                    />
                  </Col>
                  <Col>
                    <Input
                      label={'Password'}
                      type="password"
                      placeholder={'Enter Password'}
                      onChange={(e) => {
                        handleChange(e)
                      }
                      }
                      onBlur={handleBlur}
                      value={values.password}
                      showError={errors.password && touched.password}
                      error={errors.password}
                      name="password"
                    />
                  </Col>
                  {/* <Col>
            <Input
              label={'Confirm Password'}
              type="password"
              placeholder={'Confirm Password'}
            />
          </Col> */}
                </Row>
                {/* <Row>
          <Col className='mb-2' sm={4}>
            <Input
              label={'First Name'}
              type="input"
              placeholder={'First Name'}
              inputRef={register}
            />
          </Col>
          <Col className='mb-2' sm={4}>
            <Input
              label={'Last Name'}
              type="input"
              placeholder={'Last Name'}
            />
          </Col>
        </Row> */}
                <div className="text-center">
                  <Button
                    label={"Sign Up"}
                    onClick={() => {
                      handleSubmit()
                    }}
                  />
                </div>
              </form>
            )
          }
        }
      </Formik>
    </div>

    // <div>GeneralInformationForm</div>
  );
};

export default GeneralInformationForm;
