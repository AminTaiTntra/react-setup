import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
