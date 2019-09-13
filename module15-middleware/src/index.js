import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// Каррирование
// const add = function(a, b, c) {
//   return a + b + c;
// };

// const curriedAdd = function(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     };
//   };
// };

// curriedAdd(1)(2)(3);

// const curriedAdd = a => b => c => a + b + c;
// curriedAdd(1)(2)(5)
