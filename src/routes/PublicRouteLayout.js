import React from 'react';

const PublicRouteLayout = (props) => {
  const { component: Component, ...rest } = props;
  return <Component {...rest} />;
};
export default PublicRouteLayout;
