import React from 'react';
import { useTranslation } from 'react-i18next';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Input } from '../../components';

const CompanyDetailsFrom = ({
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
      <h4>{t('signup.companyDetails')}</h4>
      {/* <form onSubmit={handleSubmit}> */}
   {console.log("VALUES", values , touched.companyName)}
        <Row className="mb-3">
          <Col>
            <Input
              label={t('signup.companyName')}
              isRequired={true}
              placeholder={t('signup.companyName')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="companyName"
              onBlur={handleBlur}
              value={values.companyName}
              showError={errors.companyName && touched.companyName}
              error={errors.companyName}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.employeeCode')}
              isRequired={true}
              placeholder={t('signup.employeeCode')}
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={handleBlur}
              value={values.employeeCode}
              showError={errors.employeeCode && touched.employeeCode}
              error={errors.employeeCode}
              name="employeeCode"
            />
          </Col>
          <Col>
            <Input
              label={t('signup.address1')}
              placeholder={t('signup.address1')}
              isRequired={true}
              onChange={(e) => {
                handleChange(e);
              }}
              name="address1"
              onBlur={handleBlur}
              value={values.address1}
              showError={errors.address1 && touched.address1}
              error={errors.address1}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Input
              label={t('signup.address2')}
              placeholder={t('signup.address2')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="address2"
              onBlur={handleBlur}
              value={values.address2}
              showError={errors.address2 && touched.address2}
              error={errors.address2}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.country')}
              isRequired={true}
              placeholder={t('signup.country')}
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={handleBlur}
              value={values.country}
              showError={errors.country && touched.country}
              error={errors.country}
              name="country"
            />
          </Col>
          <Col>
            <Input
              label={t('signup.city')}
              isRequired={true}
              placeholder={t('signup.city')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="city"
              onBlur={handleBlur}
              value={values.city}
              showError={errors.city && touched.city}
              error={errors.city}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              label={t('signup.zipCode')}
              placeholder={t('signup.zipCode')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="zipCode"
              onBlur={handleBlur}
              value={values.zipCode}
              showError={errors.zipCode && touched.zipCode}
              error={errors.zipCode}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.isd')}
              placeholder={t('signup.isd')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="isd"
              onBlur={handleBlur}
              value={values.isd}
              showError={errors.isd && touched.isd}
              error={errors.isd}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.mobile1')}
              isRequired={true}
              placeholder={t('signup.enter') + " " + t('signup.mobile1')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="mobile1"
              onBlur={handleBlur}
              value={values.mobile1}
              showError={errors.mobile1 && touched.mobile1}
              error={errors.mobile1}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.isd')}
              placeholder={t('signup.isd')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="isd"
              onBlur={handleBlur}
              value={values.isd}
              showError={errors.isd && touched.isd}
              error={errors.isd}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.mobile2')}
              placeholder={t('signup.mobile2')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="mobile2"
              onBlur={handleBlur}
              value={values.mobile2}
              showError={errors.mobile2 && touched.mobile2}
              error={errors.mobile2}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              label={t('signup.areaCode')}
              placeholder={t('signup.areaCode')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="areaCode"
              onBlur={handleBlur}
              value={values.areaCode}
              showError={errors.areaCode && touched.areaCode}
              error={errors.areaCode}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.officePhone1')}
              placeholder={t('signup.officePhone1')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="officePhone1"
              onBlur={handleBlur}
              value={values.officePhone1}
              showError={errors.officePhone1 && touched.officePhone1}
              error={errors.officePhone1}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.areaCode')}
              placeholder={t('signup.areaCode')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="areaCode"
              onBlur={handleBlur}
              value={values.areaCode}
              showError={errors.areaCode && touched.areaCode}
              error={errors.areaCode}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.officePhone2')}
              placeholder={t('signup.officePhone2')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="officePhone2"
              onBlur={handleBlur}
              value={values.officePhone2}
              showError={errors.officePhone2 && touched.officePhone2}
              error={errors.officePhone2}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.areaCode')}
              placeholder={t('signup.areaCode')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="areaCode"
              onBlur={handleBlur}
              value={values.areaCode}
              showError={errors.areaCode && touched.areaCode}
              error={errors.areaCode}
            />
          </Col>
          <Col>
            <Input
              label={t('signup.faxNo')}
              placeholder={t('signup.faxNo')}
              onChange={(e) => {
                handleChange(e);
              }}
              name="faxNo"
              onBlur={handleBlur}
              value={values.faxNo}
              showError={errors.faxNo && touched.faxNo}
              error={errors.faxNo}
            />
          </Col>
        </Row>
      {/* </form> */}
    </div>
  );
};

export default CompanyDetailsFrom;
