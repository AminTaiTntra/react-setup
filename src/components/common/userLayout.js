import React from 'react';
import { Sidebar, Header, Footer } from '../index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/common/index.scss';
import '../../styles/appStyle.scss';

function UserLayout(props) {
  const { component: Component, ...rest } = props;
  return (
    <>
      <Sidebar {...rest} />
      <Header {...rest} />
      <main>
        <Component {...rest} />
      </main>
      <Footer />
    </>
  );
}
export default UserLayout;
