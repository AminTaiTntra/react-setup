import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Input } from '../../components';

import signupSchema from '../../schema/signup';
import { useTranslation } from 'react-i18next';

const GeneralInformationForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <h4>General Information</h4>
      <Formik
        initialValues={getInitialState()}
        validationSchema={signupSchema}
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
          console.log('errors', errors);
          return (
            <form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Input
                    label={'Username'}
                    placeholder={'Enter Username'}
                    onChange={(e) => {
                      handleChange(e);
                    }}
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

              <div className="text-center">
                <Button
                  label={'Sign Up'}
                  onClick={() => {
                    handleSubmit();
                  }}
                />
              </div>
            </form>
          );
        }}
      </Formik>
      <h4>{t('signup.generalInformation')}</h4>
      <Row className="mb-3">
        <Col>
          <Input
            label={t('signup.usernameLabel')}
            isRequired={true}
            placeholder={t('signup.usernamePlaceholder')}
            onChange={(e) => {
              handleChange(e);
            }}
            name="username"
            onBlur={handleBlur}
            value={values.username}
            showError={errors.username && touched.username}
            error={errors.username}
          />
        </Col>
        <Col>
          <Input
            label={t('signup.passwordLabel')}
            isRequired={true}
            type="password"
            placeholder={t('signup.passwordPlaceholder')}
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
        <Col>
          <Input
            label={t('signup.confirmPasswordLabel')}
            type="password"
            isRequired={true}
            placeholder={t('signup.confirmPasswordLabel')}
            onChange={(e) => {
              handleChange(e);
            }}
            name="confirmPassword"
            onBlur={handleBlur}
            value={values.confirmPassword}
            showError={errors.confirmPassword && touched.confirmPassword}
            error={errors.confirmPassword}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-2" sm={4}>
          <Input
            label={t('signup.firstName')}
            isRequired={true}
            type="input"
            placeholder={t('signup.firstName')}
            onChange={(e) => {
              handleChange(e);
            }}
            name="firstName"
            onBlur={handleBlur}
            value={values.firstName}
            showError={errors.firstName && touched.firstName}
            error={errors.firstName}
          />
        </Col>
        <Col className="mb-2" sm={4}>
          <Input
            label={t('signup.lastName')}
            isRequired={true}
            type="input"
            placeholder={t('signup.lastName')}
            onChange={(e) => {
              handleChange(e);
            }}
            name="lastName"
            onBlur={handleBlur}
            value={values.lastName}
            showError={errors.lastName && touched.lastName}
            error={errors.lastName}
          />
        </Col>
      </Row>
    </div>
  );
};

export default GeneralInformationForm;
