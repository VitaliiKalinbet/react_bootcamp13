import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { validateAll } from 'indicative';
import ErrorsNotification from '../ErrorsNotification/ErrorsNotification';
import styles from './SignUpForm.module.css';

const rules = {
  valueInputName: 'required|string',
  valueInputSurname: 'required|string',
  login: 'required|string',
  password: 'required|string|min:6',
  email: 'required|email',
};

const messages = {
  required: field => `${field} is required`,
  'email.email': 'Email is invalid',
  'password.required': 'Enter a valid password.',
  'password.min': 'Password must be at least 6 characters long',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  valueInputName: '',
  valueInputSurname: '',
  agreed: false,
  gender: null,
  age: '',
  login: '',
  password: '',
  email: '',
  errors: {},
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  idForInputName = shortid.generate();

  idForInputSurname = shortid.generate();

  idForInputCheckbox = shortid.generate();

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
    const {
      valueInputName,
      valueInputSurname,
      login,
      email,
      password,
    } = this.state;

    validateAll(
      { valueInputName, valueInputSurname, login, email, password },
      rules,
      messages,
    )
      .then(success => console.log('success :', success))
      .catch(errors => {
        console.log('errors  :', errors);

        const errorsObj = {};

        errors.forEach(el => {
          errorsObj[el.field] = el.message;
        });

        console.log(errorsObj);

        this.setState({
          errors: { ...errorsObj },
        });
      });

    this.props.handleSignUp({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const {
      valueInputName,
      valueInputSurname,
      agreed,
      gender,
      age,
      login,
      password,
      email,
      errors,
    } = this.state;
    return (
      <form className={styles.form} onSubmit={this.onSubmitForm}>
        <label htmlFor={this.idForInputName}>
          Name
          <input
            name="valueInputName"
            value={valueInputName}
            onChange={this.handleChange}
            type="text"
            placeholder="name"
            id={this.idForInputName}
          />
        </label>
        {errors.valueInputName && (
          <ErrorsNotification error={errors.valueInputName} />
        )}
        <label htmlFor={this.idForInputSurname}>
          Surname
          <input
            name="valueInputSurname"
            value={valueInputSurname}
            onChange={this.handleChange}
            type="text"
            placeholder="surname"
            id={this.idForInputSurname}
          />
        </label>
        {errors.valueInputSurname && (
          <ErrorsNotification error={errors.valueInputSurname} />
        )}
        <label>
          Login
          <input
            name="login"
            value={login}
            onChange={this.handleChange}
            type="text"
            placeholder="login"
          />
        </label>
        {errors.login && <ErrorsNotification error={errors.login} />}
        <label>
          Password
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            type="password"
            placeholder="password"
          />
        </label>
        {errors.password && <ErrorsNotification error={errors.password} />}
        <label>
          Email
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="email"
            placeholder="email"
          />
        </label>
        {errors.email && <ErrorsNotification error={errors.email} />}
        <label htmlFor={this.idForInputCheckbox}>
          Agreed to terms
          <input
            name="agreed"
            checked={agreed}
            type="checkbox"
            onChange={this.handleChange}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <button type="submit">Sign up as {valueInputName}</button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;
