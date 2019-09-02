import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      step: props.initialStep,
    };

    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement = () => {
    console.log(e);
    this.setState((prevState, props) => ({
      value: prevState.value + props.initialStep,
    }));
  };

  handleDecrement() {
    // console.log(e);
    this.setState((prevState, props) => ({
      value: prevState.value - props.initialStep,
    }));
  }

  render() {
    const { value, step } = this.state;
    return (
      <div>
        <span>{value}</span>
        <Controls
          propStep={step}
          onHandleIncrement={this.handleIncrement}
          onHandleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

Counter.defaultProps = {
  initialStep: 1,
};

Counter.propTypes = {
  initialStep: PropTypes.number,
};

// export default Counter;
