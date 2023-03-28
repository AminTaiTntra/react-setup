import { Container } from 'react-bootstrap';
import GetLoginPageInformation from './login';

const Login = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center login-body">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="login-box">
          <GetLoginPageInformation />
        </div>
      </Container>
    </div>
  );
};

export default Login;
