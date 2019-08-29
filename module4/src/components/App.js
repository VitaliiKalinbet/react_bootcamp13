import React, { Component } from 'react';
import styles from './App.module.css';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';

class App extends Component {
  state = {
    isOpenDropdown: false,
  };

  render() {
    const { isOpenDropdown } = this.state;
    return (
      <div className={styles.containerApp}>
        <Counter />
        <Counter initialStep={5} />
        <Dropdown isOpen={isOpenDropdown} />
      </div>
    );
  }
}

export default App;
