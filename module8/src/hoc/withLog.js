/* eslint-disable react/jsx-props-no-spreading */
// import React, { Component } from 'react';

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

// export default withLog;

import React from 'react';

const withLog = function(BaseComponent) {
  return function WithLog(props) {
    console.log(`Calling ${BaseComponent.name} with props: ${props}`);
    console.dir(props);
    return <BaseComponent {...props} />;
  };
};

export default withLog;
