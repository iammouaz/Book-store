import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-named-as-default
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
