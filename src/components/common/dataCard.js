import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Card } from 'react-bootstrap';
import { messages } from '../../constants';

const DataCard = ({ data, style ,className}) => {
  const key = data.key;
  const { t } = useTranslation();
  return (
    <Col md={6} xl={4} className="details-info">
      <Card style={style} className={className}>
        <Card.Body>
          <Card.Text>{t(`dashboardPage.${key}`)}</Card.Text>
          <Card.Text>{data.count}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DataCard;
