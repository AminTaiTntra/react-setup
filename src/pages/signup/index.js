import React from 'react';
import { Container } from 'react-bootstrap';
import GeneralInformationForm from './generalInformationForm';

const Signup = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
    <Container className="d-flex justify-content-center align-items-center">
        <GeneralInformationForm/>
    </Container>
    </div>
  );
};

export default Signup;
