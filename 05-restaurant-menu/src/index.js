import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // which item to be rendered (i.e. App)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // where to be rendered i.e. at 'root' in the html file
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
