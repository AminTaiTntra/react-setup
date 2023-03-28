import React, { useState, useEffect } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button } from '../../components';
import { showToast, useStateCallback } from '../../utility/common';
import schema from '../../schema/login';
import { constants, messages } from '../../constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/common/form.scss';
import '../../styles/common/button.scss';
import '../../styles/login.scss';
import { Link } from 'react-router-dom';

const Login = ({ setUserToken }) => {
  useEffect(() => {
    if (localStorage.getItem('SHOW_TOAST')) {
      localStorage.removeItem('SHOW_TOAST');
      showToast(messages.sessionExpired);
    }
  }, []);
  const { title, buttons, emailPlaceholder, passwordPlaceholder } =
    constants.loginPage;

  const [isLoading, setLoading] = useStateCallback(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    // errors,
    // formState
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      // rememberMe: false,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setLoading(true, () => {
      setUserToken(data)
        .then((res) => {
          if (!res.status) {
            setErrorMessage(res.error_message);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    });
  };
  // const { touched } = formState;

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center login-body">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="login-box">
          <div className="text-center">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <h1 className="heading">{title}</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              controlId="formEmail"
              placeholder={t('login.email')}
              // error={errors.email && errors.email.message}
              // showError={touched && touched.email}
              inputRef={{ ...register('name', { required: true }) }}
              name="email"
            />
            <Input
              controlId="formPassword"
              type="password"
              placeholder={t('login.password')}
              // error={errors.password && errors.password.message}
              // showError={touched && touched.password}
              inputRef={register}
              name="password"
            />
            <div>
              {t("login.Do_not_have_an_account_yet")}
              <Link to={'/signup'}>{t("signup.signup")}</Link>
            </div>
            <div className="text-center">
              <Button
                disabled={isLoading}
                isLoading={isLoading}
                label={buttons.login}
                onClick={handleSubmit(onSubmit)}
                type="submit"
              />
            </div>
          </Form>
          <div>

            <Link to={'/forgotPassword'}>{t("forgotPassword.forgotPassword")}</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
