import React from 'react';

function PublicRouteLayout(props) {
  const { component: Component, ...rest } = props;
  return <Component {...rest} />;
}
export default PublicRouteLayout;
