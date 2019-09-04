/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// const sum = (a, b) => {
//   console.log(a, b);
//   return a + b;
// };

// const sumArr = arr => {
//   console.log(arr);
//   return arr.reduce((acc, el) => acc + el, 0);
// };

// // function withLog(BaseComponent) {
// //   console.log(props);
// //   return BaseComponent(props);
// // }

// const withLog = BaseComponent => {
//   return class WithLog extends Component {
//     componentDidMount() {
//       console.log(this.props);
//     }

//     render() {
//       return <BaseComponent {...this.props} />;
//     }
//   };
// };

ReactDOM.render(<App />, document.getElementById('root'));
