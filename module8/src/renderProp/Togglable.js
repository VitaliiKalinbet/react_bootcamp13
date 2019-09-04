/* eslint-disable  */
import { Component } from 'react';

class Togglable extends Component {
  state = { on: false };

  toggle = () => this.setState(state => ({ on: !state.on }));

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default Togglable;
