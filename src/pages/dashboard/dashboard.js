import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useStateCallback } from '../../utility/common';
import { constants } from '../../constants';
import { sortingMethodIconMapper } from '../../utility/mapper';
import '../../styles/dashboard.scss';
import { DataCard } from '../../components';
import cardData from '../../schema/cardData';

const Dashboard = ({ setDashboardData }) => {
  useEffect(() => {
    setDashboardData();
  }, []);
  // const { } = companies || {};
  const [state, setState] = useStateCallback({
    searchValue: '',
    selectedCompanies: [],
    isHeaderCheckBoxSelected: false,
    activeTab: 'companies',
    page: 1,
    isButtonLoading: false,
    isUpdateBtnLoading: false,
    sortMethod: 'both',
    selectedDropdown: { value: 'All', key: 'all' },
  });
  const {
    searchValue,
    activeTab,

    sortMethod,
    selectedDropdown,
  } = state;

  const onHeaderClick = () => {
    setState(
      {
        ...state,
        sortMethod:
          sortMethod === 'both' ? 'ASC' : sortMethod === 'ASC' ? 'DESC' : 'ASC',
      },
      ({ sortMethod }) => {
        const body = {
          search: searchValue,
          page: 1,
          is_company_and_new: activeTab === 'companies',
          is_new: activeTab === 'new-entities',
          is_suspended: activeTab === 'suspended-entities',
        };
        if (
          activeTab !== 'new-entities' 
          && selectedDropdown 
          && selectedDropdown.value !== 'All'
        ) {
          body.entity_type = selectedDropdown.value;
        }
        if (sortMethod !== 'both') {
          body.sort_by = sortMethod;
        }
      },
    );
  };

  const { newEntityHeaders } = constants.dashboard;
  newEntityHeaders[1] = {
    ...newEntityHeaders[1],
    className: sortMethod === 'both' ? '' : 'active',
    onHeaderClick,
    icons: [{ className: sortingMethodIconMapper[sortMethod] }],
  };

  return (
    <Row>
      {cardData.map((data) => (
        <Col>
          <DataCard data={data} style={{ width: '10rem', height: '6rem' }} />
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
