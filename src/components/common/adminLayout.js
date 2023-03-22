import React from 'react';
import {
  Footer, FullScreenLoader, Header, Sidebar
} from '../index';
// import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/appStyle.scss';
import '../../styles/common/index.scss';

const AdminLayout = (props) => {
  const { loaderCount, component: Component, ...rest } = props;
  return (
    <>
      <Sidebar {...rest} />
      <Header {...rest} />
      <main>
        <Component {...rest} />
      </main>
      {loaderCount > 0 && <FullScreenLoader />}
      <Footer />
    </>
  );
};
export default AdminLayout;
