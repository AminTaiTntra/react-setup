import React, { useEffect, useState } from 'react';
import '../../styles/dashboard.scss';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import {
  AiOutlineCaretDown,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import demoData from '../../constants/demoData';

const Dashboard = ({ setDashboardData }) => {
  useEffect(() => {
    setDashboardData();
  }, []);

  const { t } = useTranslation();
  const [state, setState] = useState({
    show: false,
    rightCount: 0,
    wrongCount: 0,
  });

  const { show, rightCount, wrongCount } = state;
  const handleShow = () => {
    setState((state) => ({
      ...state,
      show: !show,
    }));
  };
  const handleClicked = (data, buttonClicked) => {
    if (buttonClicked === 'right') {
      if (data.status === '') {
        data.status = 'right';
        setState((state) => ({
          ...state,
          rightCount: rightCount + 1,
        }));
      } else if (data.status === 'wrong') {
        data.status = 'right';
        setState((state) => ({
          ...state,
          rightCount: rightCount + 1,
          wrongCount: wrongCount - 1,
        }));
      }
    }
   else if (buttonClicked === 'wrong') {
      if (data.status === '') {
        data.status = 'wrong';
        setState((state) => ({
          ...state,
          wrongCount: wrongCount + 1,
        }));
      } else if (data.status === 'right') {
        data.status = 'wrong';
        setState((state) => ({
          ...state,
          rightCount: rightCount - 1,
          wrongCount: wrongCount + 1,
        }));
      }
    }
  };
  return (
    <Formik onSubmit={(e) => console.log(e)}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Button variant="outline-secondary" onClick={handleShow}>
              {rightCount}-selected / {wrongCount}-Deselected
              <AiOutlineCaretDown />
            </Button>
            {show ? (
              <div
                style={{
                  background: 'white',
                  width: '18rem',
                  overflowY: 'scroll',
                  height: '120px',
                }}>
                {demoData.map((data) => {
                  return (
                    <div>
                      <Button
                        onClick={() => {
                          handleClicked(data, 'right');
                        }}>
                        <AiOutlineCheck />
                      </Button>
                      <Button
                        onClick={() => {
                          handleClicked(data, 'wrong');
                        }}>
                        <AiOutlineClose />
                      </Button>
                      {data.title}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </form>
        );
      }}
    </Formik>
  );
};

export default Dashboard;
