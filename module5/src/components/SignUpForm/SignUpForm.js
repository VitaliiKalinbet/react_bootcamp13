import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignUpForm extends Component {
  state = {
    valueInputName: '',
    valueInputSurname: '',
    agreed: null,
  };

  handleChange = event => {
    // console.log(event.target);
    // console.dir(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.handleSignUp({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      valueInputName: '',
      valueInputSurname: '',
      agreed: null,
    });
  };

  render() {
    const { valueInputName, valueInputSurname, agreed } = this.state;
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          name="valueInputName"
          value={valueInputName}
          onChange={this.handleChange}
          type="text"
          placeholder="name"
          required
        />
        <br />
        <input
          name="valueInputSurname"
          value={valueInputSurname}
          onChange={this.handleChange}
          type="text"
          placeholder="surname"
          required
        />
        <br />
        <label>
          Agreed to terms
          <input
            name="agreed"
            checked={agreed}
            type="checkbox"
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign up as {valueInputName}</button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;
