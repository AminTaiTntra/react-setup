import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../../styles/loader.scss';

function FullScreenLoader() {
  return (
    <div className="fullscreen-loader">
      <Spinner animation="border" />
    </div>
  );
}

export default FullScreenLoader;
