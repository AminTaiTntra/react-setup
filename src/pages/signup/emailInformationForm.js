import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { Input } from '../../components';

const EmailInformationForm = ({
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
      <Row className="mb-3">
        <Col>
          <Input
            label={t('signup.emilAddress1')}
            isRequired={true}
            placeholder={t('signup.emilAddress1')}
            onChange={(e) => {
              handleChange(e);
            }}
            name="emilAddress1"
            onBlur={handleBlur}
            value={values.emilAddress1}
            showError={errors.emilAddress1 && touched.emilAddress1}
            error={errors.emilAddress1}
          />
        </Col>
        <Col>
          <Input
            label={t('signup.emilAddress2')}
            placeholder={t('signup.emilAddress2')}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
            value={values.emilAddress2}
            showError={errors.emilAddress2 && touched.emilAddress2}
            error={errors.emilAddress2}
            name="emilAddress2"
          />
        </Col>
        <Col>
          <Input
            label={t('signup.website')}
            placeholder={t('signup.website')}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
            value={values.website}
            showError={errors.website && touched.website}
            error={errors.website}
            name="website"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            label={t('signup.skype')}
            placeholder={t('signup.skype')}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
            value={values.skype}
            showError={errors.skype && touched.skype}
            error={errors.skype}
            name="skype"
          />
        </Col>
        <Col>
          <Input
            label={t('signup.weChat')}
            placeholder={t('signup.weChat')}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
            value={values.weChat}
            showError={errors.skype && touched.skype}
            error={errors.skype}
            name="weChat"
          />
        </Col>
        <Col>
          <Input
            label={t('signup.businessRegNo')}
            placeholder={t('signup.businessRegNo')}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
            value={values.businessRegNo}
            showError={errors.businessRegNo && touched.businessRegNo}
            error={errors.businessRegNo}
            name="businessRegNo"
          />
        </Col>
        <Col>
          <Input
            label={t('signup.rapId')}
            placeholder={t('signup.rapId')}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
            value={values.rapId}
            showError={errors.rapId && touched.rapId}
            error={errors.rapId}
            name="rapId"
          />
        </Col>
      </Row>
    </div>
  );
};

export default EmailInformationForm;
