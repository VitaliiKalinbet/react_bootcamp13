import React, { Component } from 'react';
import styles from './App.module.css';
import SignUpForm from './SignUpForm/SignUpForm';

class App extends Component {
  state = {};

  handleSignUp = data => {
    console.log('data from form  :', data);
  };

  render() {
    return (
      <div className={styles.containerApp}>
        <SignUpForm handleSignUp={this.handleSignUp} />
      </div>
    );
  }
}

export default App;
