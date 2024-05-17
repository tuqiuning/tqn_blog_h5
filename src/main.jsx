import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
import { Provider } from 'react-redux';
import store from './store'
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))