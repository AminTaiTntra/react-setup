import React, { useEffect } from 'react';
// import {
//   DetailCard,
//   Input,
//   CompanyTable,
//   Checkbox,
//   Button,
//   Table,
//   ToolTip,
//   Dropdown,
// } from "../../components";
import { useStateCallback } from '../../utility/common';
// import { Container, Row, Card, Tabs, Tab, Form } from "react-bootstrap";
import { constants } from '../../constants';
import { sortingMethodIconMapper } from '../../utility/mapper';
import '../../styles/dashboard.scss';
import { useTranslation } from 'react-i18next';

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
    // selectedCompanies,
    // isHeaderCheckBoxSelected,
    activeTab,
    // page,
    sortMethod,
    selectedDropdown,
  } = state;
  // const onPageChange = (page) => {
  //   setState(
  //     {
  //       ...state,
  //       page: page,
  //       isHeaderCheckBoxSelected: false,
  //       selectedCompanies: [],
  //     },
  //     () => {
  //       let body = {
  //         page: page,
  //         is_company_and_new: activeTab === "companies",
  //         is_new: activeTab === "new-entities",
  //         is_suspended: activeTab === "suspended-entities",
  //       };
  //       if (
  //         activeTab !== "new-entities" &&
  //         selectedDropdown &&
  //         selectedDropdown.value !== "All"
  //       ) {
  //         body.entity_type = selectedDropdown.value;
  //       }
  //       if (sortMethod !== "both") {
  //         body.sort_by = sortMethod;
  //       }
  //       // Do API cal with all the details
  //     }
  //   );
  // };
  // const onSearchValueChange = (e) => {
  //   setState({ ...state, searchValue: e.target.value });
  // };
  // const onSearchCompanies = () => {
  //   setState(
  //     {
  //       ...state,
  //       page: 1,
  //       isButtonLoading: true,
  //     },
  //     () => {
  //       let body = {
  //         search: searchValue,
  //         page: 1,
  //         is_company_and_new: activeTab === "companies",
  //         is_new: activeTab === "new-entities",
  //         is_suspended: activeTab === "suspended-entities",
  //       };
  //       if (
  //         activeTab !== "new-entities" &&
  //         selectedDropdown &&
  //         selectedDropdown.value !== "All"
  //       ) {
  //         body.entity_type = selectedDropdown.value;
  //       }
  //       if (sortMethod !== "both") {
  //         body.sort_by = sortMethod;
  //       }
  //       // Do API call with all the details
  //     }
  //   );
  // };
  // const onTabChange = (tab) => {
  //   setState(
  //     {
  //       ...state,
  //       isButtonLoading: false,
  //       searchValue: "",
  //       selectedCompanies: [],
  //       isHeaderCheckBoxSelected: false,
  //       activeTab: tab,
  //       isUpdateBtnLoading: false,
  //       page: 1,
  //       sortMethod: "both",
  //       selectedDropdown: { value: "All", key: "all" },
  //     },
  //     () => {
  //       // Do API call
  //     }
  //   );
  // };
  // const onSelectCheckbox = (id) => {
  //   if (selectedCompanies.includes(id)) {
  //     setState({
  //       ...state,
  //       isHeaderCheckBoxSelected: false,
  //       selectedCompanies: selectedCompanies.filter(
  //         (companyID) => companyID !== id
  //       ),
  //     });
  //   } else {
  //     setState({
  //       ...state,
  //       selectedCompanies: [...selectedCompanies, id],
  //       isHeaderCheckBoxSelected: selectedCompanies.length + 1 === items.length,
  //     });
  //   }
  // };
  // const onSelectHeaderCheckbox = () => {
  //   if (isHeaderCheckBoxSelected) {
  //     setState({
  //       ...state,
  //       isHeaderCheckBoxSelected: false,
  //       selectedCompanies: [],
  //     });
  //   } else {
  //     let newSelectedCompanies = [];
  //     items.forEach((item) => newSelectedCompanies.push(item.id));
  //     setState({
  //       ...state,
  //       isHeaderCheckBoxSelected: true,
  //       selectedCompanies: newSelectedCompanies,
  //     });
  //   }
  // };

  // const onUpdateCompanies = () => {
  //   // Do API Call
  // };

  // const onAddCompany = (id) => {
  //   addCompany({ company_id: id }, page).then((res) => {
  //     setState({
  //       ...state,
  //       page: res.newPage && res.newPage !== page ? res.newPage : page,
  //     });
  //     if (res.status) {
  //       showToast(res.message);
  //     } else {
  //       showToast(res.error_message);
  //     }
  //   });
  // };

  // const onRemoveCompany = (id) => {
  //   removeCompany({ company_id: id }, page).then((res) => {
  //     setState({
  //       ...state,
  //       page: res.newPage && res.newPage !== page ? res.newPage : page,
  //     });
  //     if (res.status) {
  //       showToast(res.message);
  //     } else {
  //       showToast(res.error_message);
  //     }
  //   });
  // };

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
        // Do API call with all the details
      },
    );
  };

  // const onDropdownValueChange = (selected) => {
  //   setState({ ...state, selectedDropdown: selected, page: 1 }, () => {
  //     let body = {
  //       search: searchValue,
  //       page: 1,
  //       is_company_and_new: activeTab === 'companies',
  //       is_new: activeTab === 'new-entities',
  //       is_suspended: activeTab === 'suspended-entities',
  //     };
  //     if (
  //       activeTab !== 'new-entities' &&
  //       selected &&
  //       selected.value !== 'All'
  //     ) {
  //       body.entity_type = selected.value;
  //     }
  //     if (sortMethod !== 'both') {
  //       body.sort_by = sortMethod;
  //     }
  //     // Do API call with all the details
  //   });
  // };

  const {
    // companiesTitle,
    // newEntityTitle,
    // searchPlaceholder,
    // suspendedEntityTitle,
    // tabTitles,
    // cardLabels,
    // buttons,
    // pageText,
    newEntityHeaders,
    // dropdownOptions,
  } = constants.dashboard;
  newEntityHeaders[1] = {
    ...newEntityHeaders[1],
    className: sortMethod === 'both' ? '' : 'active',
    onHeaderClick,
    icons: [{ className: sortingMethodIconMapper[sortMethod] }],
  };
  const {t} = useTranslation()
  // const { addCompanyTooltip, removeCompanyTooltip } = constants.tooltips;
  // const { entities, urls, datapoints, newEntities } = dashboardDetails;

  return <h1>{t("Welcome")}</h1>;
};

export default Dashboard;
