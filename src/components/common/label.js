import React from 'react';

const Label = function (props) {
  const newProps = Object.assign({}, props)
  const { type, text, children } = newProps;
  delete newProps.type
  delete newProps.text
  delete newProps.children
  return React.createElement(type, newProps, [text], children);
};

export default Label;