import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { HeaderDropdown } from '../index';
import { logout } from '../../actions/login';
import { setProfileData } from '../../actions/profile';
import {
  setSidebarCollapse,
  setSidebarVisibility,
} from '../../actions/sidebar';
import { showToast } from '../../utility/common';
import '../../styles/header.scss';
import LanguageDropDown from './languageDropdown';

const Header = ({
  profile,
  logout,
  setProfileData,
  isCollapsed,
  setSidebarCollapse,
  setSidebarVisibility,
  isVisible,
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    setProfileData().then((res) => {
      if (!res.status) showToast(res.error_message);
    });
  }, []);

  const toggleCollapse = () => setSidebarCollapse(!isCollapsed);
  const toggleVisibility = () => setSidebarVisibility(!isVisible);
  return (
    <Navbar fixed="top">
      <Container className="justify-content-between">
        <i
          className={`collapse-menu-btn ${
            isCollapsed ? 'fas fa-angle-right' : 'fas fa-angle-left'
          }`}
          onClick={toggleCollapse}
        />
        <div className="page-title">
          <h1>{t('dashboardPage.dashboard')}</h1>
        </div>
        <div className="navigation-items">
          <HeaderDropdown profile={profile} logout={logout} />
          <i
            className="fas fa-bars collapse-sidebar-btn"
            onClick={toggleVisibility}
          />
          <LanguageDropDown />
        </div>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isCollapsed: state.sidebar.isCollapsed,
  isVisible: state.sidebar.isVisible,
  profile: state.profile,
});

const mapDispatchToProps = {
  logout,
  setProfileData,
  setSidebarCollapse,
  setSidebarVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
