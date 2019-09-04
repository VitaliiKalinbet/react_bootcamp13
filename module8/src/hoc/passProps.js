import React, { Component } from 'react';

const passProps = props => WrappedComponent => {
  return class PassProps extends Component {
    state = {
      a: 1,
    };

    render() {
      return <WrappedComponent {...props} {...this.props} />;
    }
  };
};

export default passProps;

// const passProps = props => BaseComponent => {
//   return function PassProps(props) {
//     return <BaseComponent {...props} {...this.props} />;
//   };
// };
