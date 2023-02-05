import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>

  </React.StrictMode>,
  // <>
  //  <BrowserRouter>
  // <App></App>
  // </BrowserRouter>
  // </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



<React.StrictMode>
  <Provider store={store}>
    <App></App>
  </Provider>

</React.StrictMode> 