import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../components';

const GeneralInformationForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit =(data)=>{
   console.log("data" , data)
  }
  return (
    <div>
      <h4>General Information</h4>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Col>
            <Input label={'Username'} placeholder={'Enter Username'} />
          </Col>
          <Col>
            <Input
              label={'Password'}
              type="password"
              placeholder={'Enter Password'}
              
            />
          </Col>
          <Col>
            <Input
              label={'Confirm Password'}
              type="password"
              placeholder={'Confirm Password'}
            />
          </Col>
        </Row>
        <Row>
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
        </Row>
        <div className="text-center">
          <Button
          label={"Sign Up"}
           onClick={handleSubmit(onSubmit)}
          />
        </div>
      </Form>
    </div>

    // <div>GeneralInformationForm</div>
  );
};

export default GeneralInformationForm;
