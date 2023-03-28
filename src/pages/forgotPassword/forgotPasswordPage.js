import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Input } from '../../components';

const ForgotPasswordPage = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('forgotPassword.recover_your_password')}</h1>
      <div className="text-center">
        {t('forgotPassword.forgotPassword_comment')}
      </div>
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
      </Row>
    </div>
  );
};

export default ForgotPasswordPage;
